// VARIABLES

var a; // declaracion
a = 'a'; // asignacion
var b = 'b'; // declaracion y asignacion
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// global scope
var fruit = 'Apple'

function bestFruit(){
    console.log(fruit)
}

bestFruit()



function country (){
    country = 'Colombia' // global
    console.log(country)
}

country()
console.log(country)