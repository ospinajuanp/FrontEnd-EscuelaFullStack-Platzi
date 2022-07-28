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

// const productListRender = [];
// productListRender.push({
//     name:'Bike',
//     price:120,
//     img:'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
//     detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique amet architecto excepturi sint deleniti optio. Quasi ab odio, id repellendus, iure fugit optio voluptas laboriosam provident ratione, dicta qui!'
// })
// productListRender.push({
//     name:'Screen',
//     price:220,
//     img:'https://images.pexels.com/photos/6005438/pexels-photo-6005438.jpeg',
//     detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique amet architecto excepturi sint deleniti optio. Quasi ab odio, id repellendus, iure fugit optio voluptas laboriosam provident ratione, dicta qui!'
// })
// productListRender.push({
//     name:'Phone',
//     price:250,
//     img:'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique amet architecto excepturi sint deleniti optio. Quasi ab odio, id repellendus, iure fugit optio voluptas laboriosam provident ratione, dicta qui!'
// })
// productListRender.push({
//     name:'Toy car',
//     price:5,
//     img:'https://images.pexels.com/photos/772393/pexels-photo-772393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique amet architecto excepturi sint deleniti optio. Quasi ab odio, id repellendus, iure fugit optio voluptas laboriosam provident ratione, dicta qui!'
// })
// productListRender.push({
//     name:'Laptop',
//     price:150,
//     img:'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     detail:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique amet architecto excepturi sint deleniti optio. Quasi ab odio, id repellendus, iure fugit optio voluptas laboriosam provident ratione, dicta qui!'
// })

function renderProducts (product){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const imgCard = document.createElement('img');
    imgCard.setAttribute('src',`https://diccionarioactual.com/wp-content/uploads/2013/11/aleatorio-1.jpg`)
    imgCard.addEventListener('click',openProductDetailAside)
    
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');


    const div = document.createElement('div');
    const pPrice = document.createElement('p');
    pPrice.innerText =`$${product.price}`;
    const pName = document.createElement('p');
    pName.innerText =`${product.title}`;

    div.appendChild(pPrice)
    div.appendChild(pName)


    const figure = document.createElement('figure');
    figure.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#ACD9B2"/>
    <path d="M9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12V10ZM11.2222 11L12.2026 10.8029C12.1087 10.3359 11.6985 10 11.2222 10V11ZM10.6863 13.4076C10.7952 13.9491 11.3223 14.2997 11.8638 14.1909C12.4052 14.082 12.7559 13.5548 12.647 13.0134L10.6863 13.4076ZM13.4444 21.0525C12.8922 21.0525 12.4444 21.5002 12.4444 22.0525C12.4444 22.6048 12.8922 23.0525 13.4444 23.0525V21.0525ZM24.5556 22.0525V23.0525C24.9336 23.0525 25.2793 22.8394 25.449 22.5016L24.5556 22.0525ZM29 13.2105L29.8935 13.6596C30.0493 13.3496 30.0333 12.981 29.8512 12.6857C29.6691 12.3903 29.347 12.2105 29 12.2105V13.2105ZM11.6667 12.2105C11.1144 12.2105 10.6667 12.6582 10.6667 13.2105C10.6667 13.7628 11.1144 14.2105 11.6667 14.2105V12.2105ZM12.4641 22.2496C12.5729 22.7911 13.1001 23.1418 13.6416 23.0329C14.183 22.924 14.5337 22.3969 14.4248 21.8554L12.4641 22.2496ZM12.647 13.0134C12.5382 12.4719 12.011 12.1213 11.4696 12.2301C10.9281 12.339 10.5774 12.8662 10.6863 13.4076L12.647 13.0134ZM14.1497 22.7615C14.5412 22.372 14.5429 21.7388 14.1534 21.3473C13.7639 20.9557 13.1308 20.9541 12.7392 21.3436L14.1497 22.7615ZM10.8967 24.5869L10.1914 23.8779L10.8967 24.5869ZM24.5556 27.4735C25.1078 27.4735 25.5556 27.0258 25.5556 26.4735C25.5556 25.9213 25.1078 25.4735 24.5556 25.4735V27.4735ZM24.5556 26.4735H23.5556C23.5556 26.7397 23.6616 26.9948 23.8503 27.1825L24.5556 26.4735ZM26.7778 28.684L26.0725 29.393C26.2599 29.5794 26.5135 29.684 26.7778 29.684V28.684ZM15.6667 28.684L14.8018 28.1821C14.7133 28.3345 14.6667 28.5077 14.6667 28.684H15.6667ZM15.6667 30.8945H14.6667C14.6667 31.0709 14.7133 31.244 14.8018 31.3965L15.6667 30.8945ZM9 12H11.2222V10H9V12ZM10.2418 11.1971L10.6863 13.4076L12.647 13.0134L12.2026 10.8029L10.2418 11.1971ZM13.4444 23.0525H24.5556V21.0525H13.4444V23.0525ZM25.449 22.5016L29.8935 13.6596L28.1065 12.7614L23.6621 21.6034L25.449 22.5016ZM29 12.2105H11.6667V14.2105H29V12.2105ZM14.4248 21.8554L12.647 13.0134L10.6863 13.4076L12.4641 22.2496L14.4248 21.8554ZM12.7392 21.3436L10.1914 23.8779L11.6019 25.2958L14.1497 22.7615L12.7392 21.3436ZM10.1914 23.8779C8.85112 25.2111 9.81103 27.4735 11.6822 27.4735V25.4735C11.6421 25.4735 11.6255 25.4635 11.6173 25.4578C11.6047 25.4489 11.5894 25.4322 11.5789 25.407C11.5684 25.3817 11.5678 25.3602 11.57 25.3471C11.5714 25.3395 11.5748 25.3228 11.6019 25.2958L10.1914 23.8779ZM11.6822 27.4735H24.5556V25.4735H11.6822V27.4735ZM25.5556 26.4735C25.5556 25.81 26.0978 25.263 26.7778 25.263V23.263C25.0032 23.263 23.5556 24.6954 23.5556 26.4735H25.5556ZM26.7778 25.263C27.4578 25.263 28 25.81 28 26.4735H30C30 24.6954 28.5524 23.263 26.7778 23.263V25.263ZM28 26.4735C28 27.1371 27.4578 27.684 26.7778 27.684V29.684C28.5524 29.684 30 28.2516 30 26.4735H28ZM27.483 27.9751L25.2608 25.7646L23.8503 27.1825L26.0725 29.393L27.483 27.9751ZM16.5315 29.186C16.8068 28.7119 17.3711 28.4771 17.9088 28.6204L18.4239 26.6878C17.0185 26.3133 15.5324 26.9233 14.8018 28.1821L16.5315 29.186ZM17.9088 28.6204C18.4456 28.7635 18.8134 29.2451 18.8134 29.7893H20.8134C20.8134 28.3325 19.8301 27.0627 18.4239 26.6878L17.9088 28.6204ZM18.8134 29.7893C18.8134 30.3335 18.4456 30.8151 17.9088 30.9582L18.4239 32.8907C19.8301 32.5159 20.8134 31.2461 20.8134 29.7893H18.8134ZM17.9088 30.9582C17.3711 31.1015 16.8068 30.8667 16.5315 30.3926L14.8018 31.3965C15.5324 32.6553 17.0185 33.2653 18.4239 32.8907L17.9088 30.9582ZM16.6667 30.8945V28.684H14.6667V30.8945H16.6667Z" fill="white"/>
    <circle cx="29" cy="13" r="6" fill="white"/>
    <path d="M31.5263 12.5263H29.4737V10.4737C29.4737 10.2147 29.2653 10 29 10C28.7411 10 28.5263 10.2084 28.5263 10.4737V12.5263H26.4737C26.2147 12.5263 26 12.7347 26 13C26 13.1326 26.0505 13.2463 26.1389 13.3347C26.2274 13.4232 26.3411 13.4737 26.4737 13.4737H28.5263V15.5263C28.5263 15.6589 28.5768 15.7726 28.6653 15.8611C28.7537 15.9495 28.8674 16 29 16C29.2589 16 29.4737 15.7916 29.4737 15.5263V13.4737H31.5263C31.7853 13.4737 32 13.2653 32 13C32 12.7411 31.7916 12.5263 31.5263 12.5263Z" fill="#ACD9B2" stroke="#ACD9B2"/>
    </svg>
    `
    // const imgIcon = document.createElement('svg');
    // imgIcon.setAttribute('src',`./icons/bt_add_to_cart.svg`)

    // figure.appendChild(imgIcon)

    productInfo.appendChild(div)
    productInfo.appendChild(figure)


    productCard.appendChild(imgCard)
    productCard.appendChild(productInfo)
    
    containerCards.appendChild(productCard)
    
}

// renderProducts(productListRender);


const API = 'https://api.escuelajs.co/api/v1';

async function fetchData (urlApi){
    const response = fetch(urlApi)
    const data = await response
    return data.json();
    // * Este tambien es un equivalente
    // const data = (await response).json();
    // return data;
}

const anotherFunction = async (urlApi) => { 
    try {
        const products = await fetchData(`${API}/products`);

        for (let index = 10; index < products.length; index+=10) {
            const product = await fetchData(`${API}/products/${products[index].id}`);
            renderProducts(product)
        }
        
    } catch (error) {
        console.log(error);
    }
}

anotherFunction(API)