import { APIKEY,APIURL } from './API.mjs'
const container = document.getElementById('container-content')
const containerFav = document.getElementById('container-content-fav')
const faileLoad = document.getElementById('faile-load-page')
const reloadRandom = document.getElementById('reloadRandom')



// API KEY
const API_KEY = APIKEY();
const API_URL = APIURL();

// ENDPOINT - IMG RANDOM
const EP_IMG_RANDOM = '/images/search';
const EP_IMG_FAVOURITES = '/favourites';

// PARAMETERS 
const numberMaxReturn = 5;
const maxReturn = `&limit=${numberMaxReturn}`;
const formatReturn = `&mime_types=jpg`
// const favImg = `&image_id=`

// URLS
const urlRandomDogs = `${API_URL}${EP_IMG_RANDOM}${API_KEY}${formatReturn}${maxReturn}`;
let urlFavImg = `${API_URL}${EP_IMG_FAVOURITES}${API_KEY}`;
let urlSaveFavImg = `${API_URL}${EP_IMG_FAVOURITES}${API_KEY}`;
let urlDeleteFavImg = (id) => `${API_URL}${EP_IMG_FAVOURITES}/${id}/${API_KEY}`;

// GET -  traer datos de la URL
const getData = async (urlData) => { 
    const response = (await fetch(urlData)).json();
    return response;
}

// renderizar perros aleatorios
const renderDogs = (dogsData,card) => { 
    container.innerHTML=''
    for (let index = 0; index < dogsData.length; index++) {
        let view = `
        <div class="card-dog__random">
        <div class="card-dog__raza">${dogsData[index]?.breeds[0]?.name || 'Unknow'}</div>
        <div class="card-dog__img"  style="background:url('${dogsData[index].url}')">
        <img src="">
        </div>
        <!-- <div class="card-dog__characteristics">
            <div>width</div>
            <div>height</div>
        </div> -->
        <div class="card-dog__fav" id="${dogsData[index].id}">💘 Add Favorite</div>
        </div>
        `
        container.innerHTML+=view;                
    }
}
// renderizar perros que esta en favoritos
const renderDogsFavorites = (dogsData) => { 
    containerFav.innerHTML=''
    for (let index = 0; index < dogsData.length; index++) {
        let view = `
        <div class="card-dog__favorites">
            <div class="card-dog__img"  style="background:url('${dogsData[index].image.url}')"></div>
            <div class="card-dog__fav" id="${dogsData[index].id}">💔 Delete Favorite</div>
        </div>
        `
        containerFav.innerHTML+=view;
    }
}

// array para almacenar los id de los perros generados
let idsDogs = []
let idsDogsFav = []

// agregando evento click a los add favoritos
const addEventClickFav = () => { 
    idsDogs.forEach(item => {
        let btnEvent = document.getElementById(`${item}`)
        btnEvent.addEventListener('click', saveDogFav.bind(item))
    })
}
// agregando evento click a los delete favoritos
const addEventClickDele = () => { 
    idsDogsFav.forEach(item => {
        let btnEvent = document.getElementById(`${item}`)
        btnEvent.addEventListener('click', deleteDogFav.bind(item))
    })
}

// guardando perro a mi lista de favoritos
const saveDogFav = async (item) => {
    let id = item.target.id
    let rest = await fetch(urlSaveFavImg,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            image_id:`${id}`
        }
        )
    });
    // validacion de error
    if (rest.status != 200){
        faileLoad.innerText='Fallo con el servidor, volver a intentar(F5) en unos minutos'
    }else{
        let dogsDataFavorites = await getData(urlFavImg);
        renderDogsFavorites(dogsDataFavorites);
        idsDogs = []
        dogsDataRandom.forEach(item => {
            let idDog = item.id
            idsDogs.push(`${idDog}`)
        })
        addEventClickFav()
    }
}

// eliminar perro a mi lista de favoritos
const deleteDogFav = async (item) => {
    let id = item.target.id
    let rest = await fetch(urlDeleteFavImg(id),{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // validacion de error
    if (rest.status != 200){
        faileLoad.innerText='Fallo con el servidor, volver a intentar(F5) en unos minutos'
    }else{
        let dogsDataFavorites = await getData(urlFavImg);
        renderDogsFavorites(dogsDataFavorites);
        idsDogsFav = []
        dogsDataFavorites.forEach(item => {
            let idDog = item.id
            idsDogsFav.push(`${idDog}`)
        })
        addEventClickDele()
    }
}

// render inicial - datos de perros aleatorios - datos lista de perros favoritos - 
const insertDog = async () => { 
    try {
        // TRAER DATA RANDOM
        let dogsDataRandom = await getData(urlRandomDogs);
        renderDogs(dogsDataRandom);
        idsDogs = []
        dogsDataRandom.forEach(item => {
            let idDog = item.id
            idsDogs.push(`${idDog}`)
        })
        addEventClickFav()
        
        // TRAER DATA FAVORITE
        let dogsDataFavorites = await getData(urlFavImg);
        renderDogsFavorites(dogsDataFavorites);
        idsDogsFav = []
        dogsDataFavorites.forEach(item => {
            let idDog = item.id
            idsDogsFav.push(`${idDog}`)
        })
        addEventClickDele()
    } catch (error) {
        console.error(error)
    }
}

// ejecucion inicial de la pag
insertDog()

// boton de reload random dogs
reloadRandom.addEventListener('click',insertDog)