/*English Documentation
This code is a pet fighting game called Mokepon. It uses JavaScript to control user interaction and game logic. The code is composed of several functions described below:

chooseDisableActiveButton(buttonChoose,stateButton): This function disables or enables a specific button depending on the state passed as parameter.
getRandomNumber(num = 6): This function returns a random number between 1 and num. If no value is specified for num, the default value is 6.
insertText(spanSelect,pet): This function inserts a specific text into a span element.
selectPetEnemy(): This function selects a random enemy pet from the inputPets array and displays it in the span element with id "pet-Enemy".
checkSelectPet (petsSelect): This function checks if the user has selected a pet and if so, displays the selection in the span element with id "pet-Player", calls the selectPetEnemy() function, and sets the life and damage values for each selected pet.
selectPetPlayer(): This function creates an array of objects with the pets selected by the user and calls the function checkSelectPet().
attackEnemyRandom(): This function selects a random attack for the enemy pet and executes it against the player's pet.
attackPlayer(attackPlayerSelect): This function executes the attack selected by the player against the enemy pet.
chooseLivesPets(): This function updates the life values of the pets in the span elements with id "live-Player" and "live-Enemy".
resetGame(): This function restarts the game, redisplaying the pet selection and resetting the pet lives.
selectImgSrc(): This function displays an image of the selected pet in a modal.
showImgSrc(num): This function displays the image of the selected pet at the num position of the imgUrl array.
closeModal(): This function closes the modal.
init(): This function initializes the events necessary for the game (such as button click events) and sets the initial values of the variables.

Some important things to mention:

The game is based on a series of pets called Mokepon, each with its own type of attacks, life and damage.
You have an array of objects called inputPets that contains the pets selected by the user.
You have an array called attackEnemy that contains the enemy's attack types.
You have an object called infoMokepon that contains the characteristics of each pet.
The function selectPetEnemy() is in charge of randomly selecting a pet for the enemy.
The function checkSelectPet() is in charge of checking if any pet has been selected and if so, updating the view and the data needed for the game.
The function attackEnemyRandom() is in charge of randomly choosing an attack for the enemy and perform it against the player.
The function attackPlayer(attackPlayerSelect) is in charge of performing the attack chosen by the player against the enemy.
The function chooseLivesPets() is in charge of updating the lives of the pets on screen.
The resetGame() function is in charge of restarting the game.
The selectImgSrc() function is in charge of displaying an image of the selected pet in a modal.
The function showImgSrc(num) is in charge of displaying the image of the selected pet in the num position of the imgUrl array.
The closeModal() function is in charge of closing the modal.
The init() function is in charge of initializing the events and variables necessary for the game.
*/

/* Documentación En Español
Este código es un juego de pelea de mascotas llamado Mokepon. Utiliza JavaScript para controlar la interacción del usuario y la lógica del juego. El código está compuesto por varias funciones que se describen a continuación:

chooseDisableActiveButton(buttonChoose,stateButton): Esta función desactiva o activa un botón específico dependiendo del estado que se le pase como parámetro.
getRandomNumber(num = 6): Esta función devuelve un número aleatorio entre 1 y num. Si no se especifica un valor para num, el valor predeterminado es 6.
insertText (spanSelect,pet): Esta función inserta un texto específico en un elemento span.
selectPetEnemy(): Esta función selecciona una mascota enemiga al azar del array inputPets y la muestra en el elemento span con id "pet-Enemy".
checkSelectPet (petsSelect): Esta función verifica si el usuario ha seleccionado una mascota y si es así, muestra la selección en el elemento span con id "pet-Player", llama a la función selectPetEnemy(), y establece los valores de vida y daño para cada mascota seleccionada.
selectPetPlayer(): Esta función crea un array de objetos con las mascotas seleccionadas por el usuario y llama a la función checkSelectPet().
attackEnemyRandom(): Esta función selecciona un ataque al azar para la mascota enemiga y lo ejecuta contra la mascota del jugador.
attackPlayer(attackPlayerSelect): Esta función ejecuta el ataque seleccionado por el jugador contra la mascota enemiga.
chooseLivesPets(): Esta función actualiza los valores de vida de las mascotas en los elementos span con id "live-Player" y "live-Enemy".
resetGame(): Esta función reinicia el juego, volviendo a mostrar la selección de mascotas y reiniciando las vidas de las mascotas.
selectImgSrc(): Esta función muestra una imagen de la mascota seleccionada en un modal.
showImgSrc(num): Esta función muestra la imagen de la mascota seleccionada en la posición num del array imgUrl.
closeModal(): Esta función cierra el modal.
init(): Esta función inicializa los eventos necesarios para el juego (como los eventos click en los botones) y establece los valores iniciales de las variables.

Algunas cosas importantes a mencionar:

El juego se basa en una serie de mascotas llamadas Mokepon, cada uno con su tipo de ataques, vida y daño
Se tiene un arreglo de objetos llamado inputPets que contiene las mascotas seleccionadas por el usuario.
Se tiene un arreglo llamado attackEnemy que contiene los tipos de ataques del enemigo
Se tiene un objeto llamado infoMokepon que contiene las características de cada mascota.
La función selectPetEnemy() es la encargada de elegir al azar una mascota para el enemigo.
La función checkSelectPet() es la encargada de chequear si se ha seleccionado alguna mascota y si es asi, actualizar la vista y los datos necesarios para el juego.
La función attackEnemyRandom() es la encargada de elegir al azar un ataque para el enemigo y realizarlo contra el jugador.
La función attackPlayer(attackPlayerSelect) es la encargada de realizar el ataque elegido por el jugador contra el enemigo.
La función chooseLivesPets() es la encargada de actualizar las vidas de las mascotas en pantalla.
La función resetGame() es la encargada de reiniciar el juego.
La función selectImgSrc() es la encargada de mostrar una imagen de la mascota seleccionada en un modal.
La función showImgSrc(num) es la encargada de mostrar la imagen de la mascota seleccionada en la posición num del array imgUrl.
La función closeModal() es la encargada de cerrar el modal.
La función init() es la encargada de inicializar los eventos y variables necesarios para el juego.

*/

let inputPets = [],attackEnemy=['Fire','Water','Earth','Block'], imgUrl;
let infoMokepon = {hipodoge:{typeAttack:[1,4],live:680,valueDamage:80},
    capipepo:{typeAttack:[2,4],live:530,valueDamage:70},
    ratigueya:{typeAttack:[3,4],live:560,valueDamage:90},
    langostelvis:{typeAttack:[2,3,4],live:850,valueDamage:80},
    tucapalma:{typeAttack:[1,3,4],live:920,valueDamage:70},
    pudos:{typeAttack:[1,2,3,4],live:780,valueDamage:60},
}
let selectAttackPlayer,selectAttackEnemy, livePetPlayer,livePetEnemy,damagePlayer,damageEnemy, petEnemy;
let buttonPetPlayer,buttonFire, buttonWater, buttonEarth,buttonBlock, buttonResetGame,spanPetPlayer,spanPetEnemy,spanLivePlayer,spanLiveEnemy,sectionPet,sectionAttack,sectionReset, buttonImgSrc,buttonHipodoge,modal,span;

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
    console.log(petEnemy);
    insertText(spanPetEnemy,petEnemy)
}

function checkSelectPet (petsSelect){
    spanPetPlayer = document.getElementById('pet-Player')
    for (pets of petsSelect){
        if(pets.petSelect.checked){
            sectionPet.style.display = 'none'
            sectionAttack.style.display = 'flex'
            sectionReset.style.display = 'flex'
            console.log(spanPetPlayer);
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

function openImg (position=0){
    buttonImgSrc = document.getElementById('imgSelect')
    if(buttonImgSrc){
        buttonImgSrc.remove()
    }    
    let modalContent = document.getElementById('modalContent')
    let imageSrc = document.createElement("img");
    imageSrc.id = 'imgSelect'
    let urlImage = imgUrl[position]
    imageSrc.src = `${urlImage}`
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
    span = document.getElementsByClassName("close")[0];
    span.addEventListener('click',closeImg)    
    chooseDisableActiveButton(buttonFire,true)
    chooseDisableActiveButton(buttonWater,true)
    chooseDisableActiveButton(buttonEarth,true)
    chooseDisableActiveButton(buttonBlock,true)
    chooseDisableActiveButton(buttonResetGame,true)    
}

window.addEventListener('load', startGame )