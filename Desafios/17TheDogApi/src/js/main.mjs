import { APIKEY,APIURL } from './API.mjs'
const container = document.getElementById('container-content')
const containerFav = document.getElementById('container-content-fav')


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

const getData = async (urlData) => { 
    const response = (await fetch(urlData)).json();
    return response;
}

const renderDogs = (dogsData,card) => { 
    for (let index = 0; index < dogsData.length; index++) {
        let view = `
            <div class="${card}">
                <div class="card-dog__raza">${dogsData[index]?.breeds[0]?.name || 'Unknow'}</div>
                <div class="card-dog__img"  style="background:url('${dogsData[index].url}')">
                    <img src="">
                </div>
                <!-- <div class="card-dog__characteristics">
                    <div>width</div>
                    <div>height</div>
                </div> -->
                <div class="card-dog__fav" id="${dogsData[index].id}">💘 Fav</div>
            </div>
            `
            container.innerHTML+=view;                
        }
}
const renderDogsFavorites = (dogsData,card) => { 
    for (let index = 0; index < dogsData.length; index++) {
        let view = `
            <div class="${card}">
                <div class="card-dog__img"  style="background:url('${dogsData[index].image.url}')">
                    <img src="">
                </div>
                <!-- <div class="card-dog__characteristics">
                    <div>width</div>
                    <div>height</div>
                </div> -->
                <div class="card-dog__fav">💘 Fav</div>
            </div>
            `
            containerFav.innerHTML+=view;                
        }
}

let idsDogs = []

const addEventClick = () => { 
idsDogs.forEach(item => {
    let btnEvent = document.getElementById(`${item}`)
    btnEvent.addEventListener('click', saveDogFav.bind(item))
})
}

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
    }
    );
}

const insertDog = async () => { 
    try {
        let dogsDataRandom = await getData(urlRandomDogs);
        renderDogs(dogsDataRandom,'card-dog__random');
        dogsDataRandom.forEach(item => {
            let idDog = item.id
            idsDogs.push(`${idDog}`)
        })
        addEventClick()
        let dogsDataFavorites = await getData(urlFavImg);
        console.log(dogsDataFavorites);
        renderDogsFavorites(dogsDataFavorites,'card-dog__favorites');
        
    } catch (error) {
        console.error(error)
    }
}



insertDog()