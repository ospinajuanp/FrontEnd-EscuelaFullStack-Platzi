function sum (num1,num2){
    return num1 + num2
}
function res (num1,num2){
    return num1 - num2
}

function calc (num1, num2, operation){
    return operation(num1,num2)
}

const num1 = 5;
const num2 = 2;

console.log(calc(num1,num2,sum))
console.log(calc(num1,num2,res))


setTimeout(function(){
    console.log('Hola js')
},5000)

function gretting (name){
    console.log(`Hola ${name}`);   
}
setTimeout(gretting,2000,'juan')