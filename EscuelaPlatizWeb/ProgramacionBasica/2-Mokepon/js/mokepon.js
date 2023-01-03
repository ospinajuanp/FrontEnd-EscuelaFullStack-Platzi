function selectPetPlayer(){

}

function startGame(){
    let buttonPetPlayer = document.getElementById('button-select_pet')
    buttonPetPlayer.addEventListener('click',selectPetPlayer)
}

window.addEventListener('load', startGame )