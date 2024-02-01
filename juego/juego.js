
let puntosUsuario = 0
let puntosComputador = 0

jugar = function(eleccionJugador){
    let ruta
    let elementoGenerado
    let ganadorDeterminado
    elementoGenerado = generarElemento()
    ruta = generarRuta(elementoGenerado)
    ganadorDeterminado = determinarGanador(eleccionJugador,elementoGenerado)
   
    mostrarImagen("imgChooseComputer",ruta )

    mostrarImagen("imgChooseUser","imagenes/"+eleccionJugador+".png" )

    if(ganadorDeterminado == 0){
        mostrarTexto("lblMessage", "EMPATE")
    }else if(ganadorDeterminado == 1){
        mostrarTexto("lblMessage", "GANASTE LA PARTIDA")
        puntosUsuario++
        mostrarTexto("lblpuntosUsuario", puntosUsuario)
    }else if(ganadorDeterminado == 2){
        mostrarTexto("lblMessage", "PERDISTE LA PARTIDA")
        puntosComputador++
        mostrarTexto("lblpuntosComputador",puntosComputador)
    }

    if(puntosUsuario == 5){
        alert("HAS GANADO EL JUEGO")
    }else if(puntosComputador == 5){
        alert("EL COMPUTADOR A GANADO")
    }


}

limpiar = function(){
    mostrarTexto("lblMessage", "")
    mostrarTexto("lblpuntosUsuario", 0)
    mostrarTexto("lblpuntosComputador", 0)

    mostrarImagen("imgChooseComputer","" )
    mostrarImagen("imgChooseUser","" )

    puntosUsuario = 0
    puntosComputador = 0
}