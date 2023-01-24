const anotherFunction = () => {
    return new Promise( (resolve,reject) => {
        if(false){
            resolve('Hola!')
        }
        else{
            reject('Mal')
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))