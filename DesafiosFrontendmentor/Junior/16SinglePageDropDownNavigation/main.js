const btnOpenMenu = document.querySelector('.menu-right > a > img')
const btnCloseMenu = document.querySelector('.container-menu__menu__collapsed > figure > img')
const collapsedMenu = document.querySelector('.container-menu__background ')
const btnCollapsedOpenFeaturesMenu = document.querySelector('.container-collapsed-features-on')
const btnCollapsedCloseFeaturesMenu = document.querySelector('.container-collapsed-features-off')
const btnCollapsedOpenCompanyMenu = document.querySelector('.container-collapsed-on')
const btnCollapsedCloseCompanyMenu = document.querySelector('.container-collapsed-off')

btnOpenMenu.addEventListener('click', toggleMenuMobile)
btnCloseMenu.addEventListener('click', toggleMenuMobile)

btnCollapsedOpenFeaturesMenu.addEventListener('click', toggleOpenCollapsedMenuMobile)
btnCollapsedCloseFeaturesMenu.addEventListener('click', toggleCloseCollapsedMenuMobile)

btnCollapsedOpenCompanyMenu.addEventListener('click', toggleOpenCompanyMenuMobile)
btnCollapsedCloseCompanyMenu.addEventListener('click', toggleCloseCompanyMenuMobile)


function toggleMenuMobile (){
    collapsedMenu.classList.toggle('inactive')
}
function toggleOpenCollapsedMenuMobile (){
    btnCollapsedCloseFeaturesMenu.classList.remove('inactive')
    btnCollapsedOpenFeaturesMenu.classList.add('inactive')
}
function toggleCloseCollapsedMenuMobile (){
    btnCollapsedCloseFeaturesMenu.classList.add('inactive')
    btnCollapsedOpenFeaturesMenu.classList.remove('inactive')
}
function toggleOpenCompanyMenuMobile (){
    btnCollapsedCloseCompanyMenu.classList.remove('inactive')
    btnCollapsedOpenCompanyMenu.classList.add('inactive')
}
function toggleCloseCompanyMenuMobile (){
    btnCollapsedCloseCompanyMenu.classList.add('inactive')
    btnCollapsedOpenCompanyMenu.classList.remove('inactive')
}