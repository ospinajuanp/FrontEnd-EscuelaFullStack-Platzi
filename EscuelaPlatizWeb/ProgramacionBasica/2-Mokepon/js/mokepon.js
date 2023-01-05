let inputPets = [] 


function getRandomNumber(num = 6){
    return Math.floor((Math.random() * num) + 1);
}
function insertPet (spanSelect,pet){
    spanSelect.innerHTML = pet
}

function selectPetEnemy(){
    let spanPetEnemy = document.getElementById('pet-Enemy')
    let pet = inputPets[getRandomNumber()].pet.toString()
    insertPet(spanPetEnemy,pet)
    
}

function checkSelectPet (petsSelect){
    let spanPetPlayer = document.getElementById('pet-Player')
    for (pets of petsSelect){
        if(pets.petSelect.checked){
            insertPet(spanPetPlayer,pets.pet)
            selectPetEnemy()
            return
        }
    }
    alert('YOU HAVE NOT SELECTED ANY MOKEPON')
}
function selectPetPlayer(){
    inputPets.push({petSelect:document.getElementById('hipodoge'),pet:'hipodoge'})
    inputPets.push({petSelect:document.getElementById('capipepo'),pet:'capipepo'})
    inputPets.push({petSelect:document.getElementById('ratigueya'),pet:'ratigueya'})
    inputPets.push({petSelect:document.getElementById('langostelvis'),pet:'langostelvis'})
    inputPets.push({petSelect:document.getElementById('tucapalma'),pet:'tucapalma'})
    inputPets.push({petSelect:document.getElementById('pudos'),pet:'pudos'})
    checkSelectPet(inputPets)
}

function startGame(){
    let buttonPetPlayer = document.getElementById('button-select_pet')
    buttonPetPlayer.addEventListener('click',selectPetPlayer)
}

window.addEventListener('load', startGame )