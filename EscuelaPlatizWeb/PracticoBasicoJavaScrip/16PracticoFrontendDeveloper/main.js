const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu  =  document.querySelector('.desktop-menu');
const menuHam  =  document.querySelector('.menu');
const mobileMenu  =  document.querySelector('.mobile-menu');
const menuCarrito  =  document.querySelector('.navbar-shooping-cart');
const aside  =  document.querySelector('.product-detail');
const containerCards  =  document.querySelector('.cards-container');
const productDetailitem  =  document.querySelector('.product-detail-item');
const productDetailitemClose  =  document.querySelector('.product-detail-close-item');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHam.addEventListener('click',toggleMobileMenu);
menuCarrito.addEventListener('click',toggleCarritoAside);
productDetailitemClose.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu (){
    // desktopMenu.classList.contains('inactive') ? desktopMenu.classList.remove('inactive') : desktopMenu.classList.add('inactive'); //esta fue la forma como yo lo hice que era un reto
    const isAsideOpen = aside.classList.contains('inactive');
    const isProducDetailOpen = productDetailitem.classList.contains('inactive');
    if(!isAsideOpen){
        aside.classList.add('inactive');
    }
    if(!isProducDetailOpen){
        productDetailitem.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu (){
    const isAsideOpen = aside.classList.contains('inactive');
    const isProducDetailOpen = productDetailitem.classList.contains('inactive');
    if(!isAsideOpen){
        aside.classList.add('inactive');
    }
    if(!isProducDetailOpen){
        productDetailitem.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
    
}
function toggleCarritoAside (){
    const isDesktopMenuOpen = desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive');
    const isProducDetailOpen = productDetailitem.classList.contains('inactive');
    if(!isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    } 
    if(!isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if(!isProducDetailOpen){
        productDetailitem.classList.add('inactive');
    }
    aside.classList.toggle('inactive')
}
function openProductDetailAside (){
    productDetailitem.classList.remove('inactive')
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive')
}
function closeProductDetailAside (){
    productDetailitem.classList.add('inactive')
}

const productListRender = [];
productListRender.push({
    name:'Bike',
    price:120,
    img:'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique amet architecto excepturi sint deleniti optio. Quasi ab odio, id repellendus, iure fugit optio voluptas laboriosam provident ratione, dicta qui!'
})
productListRender.push({
    name:'Screen',
    price:220,
    img:'https://images.pexels.com/photos/6005438/pexels-photo-6005438.jpeg',
    detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique amet architecto excepturi sint deleniti optio. Quasi ab odio, id repellendus, iure fugit optio voluptas laboriosam provident ratione, dicta qui!'
})
productListRender.push({
    name:'Phone',
    price:250,
    img:'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique amet architecto excepturi sint deleniti optio. Quasi ab odio, id repellendus, iure fugit optio voluptas laboriosam provident ratione, dicta qui!'
})
productListRender.push({
    name:'Toy car',
    price:5,
    img:'https://images.pexels.com/photos/772393/pexels-photo-772393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique amet architecto excepturi sint deleniti optio. Quasi ab odio, id repellendus, iure fugit optio voluptas laboriosam provident ratione, dicta qui!'
})
productListRender.push({
    name:'Laptop',
    price:150,
    img:'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique amet architecto excepturi sint deleniti optio. Quasi ab odio, id repellendus, iure fugit optio voluptas laboriosam provident ratione, dicta qui!'
})

function renderProducts (productList){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const imgCard = document.createElement('img');
        imgCard.setAttribute('src',`${product.img}`)
        imgCard.addEventListener('click',openProductDetailAside)
        
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    
        const div = document.createElement('div');
        const pPrice = document.createElement('p');
        pPrice.innerText =`$${product.price}`;
        const pName = document.createElement('p');
        pName.innerText =`${product.name}`;
    
        div.appendChild(pPrice)
        div.appendChild(pName)
    
    
        const figure = document.createElement('figure');
        const imgIcon = document.createElement('img');
        imgIcon.setAttribute('src',`./icons/bt_add_to_cart.svg`)
    
        figure.appendChild(imgIcon)
    
        productInfo.appendChild(div)
        productInfo.appendChild(figure)
    
    
        productCard.appendChild(imgCard)
        productCard.appendChild(productInfo)
        
        containerCards.appendChild(productCard)
    }    
}

renderProducts(productListRender);