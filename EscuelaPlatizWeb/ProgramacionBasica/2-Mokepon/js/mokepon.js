let inputPets = [],attackEnemy=['Fire','Water','Earth'];
let selectAttackPlayer,selectAttackEnemy, livePetPlayer = 3,livePetEnemy = 3;

function getRandomNumber(num = 6,numMin = 1){
    return Math.floor((Math.random() * num - numMin ) + 1);
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

function attackEnemyRandom (){
    return attackEnemy[getRandomNumber(3)]
}

function playerWonDefeat (){
    if(selectAttackPlayer == selectAttackEnemy){
        return 'DRAW ⚜'
    }else if ((selectAttackPlayer == 'Fire' && selectAttackEnemy == 'Water') || (selectAttackPlayer == 'Water' && selectAttackEnemy == 'Earth') || (selectAttackPlayer == 'Earth' && selectAttackEnemy == 'Fire')){
        livePetEnemy--
        return 'Your Won ❕'
    }else {
        livePetPlayer--
        return 'Your Defeat ❗'
    }
}

function chooseLivesPets(){
    let spanLivePlayer = document.getElementById('petLives-Player')
    let spanLiveEnemy = document.getElementById('petLives-Enemy')
    spanLivePlayer.innerHTML = livePetPlayer
    spanLiveEnemy.innerHTML = livePetEnemy
}

function createMsgEndAttack (){
    while( livePetPlayer > 0 && livePetEnemy > 0 ){
        let msg = document.getElementById('message')
        let paragraph = document.createAttribute('p')
        let resultPlay = playerWonDefeat()
        chooseLivesPets()
        msg.innerHTML += `Your pet attacked with ${selectAttackPlayer}, the enemy's pet attacked with ${selectAttackEnemy} - ${resultPlay}<br>`
        msg.appendChild(paragraph)
    }

}

function attackFire (){
    selectAttackPlayer = 'Fire'
    selectAttackEnemy=attackEnemyRandom()
    createMsgEndAttack()
}

function attackWater (){
    selectAttackPlayer = 'Water'
    selectAttackEnemy=attackEnemyRandom()
    createMsgEndAttack()
}

function attackEarth (){
    selectAttackPlayer = 'Earth'
    selectAttackEnemy=attackEnemyRandom();
    createMsgEndAttack()
}

function startGame(){
    let buttonPetPlayer = document.getElementById('button-select_pet')
    buttonPetPlayer.addEventListener('click',selectPetPlayer)
    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click',attackFire)
    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click',attackWater)
    let buttonPetEarth = document.getElementById('button-earth')
    buttonPetEarth.addEventListener('click',attackEarth)
}

window.addEventListener('load', startGame )