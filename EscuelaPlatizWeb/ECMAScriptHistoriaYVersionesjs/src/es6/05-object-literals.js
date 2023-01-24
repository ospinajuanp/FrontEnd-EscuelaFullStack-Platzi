// enhanced object literals

// anteriormente
function newUser (user,age,country){
    return {
        user: user,
        age: age,
        country: country
    }
}
console.log(newUser('ospinajuanp',26,'COL'));

// nueva forma
function newUser2 (user,age,country,uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser2('ospinajuanp',26,'COL',1));