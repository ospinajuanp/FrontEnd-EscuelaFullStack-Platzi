const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu  =  document.querySelector('.desktop-menu');


menuEmail.addEventListener('click',toggleDesktopMenu);


function toggleDesktopMenu (){
    desktopMenu.classList.contains('inactive') ? desktopMenu.classList.remove('inactive') : desktopMenu.classList.add('inactive'); //
}