// Variable var, Creación, asignación y re-asignación
var lastName = 'Juan';
lastName = 'Pablo';
console.log(lastName);
// Variable let, Creación, asignación y re-asignación
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);
// Variable const, Creación, asignación y re-asignación
const animal = 'Dog';
animal = 'Cat';// No se puede re-asignar
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'Apple';// function scope
        let fruit2 = 'Kiwi';// block scope
        const fruit3 = 'Banana';// block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
} 

fruits()

