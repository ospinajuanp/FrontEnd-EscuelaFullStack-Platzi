// You have this snippets -> 
//	- fun(function) 
//	- con(console.log) 
//	- arrowFunction(arrow function) 
//	- api(const API) 
//	- getFetch(get data url) 
//	- setFetch(set data url) 


// URL de la api
const API = 'https://pokeapi.co/api/v2/pokemon';

// CAPTURARA elemento del DOM con el que se va a interactura
const containerCard = document.getElementById('container-card');

// RENDER data en el HTML
const renderPoke = (dataJson) => { 

    let viewCard = `
    <div class="card">
        <div class="container-title" id="poke-name">
            <p>${dataJson.name || 'Faile name'}</p>
        </div>
        <div class="container-img">
            <img id="poke-img" src="${dataJson.sprites.other.dream_world.front_default || 'http://cdn.onlinewebfonts.com/svg/img_326695.png' }" alt="">
        </div>
        <div  class="container-stat">
            <div class="stat">
            <div class="stat-name">${dataJson.stats[0].stat.name || '/'}</div>
            <div class="stat-value">${dataJson.stats[0].base_stat || '/'}</div>
        </div>
        <div class="stat">
            <div class="stat-name">${dataJson.stats[1].stat.name || '/'}</div>
            <div class="stat-value">${dataJson.stats[1].base_stat || '/'}</div>
        </div>
        <div class="stat">
            <div class="stat-name">${dataJson.stats[2].stat.name || '/'}</div>
            <div class="stat-value">${dataJson.stats[2].base_stat || '/'}</div>
        </div>
    </div>
    `
    containerCard.innerHTML+=viewCard;
    
}
// GET data de la api
async function pokeData (api) {
    const response = await fetch(api)
    const data = (await response).json()
    return data
}

// EXECUTE getdata y render data
async function randomPokedex(api){    
    try {
        const data = await pokeData(api)
        renderPoke(data)
    } catch (error) {
        console.error(error)
    }
}
// GENERATOR Random IdPoke y llamado al execute
const randomGeneratorPokedex = async () => { 
    const pokeIdRandom = Math.floor(Math.random() * 25);
    const urlAPI = `${API}?limit=${pokeIdRandom}`
    const response = await pokeData(urlAPI)
    for (let index = 0; index < pokeIdRandom; index++) {
        let urlAPIPokemon = `${response.results[index].url}`
        randomPokedex(urlAPIPokemon)
    }
    
}

// EJECUCION INICIAL AL CARGAR LA WEB
randomGeneratorPokedex()