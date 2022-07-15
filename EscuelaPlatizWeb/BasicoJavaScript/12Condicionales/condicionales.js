

// DONDICIONAL SI / IF
if(true){
    console.log("Hola")
}
// SI NO SI / ELSE IF 
else if(!false){
    console.log("soy negando el falso (verdadero)")
}
// SI NO / ELSE
else{
    console.log("soy falso")
}

var edad = 18 ;
if (edad==18){
    console.log("Puedes votar, sera tu 1ra votacion")
}else if(edad > 18){
    console.log("Puedes votar de nuevo")
}
else{
    console.log("No puedes votar")
}


// OPERADOR TERNARIO
condicion ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno"