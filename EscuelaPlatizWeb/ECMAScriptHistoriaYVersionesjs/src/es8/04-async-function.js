const fnAsync = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(()=> resolve('Async!'),2000)
        : reject(new Error('Error!'))
    })
}

const anotherFnAsync = async ()=>{
    const someting = await fnAsync()
    console.log(someting);
    console.log('Hello');
}

console.log('Before');
anotherFnAsync()
console.log('After');