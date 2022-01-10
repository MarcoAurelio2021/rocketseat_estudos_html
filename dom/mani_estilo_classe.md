## manipulando estilos e classes

### manipulando estilo

// Alterando Estilos
const element = document.querySelector('body')

element.style.backgroundColor = 'blue' // vai fazer com que eu coloque css em linha, como seu eu fosse no Body e colocasse um estilo.

// pode usar qualquer propriedade css.

console.log((element.style.backgroundColor = 'blue'))

_/===================================================/_

### class list

// class list

const element = document.querySelector('body, green') // posso adicionar mais de uma classe.

element.classList.add('active')

element.classList.add('green')

console.log(element.classList)

element.classList.remove('active')

element.classList.toggle('active')
element.classList.toggle('green')

// toggle: funciona como um interruptor, on off, se a classe existir ele tira; se a classenão exitir ele adiciona

_/===================================================/_
