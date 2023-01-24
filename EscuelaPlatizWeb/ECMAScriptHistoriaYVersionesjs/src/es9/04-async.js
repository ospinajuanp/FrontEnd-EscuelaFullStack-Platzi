async function* fnGenerator (){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);

}

const other = fnGenerator()
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
console.log('Hello');




async function arrayOfName(array){
    for await(let value of array){
        console.log(value);
    }
}

const name = arrayOfName(['Juan','Pablo','Ana'])
console.log('After');