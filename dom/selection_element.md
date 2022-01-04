# DOM (Document object Model)

- È o HTML convertido para um objeto JavaScript
- API que representa e interage com o HTML
- Estrutura de dados do tipo árvore, criada pelo browser
- Propriedades e métodos

# Para que?

- JavaScript usa a DOM para se conectar ao html
- Manipula o HTML com o JavaScript
- Só programa para Web porque existe a DOM

## Selecionando Elementos

getElementById()

// vai selecionar um elemento do tipo id.
// vai pegar o filho completo.

const element = document.getElementById('blog-title')

console.log(element)

======================================================

getElementByClassName()

// pegar os elementos por classes.

const element = document.getElementsByClassName('one')

console.log(element)

======================================================

// getElemnetsByTagName()
// para selecionar elementos por tag.

const element = document.getElementsByTagName('meta')

console.log(element)

======================================================
// document.querySelector('')
// ele pega o html por seletor,semelhante ao css.
// vai pegar o primeiro que ele achar.

// const element = document.querySelector('.one')

// console.log(element)

// document.querySelectorAll('')
// vai pegar todos que ele achar via seletor.

const element = document.querySelectorAll('.one')

console.log(element)

======================================================
// Qual usar

// getElementById(vai retorna diretamente um element)
// getElementByClassName(vai me dar um retorn de HTMLCollection)
// getElementByTagName(vai retorna um elemento HTMLCollection)
// querySelector(vai retorna diretamente um elemento)
// querySelectorAll(vai retorna um NodeList)
======================================================
