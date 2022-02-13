let iniciarLuces = function (){
    document.documentElement.style.setProperty('--my-start-one', '.2');
    document.documentElement.style.setProperty('--my-start-two', '.5');
    document.documentElement.style.setProperty('--my-start-three', '.8');
    document.documentElement.style.setProperty('--my-start-four', '.8');
    document.documentElement.style.setProperty('--my-start-five', '.5');
    document.documentElement.style.setProperty('--my-start-six', '.2');     
}
let encenderLuces = function (){
    document.documentElement.style.setProperty('--my-start-one', '.2');
    document.documentElement.style.setProperty('--my-start-two', '.5');
    document.documentElement.style.setProperty('--my-start-three', '.8');
    document.documentElement.style.setProperty('--my-start-four', '.8');
    document.documentElement.style.setProperty('--my-start-five', '.5');
    document.documentElement.style.setProperty('--my-start-six', '.2');     
}
let apagarLuces = function (){
    document.documentElement.style.setProperty('--my-start-one', '0');
    document.documentElement.style.setProperty('--my-start-two', '0');
    document.documentElement.style.setProperty('--my-start-three', '0');
    document.documentElement.style.setProperty('--my-start-four', '0');
    document.documentElement.style.setProperty('--my-start-five', '0');
    document.documentElement.style.setProperty('--my-start-six', '0');     
}
let velocidadLuces = function(){
    let valorRango = document.getElementById('vol').value
    console.log(valorRango)
    document.documentElement.style.setProperty('--my-time-animation', valorRango);
}



iniciarLuces()