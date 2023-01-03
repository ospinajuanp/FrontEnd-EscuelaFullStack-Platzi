let playerOption, machineOption, win = 0, defeat = 0;

alert('Bienvenido al juego de piedra papel o tijera')

function getRandomNumber(num = 3){
    return Math.floor((Math.random() * num) + 1);
}
function getOptionSelect (numberOption){
    switch(numberOption){
        case 1:
            return 'Piedra 🥌'
            break;
        case 2:
            return 'Papel 📋'
            break;
        case 3:
            return 'Tijera ✂'
            break;
        default:
            console.error(`Eleccion invalidad`)
            break;
    }
}

function playGame() {
    while (defeat < 3 && win < 3){
        playerOption = prompt(`Escoja una opcion
        1.Piedra 🥌
        2.Papel 📋 
        3.Tijera ✂ 
        4.Salir 🚪`);
        
        playerOption = parseInt(playerOption)

        machineOption = parseInt(getRandomNumber())

        if(playerOption==4){
            alert('Gracias por jugar!')
            return
        }
        if((playerOption<1) || (playerOption>3) || (playerOption==null)){
            alert('Ingreso errado')
            // playGame()
        }
        if(playerOption == machineOption){
            alert(`Empate Jugador Eligion ${getOptionSelect(playerOption)} y la maquina Eligio ${getOptionSelect(machineOption)}`)
            // playGame()
        }
        //* This code use when i wanna use conditional if in lose game 
        // if((playerOption == 1 && machineOption == 2) || (playerOption == 2 && machineOption == 3 ) || (playerOption == 3 && machineOption == 1)){
            // alert(`Perdio Jugador Eligion ${getOptionSelect(playerOption)} y la maquina Eligio ${getOptionSelect(machineOption)}`)
            // playGame()
        // }
        else if((playerOption == 1 && machineOption == 3) || (playerOption == 2 && machineOption == 3) || (playerOption == 3 && machineOption == 2)){
            alert(`Gano Jugador Eligion ${getOptionSelect(playerOption)} y la maquina Eligio ${getOptionSelect(machineOption)}`)
            // playGame()
            win++
        }else{
            alert(`Perdio Jugador Eligion ${getOptionSelect(playerOption)} y la maquina Eligio ${getOptionSelect(machineOption)}`)
            // playGame()
            defeat++
        }
    }
    alert(`Jugador gano ${win} y la maquina gano ${defeat}`)

}
playGame()