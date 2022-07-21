const h1 = document.querySelector('h1')
const p = document.querySelector('p')

const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')

const input = document.querySelector('input')

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})


console.log('Hello, World')


const img = document.createElement('img')

img.setAttribute('src','https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg')

pid.append(img)