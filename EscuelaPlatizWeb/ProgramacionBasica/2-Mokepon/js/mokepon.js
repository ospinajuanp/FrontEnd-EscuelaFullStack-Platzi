function checkSelectPet (petsSelect){
    for (pet of petsSelect){
        if(pet.petSelect.checked){
            alert(`You selected the ${pet.pet}`)
            return
        }
    }
    alert('YOU HAVE NOT SELECTED ANY MOKEPON')
}

function selectPetPlayer(){
    let inputPets = []
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