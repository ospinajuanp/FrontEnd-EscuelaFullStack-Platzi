// El flat me sirve para tranformar una matrix en un array/vector
const array = [1,1,2,3,5,[8,13,21,[34,55]]];
console.log(array.flat(3));// retorna vector

// El Flat map 
const array2 = [1,1,2,3,5,8,13,21,34,55];
console.log(array2.flatMap(value => [value,value*2]));// retorna un vector con los valores de la lógica aplicada array = [1]-> [valor, valor*2] -> [1,1*2] -> [1,2]