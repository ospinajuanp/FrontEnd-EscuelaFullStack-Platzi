// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a,fruits[1]);


// object destructuring 
let user = {username:'juan',age:26}
let {username,age} = user
console.log(username, user.age);


// spread operator 
let person = {username:'Pablo',age:27}
let country = 'Col'
let data = {...person,country}
console.log(data);

let data2 = {id:1,...person,country}
console.log(data2);



// rest
function sum (num,...values){
    console.log(values);
    console.log(num+values[0]);
    // console.log(values.length); para contar la cantidad de values que existen
    return num + values[0]
}
sum(1,1,2,3)