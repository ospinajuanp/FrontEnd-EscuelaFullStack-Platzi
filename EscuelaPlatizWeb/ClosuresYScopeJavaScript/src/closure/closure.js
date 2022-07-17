function greeting (){

    let userName = 'Juan'

    return function displayUserName (){
        return `Hello ${userName}`;
        
    }
}

const g = greeting()
console.log(g);
console.log(g());