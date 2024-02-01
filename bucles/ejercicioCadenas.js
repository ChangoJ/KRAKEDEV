
ejecutarPrueba1 = function(){
    let mensaje
    mensaje = recuperarTexto("txtCadena")
    recorrerCadena(mensaje)
}

ejecutarPrueba2 = function(){
    let mensaje
    mensaje = recuperarTexto("txtCadena")
    console.log(mensaje)
    invertirCadena(mensaje)
}



recorrerCadena = function(cadena){

    let caracter

    for(let posicion= 0; posicion<cadena.length; posicion++){
        caracter = cadena.charAt(posicion)
        console.log("Caracter "+caracter+" posicion "+posicion)
    }

    for(let posicion= 0; posicion<=cadena.length-1; posicion++){
        caracter = cadena.charAt(posicion)
        console.log("CARACTER "+caracter+" posicion "+posicion)
    
    }
}

invertirCadena = function(cadena){
    let resultado = ""
    let letra 
    for( i=cadena.length-1; i>=0; i--){
        letra = cadena.charAt(i)
        resultado = resultado+letra
        
    }

    mostrarTexto("lblInvertido", resultado)
}

buscarLetra = function(cadena, letra){
    let letraIterada
    let existeLetra = false
    for(let i=0; i<cadena.length;i++){
        letraIterada = cadena.charAt(i)
        if(letraIterada == letra){
            existeLetra = true
        }
    }
    if(existeLetra == true){
        return true
    }else{
        return false
    }
}

contarMayusculas = function(cadena){
    let letra
    let contadorMayusculas
    for(let i=0; i<cadena.length; i++){
        letra = cadena.charAt(i)
        if(esMayuscula(letra)){
            contadorMayusculas++
        }
    }
    console.log(contadorMayusculas)
}