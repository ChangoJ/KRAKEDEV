obtenerAleatorio = function(){
    let numeroAleatorio = Math.random()
    numeroAleatorio = Math.floor(numeroAleatorio*3)+1

    return parseInt(numeroAleatorio)

}

generarElemento = function(){
    const opciones ={
        "1": "piedra",
        "2": "papel",
        "3": "tijera",
    }

    let numeroAleatorio = obtenerAleatorio()

    if(numeroAleatorio in opciones){
        return opciones[numeroAleatorio]
    }
}

determinarGanador = function(eleccionJugador1, eleccionJugador2){
    const opciones ={
        "piedra": 1,
        "papel": 2,
        "tijera": 3,
    }

    eleccionJugador1 = opciones[eleccionJugador1]
    eleccionJugador2 = opciones[eleccionJugador2]
    
    if(eleccionJugador1 == eleccionJugador2){
        return 0
    }else if(eleccionJugador1 == 1 && eleccionJugador2 ==2){
        return 2
    }else if(eleccionJugador1 == 1 && eleccionJugador2 == 3){
        return 1
    }else if(eleccionJugador1 == 2 && eleccionJugador2 == 1){
        return 1
    }else if(eleccionJugador1 == 2 && eleccionJugador2 == 3){
        return 2
    }else if(eleccionJugador1 == 3 && eleccionJugador2 == 1){
        return 2
    }else if(eleccionJugador1 == 3 && eleccionJugador2 == 2){
        return 1
    }
}

generarRuta = function(nombre){
    let rutaImagen
    rutaImagen = "imagenes/"+nombre+".png"

    return rutaImagen
}

