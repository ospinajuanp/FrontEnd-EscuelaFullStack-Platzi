const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btnCalcular = document.getElementById('btnCalcular')
const resultado =  document.getElementById('result')


function btnOnclick(){
    const sumaInput = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado "+sumaInput
}