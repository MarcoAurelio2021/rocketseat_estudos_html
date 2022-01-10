### Navegando pelos elementos

##### elemento pai

//parentNode

//parentElement

const body = document.querySelector('body')

console.log(body.parentNode) // ou (body.parantElement) vai pegar o elemento pai.

const element = document.querySelector('h1')

console.log(element.parentElement)
_/===================================================/_

##### navegando pelos elementos filhos

// childNodes : vai considerar os espaços entre meus elementos "text" essa á forma que vai ser apresentada na hora de colocar no console.

const el = document.querySelector('body')

console.log(el.childNodes)

// children : elimina os espaços vazios, e retorna um HTML Colletion, somente os elementos.

console.log(el.children)

// firstChild : vai pegar o primeiro filho, ou seja uma linha vazia, "text" ou o primeiro elemento.

console.log(el.firstChild)

// firstElementChild // vai desconsiderar as linhas vazias e pegar só o primeiro elemento.

console.log(el.firstElementChild)

// lastChild: (ultimo filho) vai pegar o ultimpo filho, não considera linha vazia, mesmo contendo espaço entre o elemento. vai ser sempre o ultimo elemento da linha.

console.log(el.lastChild)

/_lastElementChild: (ultimo filho), o mesmo se aplica (
vai pegar o ultimpo filho, não considera linha vazia, mesmo contendo espaço entre o elemento. vai ser sempre o ultimo elemento da linha.
)_/
console.log(el.lastElementChild)
_/===================================================/_
