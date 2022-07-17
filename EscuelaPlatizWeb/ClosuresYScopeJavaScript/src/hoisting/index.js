// HOISTING
console.log(nameOfDog); // hoisting lo que hace es crear ↪  var nameOfDog
var nameOfDog = 'Elmo'

// ES LO MISMO HACER ESTO
var nameOfDog;
console.log(nameOfDog); // hoisting lo que hace es crear ↪  var nameOfDog
var nameOfDog = 'Elmo'





// HOISTING EN UNA FUNCION
nameOfDogFunction()

function nameOfDogFunction (){
    console.log(`El mejor perrito es ${elmo}`);    
}

var elmo = 'Elmito'
