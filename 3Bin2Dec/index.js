let limpiarInput = function(){
    document.getElementById("TextBinario").value = '';
    document.getElementById("TextDecimal").value = '';
}
let getData = function (){
    const textBinario = ''+document.getElementById("TextBinario").value;
    const textDecimal = ''+document.getElementById("TextDecimal").value;
    let cantidadBinario = cantidad(textBinario);
    let cantidadDecimal = cantidad(textDecimal);
    if(cantidadBinario!=0 || cantidadDecimal!=0){
        if(cantidadBinario!=0){
            let arregloTraductorBinario = arregloBinario(cantidadBinario)
            let resultadoTraducionBinario;
            for(let i=0;i<cantidadBinario;i++){
                let valorBinario = textBinario.charAt(i);
                if(valorBinario!=0 && valorBinario!=1){
                    window.alert('No puedes ingresar un numero diferente de 0/1 Error en la posicion: '+(i+1));
                    document.getElementById("TextBinario").value='';
                    break;
                }
            }
            resultadoTraducionBinario=traducirBinario(arregloTraductorBinario,textBinario);
            document.getElementById("TextDecimal").value = resultadoTraducionBinario;
            document.getElementById("TextBinario").value = ''
        }else if(cantidadDecimal!=0){
            let resultadoTraducionDecimal=traducirDecimal(textDecimal);
            document.getElementById("TextBinario").value = resultadoTraducionDecimal;
            document.getElementById("TextDecimal").value = ''
        }
    }
}
let cantidad = function(textValor){
    return textValor.length
}
const arregloBinario = function(tamanoArregloBinario){
    let arregloResultado = [];
    for(let i=0;i<tamanoArregloBinario;i++){
        let valorPotencia = Math.pow(2, (i));
        arregloResultado.push(valorPotencia);
    }
    return arregloResultado
}
let traducirBinario = function(arregloTraductor,numeroBinario){
    let arregloTraductorBinario = arregloTraductor, textBinario = numeroBinario
    let digito, resultado=0, posicion=0;
    let cantidadValidar = (''+textBinario).length;
    while(posicion<cantidadValidar){
        digito=textBinario%10;
        if(digito==1){
            resultado=resultado+arregloTraductorBinario[posicion];
        }
        posicion++;
        textBinario=textBinario/10
        textBinario=Math.trunc(textBinario); 
    }
    return resultado
}
let traducirDecimal = function(numeroDecimal){
    let division = numeroDecimal, modulo;
    let numeroBinario = []
    while(division>0){
        modulo=division%2;
        division=Math.floor(division/2);
        numeroBinario.unshift(modulo)
    }
    return numeroBinario.join('')
}