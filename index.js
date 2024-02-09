
const perguntas = [
    {
      pergunta: "Qual é a função do operador '= = =' em JavaScript?",
      respostas: [
        "Compara valores e tipos de dados sem coerção",
        "Compara apenas os valores, não os tipos de dados",
        "Realiza uma atribuição de valor",
        "Verifica se dois valores são diferentes"
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Uma função que não recebe argumentos",
        "Uma função que encapsula variáveis de seu escopo externo",
        "Um operador de comparação"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de estrutura de dados",
        "Um framework popular",
        "Uma interface de programação para interação com elementos HTML",
        "Uma linguagem de programação"
      ],
      correta: 2
    },
    {
      pergunta: "Qual a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "let é usado para variáveis mutáveis, const para variáveis imutáveis",
        "const é usado para variáveis mutáveis, let para variáveis imutáveis",
        "São usados em contextos diferentes e não podem ser comparados"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Uma função interna do navegador",
        "Um tipo de dado primitivo",
        "Um evento que é acionado quando um elemento é clicado",
        "Uma variável global"
      ],
      correta: 2
    },
    {
      pergunta: "Como se chama o processo de transformar um objeto em uma string em JavaScript?",
      respostas: [
        "Parse",
        "Stringify",
        "Convert",
        "Encode"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo",
        "Uma linguagem de programação",
        "Uma notação de objeto de JavaScript",
        "Uma biblioteca popular"
      ],
      correta: 2
    },
    {
      pergunta: "Qual a finalidade do método 'forEach' em arrays JavaScript?",
      respostas: [
        "Iterar sobre elementos de um array",
        "Realizar uma operação de multiplicação",
        "Classificar os elementos de um array",
        "Criar um novo array"
      ],
      correta: 0
    },
    {
      pergunta: "O que é hoisting em JavaScript?",
      respostas: [
        "Um tipo de erro de runtime",
        "O comportamento de mover declarações para o topo do escopo",
        "Uma biblioteca popular",
        "Um padrão de projeto"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São sinônimos, podem ser usados interchangeably",
        "null representa a ausência intencional de um valor, undefined é atribuído automaticamente",
        "undefined representa a ausência intencional de um valor, null é atribuído automaticamente",
        "Ambos representam valores não definidos, mas são usados em contextos diferentes"
      ],
      correta: 1
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  
  //loop ou laço de repeticao
  for(const item of perguntas) {
      //<div class="quiz-item">
      //  <h3>Pergunta 01</h3>
      //  <dl>
      //     <dt>
      //       <input type="radio" name="item" value="0">
      //       <span>
      //         Resposta A
      //       </span>
      //     </dt>
      //  </dl>
      //</div>
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        } 
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }