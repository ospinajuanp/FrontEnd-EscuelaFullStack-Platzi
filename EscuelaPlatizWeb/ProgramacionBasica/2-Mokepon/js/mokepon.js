let inputPets = [],attackEnemy=['Fire','Water','Earth','Block'], imgUrl;
let infoMokepon = {hipodoge:{typeAttack:[1,4],live:680,valueDamage:80},
    capipepo:{typeAttack:[2,4],live:530,valueDamage:70},
    ratigueya:{typeAttack:[3,4],live:560,valueDamage:90},
    langostelvis:{typeAttack:[2,3,4],live:850,valueDamage:80},
    tucapalma:{typeAttack:[1,3,4],live:920,valueDamage:70},
    pudos:{typeAttack:[1,2,3,4],live:780,valueDamage:60},
}
let selectAttackPlayer,selectAttackEnemy, livePetPlayer,livePetEnemy,damagePlayer,damageEnemy, petEnemy;
let buttonPetPlayer,buttonFire, buttonWater, buttonEarth,buttonBlock, buttonResetGame,spanPetPlayer,spanPetEnemy,spanLivePlayer,spanLiveEnemy,sectionPet,sectionAttack,sectionReset, buttonImgSrc,buttonHipodoge;

function chooseDisableActiveButton (buttonChoose,stateButton){
    buttonChoose.disabled = stateButton
}

function getRandomNumber(num = 6){
    return Math.floor((Math.random() * num ) + 1);
}

function insertText (spanSelect,pet){
    spanSelect.innerHTML = pet
}

function selectPetEnemy(){
    spanPetEnemy = document.getElementById('pet-Enemy')
    petEnemy = inputPets[getRandomNumber()].pet.toString()
    insertText(spanPetEnemy,petEnemy)
}

function checkSelectPet (petsSelect){
    spanPetPlayer = document.getElementById('pet-Player')
    for (pets of petsSelect){
        if(pets.petSelect.checked){
            sectionPet.style.display = 'none'
            sectionAttack.style.display = 'flex'
            sectionReset.style.display = 'flex'
            insertText(spanPetPlayer,pets.pet)            
            selectPetEnemy()
            livePetPlayer = infoMokepon[pets.pet].live;
            livePetEnemy = infoMokepon[petEnemy].live;
            chooseLivesPets()
            damagePlayer = infoMokepon[pets.pet].valueDamage;
            damageEnemy = infoMokepon[petEnemy].valueDamage;
            if(infoMokepon[pets.pet].typeAttack.includes(1)){
                chooseDisableActiveButton(buttonFire,false)
            }
            if(infoMokepon[pets.pet].typeAttack.includes(2)){
                chooseDisableActiveButton(buttonWater,false)
            }
            if(infoMokepon[pets.pet].typeAttack.includes(3)){
                chooseDisableActiveButton(buttonEarth,false)
            }      

            chooseDisableActiveButton(buttonPetPlayer,true)            
            chooseDisableActiveButton(buttonBlock,false)
            chooseDisableActiveButton(buttonResetGame,false)
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
    let randomNumAttack,attackEnemySelect,booleanCorrectAttack = true;
    while(booleanCorrectAttack){
        randomNumAttack = getRandomNumber(4)
        if (infoMokepon[spanPetEnemy.innerHTML].typeAttack.includes(randomNumAttack)){
            randomNumAttack--
            attackEnemySelect= attackEnemy[randomNumAttack];
            booleanCorrectAttack = false
            return attackEnemySelect
        }
    }
}

function playerWonDefeat (){
    if((selectAttackPlayer == selectAttackEnemy) && (selectAttackPlayer != 'Block' || selectAttackEnemy != 'Block')){
        return 'DRAW ⚜'
    }else if(selectAttackPlayer == 'Block' || selectAttackEnemy == 'Block'){
        if (selectAttackPlayer == 'Block'){
            livePetPlayer+= Math.floor(damageEnemy*(Math.random() * 1))
            if (livePetPlayer> 1000){
                livePetPlayer=1000
            }
        }else{
            livePetEnemy+= Math.floor(damagePlayer*(Math.random() * 1))
            if (livePetEnemy> 1000){
                livePetEnemy = 1000
            }
        }
        return 'Blocking 🛡'
    }else if ((selectAttackPlayer == 'Fire' && selectAttackEnemy == 'Water') || (selectAttackPlayer == 'Water' && selectAttackEnemy == 'Earth') || (selectAttackPlayer == 'Earth' && selectAttackEnemy == 'Fire')){
        livePetEnemy-= Math.floor(damagePlayer*(Math.random() * 1))
        if (livePetEnemy< 0){
            livePetEnemy = 0
        }
        return 'Your Won ❕'
    }else {
        livePetPlayer-= Math.floor(damageEnemy*(Math.random() * 1))
        if (livePetPlayer< 0){
            livePetPlayer = 0
        }
        return 'Your Defeat ❗'
    }
}

function chooseLivesPets(){
    spanLivePlayer = document.getElementById('petLives-Player')
    spanLiveEnemy = document.getElementById('petLives-Enemy')
    spanLivePlayer.innerHTML = livePetPlayer
    spanLiveEnemy.innerHTML = livePetEnemy
}

function createMsgEndAttack (cleanMessage = false){
    if(cleanMessage){
        document.getElementById('message').innerHTML = ''
    }
    while( livePetPlayer > 0 && livePetEnemy > 0 ){
        let msg = document.getElementById('message')
        let paragraph = document.createAttribute('p')
        if(cleanMessage) {
            chooseDisableActiveButton(buttonFire,true)
            chooseDisableActiveButton(buttonWater,true)
            chooseDisableActiveButton(buttonEarth,true)
            chooseDisableActiveButton(buttonBlock,true)
            chooseLivesPets()
            insertText(spanPetPlayer,'__')
            insertText(spanPetEnemy,'__')
            insertText(spanLivePlayer,'__')
            insertText(spanLiveEnemy,'__')
            msg.innerHTML = ` `
        }else{
            let resultPlay = playerWonDefeat()
            if(livePetPlayer < 1 || livePetEnemy < 1 ){
                chooseDisableActiveButton(buttonFire,true)
                chooseDisableActiveButton(buttonWater,true)
                chooseDisableActiveButton(buttonEarth,true)
                chooseDisableActiveButton(buttonBlock,true)
                if(livePetEnemy == 0){
                    alert('Congratulations You won the game')
                }else{
                    alert('Sorry you lost the game')
                }
            }
            chooseLivesPets()
            msg.innerHTML += `Your pet attacked with ${selectAttackPlayer}, the enemy's pet attacked with ${selectAttackEnemy} - ${resultPlay}<br>`
        }
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

function attackBlock (){
    selectAttackPlayer = 'Block'
    selectAttackEnemy=attackEnemyRandom();
    createMsgEndAttack()
}

function resetGame (){
    sectionPet.style.display = 'flex'
    sectionAttack.style.display = 'none'
    sectionReset.style.display = 'none'
    chooseDisableActiveButton(buttonPetPlayer,false)
    chooseDisableActiveButton(buttonFire,true)
    chooseDisableActiveButton(buttonWater,true)
    chooseDisableActiveButton(buttonEarth,true)
    chooseDisableActiveButton(buttonBlock,true)
    chooseDisableActiveButton(buttonResetGame,true)
    createMsgEndAttack(true)
}

// Get the modal
let modal,btn,span;

function openImg (position=0){
    buttonImgSrc = document.getElementById('imgSelect')
    if(buttonImgSrc){
        buttonImgSrc.remove()
    }    
    let modalContent = document.getElementById('modalContent')
    let imageSrc = document.createElement("img");
    imageSrc.id = 'imgSelect'
    let urlImage = imgUrl[position]
    console.log(urlImage);
    imageSrc.src = `${urlImage}`
    // imageSrc.setAttribute("src", urlImage);
    // imageSrc["src"] = urlImage;
    modalContent.appendChild(imageSrc);

    modal.style.display = "block";
}
function closeImg(){
    modal.style.display = "none";
}

function openHipodoge(){
    openImg(0)
}
function openCapipepo(){
    openImg(1)
}
function openRatigueya(){
    openImg(2)
}
function openLangostelvis(){
    openImg(3)
}
function openTucapalma(){
    openImg(4)
}
function openPudos(){
    openImg(5)
}

function startGame(){
    imgUrl=['https://i.pinimg.com/564x/68/d5/aa/68d5aac309542bb5946aa3b96647c44e.jpg','https://i.pinimg.com/564x/f5/1a/5c/f51a5c44e941662c74ff28bcd406ddd2.jpg','https://i.pinimg.com/564x/78/65/09/786509601d7148e0ceb3de9bf1a408c1.jpg','https://i.pinimg.com/564x/de/f9/92/def9920aafb66c1f58a89788d78bcc2a.jpg','https://i.pinimg.com/736x/53/d3/d5/53d3d5db78dd8297327b92f976d1f922.jpg','https://i.pinimg.com/564x/b9/7b/05/b97b0585b90b3fcfa223b172c9e47f0c.jpg']
    sectionPet = document.getElementById('select_pet')
    sectionAttack = document.getElementById('select_attack')
    sectionReset = document.getElementById('reset')
    buttonPetPlayer = document.getElementById('button-select_pet')
    buttonFire = document.getElementById('button-fire')
    buttonWater = document.getElementById('button-water')
    buttonEarth = document.getElementById('button-earth')
    buttonBlock = document.getElementById('button-block')
    sectionAttack.style.display = 'none'
    sectionReset.style.display = 'none'
    buttonResetGame = document.getElementById('button-reset')
    buttonPetPlayer.addEventListener('click',selectPetPlayer)
    buttonFire.addEventListener('click',attackFire)
    buttonWater.addEventListener('click',attackWater)
    buttonEarth.addEventListener('click',attackEarth)
    buttonBlock.addEventListener('click',attackBlock)
    buttonResetGame.addEventListener('click',resetGame)


    buttonHipodoge = document.getElementById('hipodoge')
    buttonCapipepo = document.getElementById('capipepo')
    buttonRatigueya = document.getElementById('ratigueya')
    buttonLangostelvis = document.getElementById('langostelvis')
    buttonTucapalma = document.getElementById('tucapalma')
    buttonPudos = document.getElementById('pudos')
    buttonHipodoge.addEventListener('click',openHipodoge)
    buttonCapipepo.addEventListener('click',openCapipepo)
    buttonRatigueya.addEventListener('click',openRatigueya)
    buttonLangostelvis.addEventListener('click',openLangostelvis)
    buttonTucapalma.addEventListener('click',openTucapalma)
    buttonPudos.addEventListener('click',openPudos)

    modal = document.getElementById("myModal");
    // buttonImg = document.getElementById("myBtn");
    span = document.getElementsByClassName("close")[0];
    

    // buttonImg.addEventListener('click',openImg)
    span.addEventListener('click',closeImg)
    
    chooseDisableActiveButton(buttonFire,true)
    chooseDisableActiveButton(buttonWater,true)
    chooseDisableActiveButton(buttonEarth,true)
    chooseDisableActiveButton(buttonBlock,true)
    chooseDisableActiveButton(buttonResetGame,true)
    
}

window.addEventListener('load', startGame )


