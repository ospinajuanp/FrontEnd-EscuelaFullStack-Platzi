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
const pokeImg = document.getElementById('poke-img');
const pokeName = document.getElementById('poke-name');
const btnChange = document.getElementById('btn-change');

// RENDER data en el HTML
const renderPoke = (dataJson) => { 
    console.log(dataJson.name)
    pokeName.innerHTML = `<p>${dataJson.name || 'Faile name'}</p>`
    pokeImg.src = dataJson.sprites.other.dream_world.front_default
}
// GET data de la api
async function pokeRandom (api) {
    const response = fetch(api)
    const data = (await response).json()
    return data
}

// EXECUTE getdata y render data
async function randomPokedex(api){    
    try {
        const data = await pokeRandom(api)
        renderPoke(data)
    } catch (error) {
        console.error(error)
    }
}
// GENERATOR Random IdPoke y llamado al execute
const randomClick = () => { 
    const pokeIdRandom = Math.floor(Math.random() * 20);
    const urlAPI = `${API}/${pokeIdRandom}`
    randomPokedex(urlAPI)
}

// EJECUCION INICIAL AL CARGAR LA WEB
randomClick()

// AGREGAR EVENTO PARA EL BUTTON DE CAMBIAR
btnChange.addEventListener('click',randomClick);

