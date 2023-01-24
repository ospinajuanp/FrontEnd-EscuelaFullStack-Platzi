// Declaración de una clase
// class user {

// }
// Instancia - Creación de esta clase
//const newUser = new user()

// ----------------------------------------------------------
// class user {
//     // metodos
//     greeting(){
//         return 'Hello'
//     }
// }

// const jp = new user()
// console.log(jp.greeting());
// const babyLoper = new user()
// console.log(babyLoper.greeting());

// ----------------------------------------------------------
// class user {
//     // contructor 
//     constructor(){
//         console.log('New User');
//     }
//     greeting(){
//         return 'Hello'
//     }
// }

// const or = new user()

// ----------------------------------------------------------
// class user {
//     // contructor 
//     constructor(name){
//          // This
//         this.name = name
//     }
//     speak(){
//         return `${this.greeting()} ${this.name}`
//     }
//     greeting(){
//         return 'Hello'
//     }
// }
// const ana = new user('ana')
// console.log(ana.speak());.

// ----------------------------------------------------------
class user {
    // contructor 
    constructor(name,age){
         // This
        this.name = name
        this.age = age
    }
    speak(){
        return `${this.greeting()} ${this.name}`
    }
    greeting(){
        return 'Hello'
    }
    // getter
    get uAge(){
        return this.age
    }
    // setter
    set uAge(nAge){
        this.age = nAge
    }
}
const babyLoper = new user('Pablo',26)
console.log(babyLoper.uAge);
console.log(babyLoper.uAge = 27);
