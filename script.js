// class list

const element = document.querySelector('body')

element.classList.add('active')

element.classList.add('green')

console.log(element.classList)

element.classList.remove('active')

element.classList.toggle('active')
element.classList.toggle('green')

// toggle: funciona como um interruptor, se a classe existir ele tira; se a classenão exitir ele adiciona
