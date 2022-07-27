import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi,data) {
    const response = fetch(urlApi,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    })
    return response;
}

const data = {
    "title": "New Product Loocus",
    "price": 120996,
    "description": "Performing fetch-post class practice",
    "categoryId": 5,
    "images": ["https://i.imgur.com/FZYeGWw.png"]
  }

postData(`${API}/products`,data)
  .then(response => response.json())
  .then(data => console.log(data) )
  .catch(error => console.log(error))
