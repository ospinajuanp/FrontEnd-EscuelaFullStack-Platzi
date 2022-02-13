let desactivarBotones = function(){
    document.getElementById("mas").disabled = true;
    document.getElementById("menos").disabled = true;
    document.getElementById("por").disabled = true;
    document.getElementById("dividir").disabled = true;
    document.getElementById("parentesisAbre").disabled = true;
    document.getElementById("parentesisCierra").disabled = true;    
}
let activarBotones = function(){
    document.getElementById("mas").disabled = false;
    document.getElementById("menos").disabled = false;
    document.getElementById("por").disabled = false;
    document.getElementById("dividir").disabled = false;    
}
let operar = function(valor){
    let valorIngresado = valor;
    let valorEspera=document.getElementById('operacion').innerText;
    let igualApretado=document.getElementById('igualApretado').innerText;
    if(igualApretado=='true'){
        console.log('si entre')
        valorEspera=''
        document.getElementById('igualApretado').innerText=false;
    }
    let agregarValores=agregarEliminar(valorIngresado,valorEspera)
    document.getElementById('operacion').innerHTML = agregarValores;
}
let agregarEliminar= function(ingresado,espera){
    let agregarValores;
    if(espera==undefined){
        espera='0'
    }else if(ingresado=='AC'){
        agregarValores =  ''
        desactivarBotones()
    }else if(ingresado=='A'){
        agregarValores=espera.substring(0,(espera.length-1));
        desactivarBotones()
    }else{
        activarBotones()
        agregarValores=espera+ingresado;
    }
    return agregarValores;
}
let calcular = function(){
    let valorCalcular = document.getElementById('operacion').innerHTML
    let operar = vectorOperacional(valorCalcular);
    let resultado = operarVector(operar);
    document.getElementById('operacion').innerHTML = resultado[0];
    document.getElementById('igualApretado').innerText=true;
    activarBotones()
}
let suma = function(valorUno,valorDos){
return parseInt(valorUno)+parseInt(valorDos)
}
let resta = function(valorUno,valorDos){
return parseInt(valorUno)-parseInt(valorDos)
}
let multiplicacion = function(valorUno,valorDos){
return parseInt(valorUno)*parseInt(valorDos)
}
let division = function(valorUno,valorDos){
return parseInt(valorUno)/parseInt(valorDos)
}
let vectorOperacional = function(Calcular){
    let valorCalcular= Calcular;
    let operadores=['+','-','*','/','(',')']
    let cantidadCalcular= valorCalcular.length;
    let auxNumero = ''
    let auxNumerosOperadores=[]
    for(let i=0;i<cantidadCalcular;i++){
        let valor=valorCalcular.charAt(i);
        let tipo = operadores.includes(valor)
        if(i==(cantidadCalcular-1)){
            auxNumero+=valor
            auxNumerosOperadores.push(auxNumero)
            auxNumero=''
        }else if(!tipo){
            auxNumero+=valor            
        }else{
            auxNumerosOperadores.push(auxNumero)
            auxNumerosOperadores.push(valor)
            auxNumero=''
        }
    }
    return auxNumerosOperadores
}
let operarVector = function(valorCalcular){
    let vectorOperar = valorCalcular;
    let prioridad=['*','/','+','-']
    // let resultadoOperacion = []
    for(let i=0;i<(prioridad.length);i++){
        let signo = prioridad[i]
        let arregloOperacional = vectorPosicionOperador(vectorOperar,signo);
        vectorOperar = realizarOperazion(arregloOperacional,vectorOperar,signo)
        if(vectorOperar.includes(signo)){
            i--
        }
    }
    return vectorOperar
}
let vectorPosicionOperador = function(arreglo,operador){
    let indices = [];
    var array = arreglo
    var element = operador;
    var idx = array.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
    }
    return indices;
}
let realizarOperazion = function(Operacional,Operar,signo){
    let arregloOperacional = Operacional;
    let vectorOperar = Operar;
    for(let i=0;i<(arregloOperacional.length);i++){
        let posicionOperacion = arregloOperacional[i]
        let valorOperarUno=vectorOperar[posicionOperacion-1]
        let valorOperarDos=vectorOperar[posicionOperacion+1]
        let posicionValorOperarUno=(posicionOperacion-1)
        let posicionValorOperarDos=(posicionOperacion+1)
        let resultado=0
        switch(signo){
            case '*':
            resultado=multiplicacion(valorOperarUno,valorOperarDos);
            vectorOperar=organizarVectorOperado(vectorOperar,posicionValorOperarUno,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar=organizarVectorOperado(vectorOperar,posicionValorOperarDos,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar=organizarVectorOperado(vectorOperar,posicionOperacion,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar.splice(posicionValorOperarUno, 1)
            vectorOperar.splice(posicionOperacion, 1)
            return vectorOperar

            case '/':
            resultado=division(valorOperarUno,valorOperarDos);
            vectorOperar=organizarVectorOperado(vectorOperar,posicionValorOperarUno,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar=organizarVectorOperado(vectorOperar,posicionValorOperarDos,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar=organizarVectorOperado(vectorOperar,posicionOperacion,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar.splice(posicionValorOperarUno, 1)
            vectorOperar.splice(posicionOperacion, 1)
            return vectorOperar
            
            case '+':
            resultado=suma(valorOperarUno,valorOperarDos);
            vectorOperar=organizarVectorOperado(vectorOperar,posicionValorOperarUno,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar=organizarVectorOperado(vectorOperar,posicionValorOperarDos,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar=organizarVectorOperado(vectorOperar,posicionOperacion,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar.splice(posicionValorOperarUno, 1)
            vectorOperar.splice(posicionOperacion, 1)
            return vectorOperar
            
            case '-':
            resultado=resta(valorOperarUno,valorOperarDos);
            vectorOperar=organizarVectorOperado(vectorOperar,posicionValorOperarUno,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar=organizarVectorOperado(vectorOperar,posicionValorOperarDos,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar=organizarVectorOperado(vectorOperar,posicionOperacion,resultado)
            vectorOperar=vectorOperar.split(',')
            vectorOperar.splice(posicionValorOperarUno, 1)
            vectorOperar.splice(posicionOperacion, 1)
            return vectorOperar
        }
    }
    return vectorOperar
}

let organizarVectorOperado = function(vectorOperar,posicion,valor){
    vectorOperar[posicion]=valor
    vectorOperar=vectorOperar.toString()
    return vectorOperar
}
