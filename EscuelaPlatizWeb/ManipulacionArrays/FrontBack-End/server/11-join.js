const elements = ['Fire', 'Air','Water']

let rta = ''
const separador = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rta += element + separador
}

console.log(rta);

const rta2 = elements.join(separador)

console.log(rta2);

const tittle = 'Curso de manipulacion de arrays'

const tittleUrl = tittle.split(' ').join('-').toLowerCase()

console.log(tittleUrl);