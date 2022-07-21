const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu  =  document.querySelector('.desktop-menu');
const menuHam  =  document.querySelector('.menu');
const mobileMenu  =  document.querySelector('.mobile-menu');
const menuCarrito  =  document.querySelector('.navbar-shooping-cart');
const aside  =  document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHam.addEventListener('click',toggleMobileMenu);
menuCarrito.addEventListener('click',toggleCarritoAside);



function toggleDesktopMenu (){
    // desktopMenu.classList.contains('inactive') ? desktopMenu.classList.remove('inactive') : desktopMenu.classList.add('inactive'); //esta fue la forma como yo lo hice que era un reto
    const isAsideOpen = aside.classList.contains('inactive');
    if(!isAsideOpen){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu (){
    const isAsideOpen = aside.classList.contains('inactive');
    if(!isAsideOpen){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
    
}
function toggleCarritoAside (){
    const isDesktopMenuOpen = desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive');
    if(!isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    } 
    if(!isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive')
}