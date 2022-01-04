// manipulando atributos

const header = document.querySelector('header') // pegando o header que está no HTML.

header.setAttribute('id', 'header') // Aqui estou adicionando um atributo.

const headerID = document.querySelector('#header') // aqui crio uma const, e busco pelo atributo que adicionei no documento.

console.log(headerID.getAttribute('class')) // aqui consigo ver o atributo que adicionei.  get: (pegar).

header.removeAttribute('id') // aqui consigo remover um atributo.

header.removeAttribute('class')
