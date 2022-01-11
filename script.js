// navegando pelos elementos

// nextSibling: sibling em tradução são irmãos... e nextSibling é "proximo irmão"

// const el = document.querySelector('header')

// console.log(el.nextSibling)

//nextElementSibling: vai desconsiderar os espaços vazios 

// previousSibling: vai pegar o irmão anterior, considerando os espaços.  // previousElementSibling: vai desconsiderar os espaços, indo direto ao proximo elemento.


const el = document.querySelector('body script')

console.log(el.previousSibling);

console.log(el.previousElementSibling);