const pets = ['cat','dog','bat']

let includeInArray = false
for (let index = 0; index < pets.length; index++) {
    const pet = pets[index];
    if (pet === 'dog') {
        includeInArray = true
        break
    }
}

console.log(includeInArray);


const includeInArray2 = pets.includes('dog')
console.log(includeInArray2);

