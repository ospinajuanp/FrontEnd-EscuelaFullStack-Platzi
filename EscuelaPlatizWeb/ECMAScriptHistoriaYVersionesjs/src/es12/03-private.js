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
    #greeting(){ // # private
        return 'Hello'
    }
    // getter
    get #uAge(){ // # private
        return this.age
    }
    // #setter
    set uAge(nAge){
        this.age = nAge
    }
}
const babyLoper = new user('Pablo',26)
console.log(babyLoper.uAge);
console.log(babyLoper.uAge = 27);
