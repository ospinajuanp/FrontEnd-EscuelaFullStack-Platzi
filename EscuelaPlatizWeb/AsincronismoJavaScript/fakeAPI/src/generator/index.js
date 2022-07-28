function* gen (){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);



function* iterate(array){
    for (let iterator of array) {
        yield iterator
    }
}

const it = iterate(['juan','pablo','ana','lucia','oscar'])
console.log(it.next())