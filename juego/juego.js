
let puntosUsuario = 0
let puntosComputador = 0

jugar = function(eleccionJugador){
    let ruta
    let elementoGenerado
    let ganadorDeterminado
    elementoGenerado = generarElemento()
    ruta = generarRuta(elementoGenerado)
    console.log(elementoGenerado)
    ganadorDeterminado = determinarGanador(eleccionJugador,elementoGenerado)
    console.log(ganadorDeterminado)
}