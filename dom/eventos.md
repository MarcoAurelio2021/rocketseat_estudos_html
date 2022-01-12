// Eventos
// A Dom é direcionada a evento, significa que seu clico em alguma coisa, se meu mouse vai para cima ou para baixo e outros.

// como disparar um evento: primeiro tem que ter o elemento para disparar o evento, tem como colocar direto no elemento (no HTML) > on < significa que vai ser disparado, executar. E tudo que eu colocar depois do > on < é o nome do evento, onclick, onabort, onblur e outros.

function print() {
console.log('print')
}

// eventos de teclado

const input = document.querySelector('input')

input.onkeydown = function () {
console.log('rodei')
}
_/==========================================================/_

// adicionando evento via JS

const h1 = document.querySelector('h1')

h1.addEventListener('click', print) // é uma função que vai receber dois argumentos.

function print() {
console.log('print')
}

// adcionando eventos via JS (outro metodo)

// o mais recomendado é o addEventListener(), ele vai enpilhar todas a funcionalidades e vai mostrar todas que estiver no documento.

h1.addEventListener('click', function () {
console.log('outro momento')
})

_/==========================================================/_

// argument event

// pesquisar em outro momento sobre.
