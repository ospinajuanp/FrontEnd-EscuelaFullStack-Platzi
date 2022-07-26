const numbers = [1,30,49,29,10,13]

let rta = true
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element > 40){
        rta = false
    }
}

const rta2 = numbers.every(number => number <= 40)

console.log(rta);
console.log(rta2);



const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 16,
    },
    {
      name: "Santiago",
      age: 18,
    },
];
const noValido = () => {
    let players = team.filter(player => player.age>=15)
    players.forEach(player => {
        console.log(`${player.name} tiene ${player.age}, mas de 14 años permitidos`)
    })
    
}
const validationAge = team.every(player => player.age < 15)
(validationAge)
    ?console.log('Team Aceptado')
    :noValido()

