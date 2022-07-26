const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
            newArray.push(element)
    }   
}
console.log(newArray);

const matriz2 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const rta = matriz2.flat()

console.log(rta);

const rta2 = matriz2.flat(3)

console.log(rta2);

