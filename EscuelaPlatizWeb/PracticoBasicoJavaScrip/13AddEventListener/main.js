const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btnCalcular = document.getElementById('btnCalcular')
const resultado =  document.getElementById('result')
const form =  document.getElementById('form')

form.addEventListener('submit',sumarInputValue);

function sumarInputValue(event){
    event.preventDefault();
    const sumaInput = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado: "+sumaInput;
}