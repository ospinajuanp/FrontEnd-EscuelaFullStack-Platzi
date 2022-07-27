// You have this snippets -> 
//	- fun(function) 
//	- con(console.log) 
//	- arrowFunction(arrow function) 
//	- api(const API) 
//	- getFetch(get data url) 
//	- setFetch(set data url) 

const fnAsync = () => { 
    return new Promise((resolve,reject) => {
        (true)
            ?setTimeout( () => resolve('Asyn!!'), 2000 )
            :reject(new Error('Error!'));
    })
}


const anotherFn = async () => { 
    const something = await fnAsync ()
    console.log(something)
    console.log('Hello!')
}

console.log('Before');
anotherFn();
console.log('After');