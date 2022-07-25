// active-down-content  <- ESTADO DE ACTIVAR DESPLEGABLE
// content-item-{num} <- SELECION DE COLLAPSED

const itemCollapsedOne = document.querySelector('.content-item-one');
const itemCollapsedTwo = document.querySelector('.content-item-two');
const itemCollapsedThree = document.querySelector('.content-item-three');
const itemCollapsedFour = document.querySelector('.content-item-four');
const itemCollapsedFive = document.querySelector('.content-item-five');

itemCollapsedOne.addEventListener('click',toggleOne);
itemCollapsedTwo.addEventListener('click',toggleTwo);
itemCollapsedThree.addEventListener('click',toggleThree);
itemCollapsedFour.addEventListener('click',toggleFour);
itemCollapsedFive.addEventListener('click',toggleFive);

function toggleOne(){
    itemCollapsedOne.classList.toggle('active-down-content');
    itemCollapsedTwo.classList.remove('active-down-content');
    itemCollapsedThree.classList.remove('active-down-content');
    itemCollapsedFour.classList.remove('active-down-content');
    itemCollapsedFive.classList.remove('active-down-content');
}
function toggleTwo(){
    itemCollapsedOne.classList.remove('active-down-content');
    itemCollapsedTwo.classList.toggle('active-down-content');
    itemCollapsedThree.classList.remove('active-down-content');
    itemCollapsedFour.classList.remove('active-down-content');
    itemCollapsedFive.classList.remove('active-down-content');
}
function toggleThree(){
    itemCollapsedOne.classList.remove('active-down-content');
    itemCollapsedTwo.classList.remove('active-down-content');
    itemCollapsedThree.classList.toggle('active-down-content');
    itemCollapsedFour.classList.remove('active-down-content');
    itemCollapsedFive.classList.remove('active-down-content');
}
function toggleFour(){
    itemCollapsedOne.classList.remove('active-down-content');
    itemCollapsedTwo.classList.remove('active-down-content');
    itemCollapsedThree.classList.remove('active-down-content');
    itemCollapsedFour.classList.toggle('active-down-content');
    itemCollapsedFive.classList.remove('active-down-content');
}
function toggleFive(){
    itemCollapsedOne.classList.remove('active-down-content');
    itemCollapsedTwo.classList.remove('active-down-content');
    itemCollapsedThree.classList.remove('active-down-content');
    itemCollapsedFour.classList.remove('active-down-content');
    itemCollapsedFive.classList.toggle('active-down-content');
}



