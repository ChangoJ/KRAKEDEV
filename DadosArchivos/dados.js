jugar  = function(){
    let aleatorio
    aleatorio = lanzarDado()
    cambiarTexto("lblNumero", aleatorio)

    if(aleatorio>3){

        cambiarTexto("lblTexto", "Es mayor a 3 - GANASTE")
    }else{
        cambiarTexto("lblTexto", "Es MENOR a 3 - ESTAS EN MALAS")
    }
}

lanzarDado = function(){
    let aleatorio
    let numeroMultiplicado
    let numeroEntero
    let valorDado

    aleatorio = Math.random()
    numeroMultiplicado = aleatorio*6
    numeroEntero = parseInt(numeroMultiplicado)
    valorDado = numeroEntero+1
    

    return valorDado
}