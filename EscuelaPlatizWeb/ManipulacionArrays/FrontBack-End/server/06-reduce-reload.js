const items = [1,2,1,2,6,7,6,7,8,11,12,13,14];

const rta = items
    .reduce( (objResult,number) => {
        if (!objResult[number]){
            objResult[number]=1;
        }else{
            objResult[number]=objResult[number]+1;
        }
        return objResult;
    },{})

console.log(rta);



// podemos poner cualquier nuero que esten entre los rangos asignados en el arrayRespuesta
const itemsReto = [1,2,1,2,6,7,6,7,8,11,12,13,14,16,17,16]; 

// rangos en los cuales va a buscar y incrementar el contador si el numero insertado en itemsReto lo agrega en arrayRespuesta como individual
const arrayRespuesta = {
    '1-5':0,
    '6-8':0,
    '9-10':0,
    '11-15':0,
};


let arrayRango = Object.keys(arrayRespuesta);

itemsReto
    .reduce( (arrayRespuesta,number) => 
    {
        let banderaInserto = false;
        console.log(arrayRango)
        arrayRango.forEach(rango => {
            if(rango.includes('-')){
                valueMin = rango.split('-')[0];
                valueMax = rango.split('-')[1];
            }else{
                valueMin = 10;
                valueMax = 5
            }
            if((valueMin <= number) && (number <= valueMax) || (rango==number)){
                arrayRespuesta[rango] = parseInt(arrayRespuesta[rango]) + 1;
                banderaInserto = true;
            }else if(rango==arrayRango[arrayRango.length-1] && !banderaInserto){
                arrayRespuesta[number] = 1;
                arrayRango.push(`${number}`);
                banderaInserto = true;
            }else{
                arrayRespuesta[rango] = parseInt(arrayRespuesta[rango]);
            }
                
        })
        return arrayRespuesta
    },arrayRespuesta)


console.log(arrayRespuesta)