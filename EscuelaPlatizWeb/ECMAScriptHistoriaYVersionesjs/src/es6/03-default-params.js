// function con variables con valores por defecto
function newUser (name,age,country){
    var name = name || 'Juan';
    var age = age || 26;
    var country = country || 'Col';
    console.log(name, age, country);
}

newUser()
newUser('Pablo',27,'MX')

// function con variables con valores por defecto nuevo
function newAdmin (name = 'Juan', age = 26, country = 'Col'){
    console.log(name, age, country);
}

newAdmin()
newAdmin('Pablo',27,'MX')