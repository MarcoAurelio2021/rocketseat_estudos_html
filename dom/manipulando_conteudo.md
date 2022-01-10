### manipulando conteúdo

// textContent

const element = document.querySelector('h1')

// element.textContent += ' Olá '

console.log(element.textContent) // para verificra o valor de texto.
// tem como concatenar adicionando "+" antes do = (element.textContent += ' Olá ')

// innerText
// vai trocar o texto interno do meu elemento

element.innerText = 'como vai?'

// innerHtml
// vai adicionar um HTML no meu código

element.innerHTML = 'como vai? <small>!!!<small/>'

_/===================================================/_

- value

// manipulando conteúdo
// value
// para manipular
const element = document.querySelector('input')

console.log(element.value) // serve para me retorna o valor, mostrar!

element.value = 'contato' // também serve para alterar valor, seja um input ou qualquer outro elemento que receba o atributo value.
_/===================================================/_

### manipulando atributos

const header = document.querySelector('header') // pegando o header que está no HTML.

header.setAttribute('id', 'header') // Aqui estou adicionando um atributo.

const headerID = document.querySelector('#header') // aqui crio uma const, e busco pelo atributo que adicionei no documento.

console.log(headerID.getAttribute('class')) // aqui consigo ver o atributo que adicionei. get: (pegar).

header.removeAttribute('id') // aqui consigo remover um atributo.

header.removeAttribute('class')

_/===================================================/_
