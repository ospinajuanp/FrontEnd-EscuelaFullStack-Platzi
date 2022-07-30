import { APIKEY,APIURL } from './API.mjs'
const container = document.getElementById('container-content')


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

// URLS
const urlRandomDogs = `${API_URL}${EP_IMG_RANDOM}${API_KEY}${formatReturn}${maxReturn}`;

const getData = async (urlData) => { 
    const response = (await fetch(urlData)).json();
    return response;
}



const insertDog = async () => { 
    try {
        let dogsData = await getData(urlRandomDogs);
        for (let index = 0; index < dogsData.length; index++) {
            let view = `
                <div class="card-dog">
                    <div class="card-dog__raza">${dogsData[index]?.breeds[0]?.name || 'Unknow'}</div>
                    <div class="card-dog__img"  style="background:url('${dogsData[index].url}')">
                        <img src="">
                    </div>
                    <div class="card-dog__characteristics">
                        <div>width</div>
                        <div>height</div>
                    </div>
                    <div class="card-dog__fav" id="${dogsData[index].id}" >💘 Fav</div>
                </div>
                `
            container.innerHTML+=view;
        }
    } catch (error) {
        console.error(error)
    }
    
}

insertDog()