// Criando Elemento na página

// createElement: cria um elemento.

const div = document.createElement('div') // vai adcioanar um elemento na página, dentro do body.

div.innerText = 'olá devs!' // vai adicionar um texto interno.

// append: significa que vai adcionar alguma coisa depois.

// prepend: vai adiconar antes. vai pegar o body e antes de qualquer elemento dentro vai adicionar

const body = document.querySelector('body')

// const script = body.querySelector('script') // estou procurando dentro do body o script

// body.insertBefore(div, script) // pego o parente que quero, dentro de dos paretêses passo o argumento. primeiro qual elemento novo que quero colocar e o nó de referência, que no caso é o script "antes da tag script"

// não temos um elemento insertAfter, mas tem jeito de fazeer uma manobra para add depois do elemento.

const header = body.querySelector('header')

body.insertBefore(div, header.nextElementSibling) // dessa forma consigo adicionar depois do elemento.
