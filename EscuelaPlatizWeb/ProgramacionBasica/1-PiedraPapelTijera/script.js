let jugador, pc;

alert('Bienvenido al juego de piedra papel o tijera')

function escoje() {
    jugador = prompt(`Escoja una opcion
    1.Piedra, 2.Papel 3.Tijera, 4.Salir`);
    
    if((jugador<1) || (jugador>3) || (jugador==null)){
        alert('Ingreso errado')
        escoje()
    }
}
escoje()


alert('Eligio '+jugador)
