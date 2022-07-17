// VAR
var firtsName; // se asigna undefined
firtsName = 'Juan' // asigna
console.log(firtsName)

var lastName = 'Pablo';// declarar / asignar
lastName = 'Ana';// asignar
console.log(lastName);

var secondName = 'Pablo';// declarar / asignar
var secondName = 'Ana';// reasignar
console.log(secondName);



// let
let firtsNameLet1; // se asigna undefined
firtsNameLet1 = 'Juan' // asigna
console.log(firtsNameLet1);

let firtsNameLet2 = 'Pablo';// declarar / asignar
firtsNameLet2 = 'Ana';// asignar
console.log(firtsNameLet2);

let firtsNameLet3 = 'Pablo'; // declarar / asignar
//let firtsNameLet3 = 'Ana'; // redeclarar / reasignar - no se puede
console.log(firtsNameLet3);


// const
const firtsNameConst2 = 'Pablo';// declarar / asignar
//firtsNameConst2 = 'Ana';// asignar - no se puede
console.log(firtsNameConst2);

const firtsNameConst3 = 'Pablo'; // declarar / asignar
//let firtsNameConst3 = 'Ana'; // redeclarar / reasignar - no se puede
console.log(firtsNameConst3);


// const en array
const vehicles = [];
vehicles.push('🚓')
console.log(vehicles)
vehicles.pop()
console.log(vehicles)