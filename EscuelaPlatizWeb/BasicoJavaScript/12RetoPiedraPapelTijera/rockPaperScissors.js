// GENERANDO OPCIONES DE JUEGO      -    0 1 2 <- POSICIONAMIENTO DEL ARRAY/ARREGLO
let opciones = ["Piedra", "Papel", "Tijera"]

// OBTENIENDO VALOR ALEATORIO PARA SELECIONAR OPCION
function obtenerOpcionNumeroMaquina (){
    // MATH . FLOOR ME REDONDEA UN NUMERO   -    MATH . RANDOM ME DA UN NUMERO ALEATORIO DE 0 A 1    -  * 3 LO HAGO PARA QUE ME DE UN DECIMAN ENTRE 0 Y 3
    return Math.floor(Math.random() * 3)
}

// DECIR CUAL OPCION ESTA SELECIONADO
function obtenerOpcion(numeroSelecion){
    // LLAMO LA VARIABLE OPCIONES PARA CON EL VALOR DE NUMEROSELECION PARA OBTENER EL VALOR DE LA OPCION / PIEDRA PAPEL O TIJERA
    return opciones[numeroSelecion]
}

// RESULTADO CUANDO ES EMPATE
function resultadoEmpate(selecion){
    // LLAMO LA FUNCION OBTENER OPCION PARA OBTENER EL VALOR DE LA OPCION / PIEDRA PAPEL O TIJERA
    let selecionado = obtenerOpcion(selecion);
    //  ESCRIBO EN CONSOLA `Empate selecionaron ` Y PONGO LA VARIABLE RESULTADO DE OPCION EN `${selecionado}`
    console.log(`Empate selecionaron ${selecionado}`);
}

// RESULTADO EL GANADOR
function resultadoGanador(ganador,selecion){
    // LLAMO LA FUNCION OBTENER OPCION PARA OBTENER EL VALOR DE LA OPCION / PIEDRA PAPEL O TIJERA
    let selecionado = obtenerOpcion(selecion);
    //  ESCRIBO EN CONSOLA `Ganador es` Y PONGO LA VARIABLE DE GANADOR EN `${ganador}` TAMBIEN ESCRIBO EN CONSOLA ` seleciono ` Y PONGO LA VARIABLE RESULTADO DE OPCION EN `${selecionado}`
    console.log(`Ganador es ${ganador} seleciono ${selecionado}`);
}

// IDENTIFICAR QUIEN GANA
function quienGana(numeroSelecionMaquina,numeroSelecionJugador){
    // VALIDAR SI LA SELECION DE LA MAQUINA ES MENOR AL DEL JUGADOR Y SI SELECION MAQUINA + 1 ES IGUAL A NUMERO DEL JUGADOR
    if((numeroSelecionMaquina < numeroSelecionJugador ) && (numeroSelecionMaquina+1)==numeroSelecionJugador){
        //  LLAMO LA FUNCION DE RESULTADO GANADOR PASANDO COMO GANADOR USUARIO Y ENVIANDO LA SELECION DEL JUGADOR
        resultadoGanador('Usuario',numeroSelecionJugador)
    }else{
        //  LLAMO LA FUNCION DE RESULTADO GANADOR PASANDO COMO GANADOR LA MAQUINA Y ENVIANDO LA SELECION DE LA MAQUINA
        resultadoGanador('Maquina',numeroSelecionMaquina)
    }
}

// OBTENER VALOR OPCION PARA MAQUINA
let numeroSelecionMaquina = obtenerOpcionNumeroMaquina();

// OBTENER VALOR OPCION PARA USUARIO    -    AQUI SE PUEDE CAMBIAR POR UN NUMERO MANUAL PARA SELECIONAR # 
let numeroSelecionJugador = obtenerOpcionNumeroMaquina();

// VALIDACION DE EMPATE
let boolSelecionEmpate = numeroSelecionMaquina === numeroSelecionJugador ? true : false ;

// RESULTADO DE LA VALIDACION DE EMPATE
if(boolSelecionEmpate){
    // LLAMO LA FUNCION DE EMPATE CUANDO ES TRUE
    resultadoEmpate(numeroSelecionMaquina)
}else{
    // LLAMO LA FUNCION DE QUIEN GANA CUANDO ES FALSA
    quienGana(numeroSelecionMaquina,numeroSelecionJugador)
}