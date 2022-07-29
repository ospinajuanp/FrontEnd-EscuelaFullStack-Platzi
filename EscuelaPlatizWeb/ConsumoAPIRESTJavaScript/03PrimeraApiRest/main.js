// You have this snippets -> 
//	- fun(function) 
//	- con(console.log) 
//	- arrowFunction(arrow function) 
//	- api(const API) 
//	- getFetch(get data url) 
//	- setFetch(set data url) 

const API = 'https://pokeapi.co/api/v2/pokemon';
const pokeIdRandom = Math.floor(Math.random() * 20);
const urlAPI = `${API}/${pokeIdRandom}`

const pokeImg = document.getElementById('poke-img');
const pokeName = document.getElementById('poke-name');
// dataPoke()
function randomPokedex(){
    fetch(urlAPI)
        .then(item => item.json())
        .then(poke=> {
            pokeName.innerHTML = `<p>${poke.name || 'Faile name'}</p>`
            pokeImg.src = poke.sprites.other.dream_world.front_default
    })
}

randomPokedex()