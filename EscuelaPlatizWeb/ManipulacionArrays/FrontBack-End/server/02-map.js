const letters = ['a','b','c'];

// const newLetters = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newLetters.push(element + '++')
// }

const newLetters = letters.map(item => item+'++');
console.log(letters, newLetters);
