const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu  =  document.querySelector('.desktop-menu');
const menuHam  =  document.querySelector('.menu');
const mobileMenu  =  document.querySelector('.mobile-menu');


menuEmail.addEventListener('click',toggleDesktopMenu);


function toggleDesktopMenu (){
    // desktopMenu.classList.contains('inactive') ? desktopMenu.classList.remove('inactive') : desktopMenu.classList.add('inactive'); //esta fue la forma como yo lo hice que era un reto
    desktopMenu.classList.toggle('inactive')
}

menuHam.addEventListener('click',toggleMobileMenu);


function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive')
}