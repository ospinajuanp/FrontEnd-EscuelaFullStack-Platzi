function vehiculo (marca,modelo,annio,color){
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
    this.color=color;
    this.comprar= function(){
        console.log(`Comprando vehiculo ${this.modelo} de ${this.marca} del año ${this.annio} del color ${color}`)
    }
    this.vender= function(){
        console.log(`Vendiendo vehiculo ${this.modelo} de ${this.marca} del año ${this.annio} del color ${color}`)
    }
}

function validarIngresarvehiculo (){
    let insertarvehiculo = prompt("INGRESE UNA OPCION \n 0. Quieres ingresar un vehiculo? \n 1. Salir");
    return !Boolean(Number(insertarvehiculo))
}

function ingresarvehiculo(vehiculosGuardados){
    let marca = prompt("Ingrese la marca");
    let modelo = prompt("Ingrese el modelo");
    let annio = prompt("Ingrese el año");
    let color = prompt("Ingrese la color");
    let vehiculoIngresado = new  vehiculo(marca,modelo,annio,color)
    return vehiculoIngresado
}

function comprarVendervehiculo(vehiculosGuardados){
    for(let vehiculo of vehiculosGuardados){
        let validarComprarVenderVehiculo = prompt(`INGRESE UNA OPCION \n ${vehiculo.modelo} ${vehiculo.annio} \n 0. Comprar \n 1. Vender`);
        if(validarComprarVenderVehiculo){
            vehiculo.comprar();
        }else{
            vehiculo.vender();
        }
    }
}


function startApp (){
    let vehiculosGuardados = new Array;
    insertarvehiculo = validarIngresarvehiculo()

    while(insertarvehiculo){
        vehiculosGuardados.push(ingresarvehiculo(vehiculosGuardados));
        insertarvehiculo = validarIngresarvehiculo();
        if(!insertarvehiculo){
            console.log(vehiculosGuardados[0].modelo)
            comprarVendervehiculo(vehiculosGuardados)
        }
    }
}

startApp()