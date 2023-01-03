let playerOption, machineOption;

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
        playGame()
    }
    if(playerOption == machineOption){
        alert(`Empate Jugador Eligion ${getOptionSelect(playerOption)} y la maquina Eligio ${getOptionSelect(machineOption)}`)
        playGame()
    }
    if((playerOption == 1 && machineOption == 2) || (playerOption == 2 && machineOption == 3 ) || (playerOption == 3 && machineOption == 1)){
        alert(`Perdio Jugador Eligion ${getOptionSelect(playerOption)} y la maquina Eligio ${getOptionSelect(machineOption)}`)
        playGame()
    }
    if((playerOption == 1 && machineOption == 3) || (playerOption == 2 && machineOption == 3) || (playerOption == 3 && machineOption == 2)){
        alert(`Gano Jugador Eligion ${getOptionSelect(playerOption)} y la maquina Eligio ${getOptionSelect(machineOption)}`)
        playGame()
    }


}
playGame()