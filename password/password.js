
ejecutarValidacion = function(){
    let mensaje
    let mesajeError
    mensaje = recuperarTexto("txtCadena")
    mesajeError = validarPassword(mensaje)
    console.log(mesajeError)

    mostrarTexto("lblMessage", mesajeError)
    if(mesajeError == ""){
        mostrarTexto("lblMessage", "PASSWORD CORRECTO")
    }
}


validarPassword = function(password){
    let mensajeError = ""
    let letraIterada
    let tieneMaysuculas = false
    let tieneDigitos = false
    let tieneCaracteresEspeciales = false

    for(let i=0; i < password.length; i++){
        letraIterada = password.charAt(i)
        esMayuscula(letraIterada)
        if(esMayuscula(letraIterada)){
            tieneMaysuculas = true
        }
    }

    for(let i=0; i < password.length; i++){
        letraIterada = password.charAt(i)
        esDigito(letraIterada)
        if(esDigito(letraIterada)){
            tieneDigitos = true
        }
    }

    for(let i=0; i < password.length; i++){
        letraIterada = password.charAt(i)
        esGuionAsterisco(letraIterada)
        if(esGuionAsterisco(letraIterada)){
            tieneCaracteresEspeciales = true
        }
    }

    if(password.length <8 || password.length >16){
        mensajeError = "La contraseña debe tener como minimo 8 y maximo 16 caracteres\n"
    }else if(!tieneMaysuculas){
        mensajeError += "\nLa contraseña debe tener al menos una Mayuscula"
    }else if(!tieneDigitos){
        mensajeError += "\nLa contraseña debe tener al menos un digito"
    }else if(!tieneCaracteresEspeciales){
        mensajeError += "\nLa contraseña debe tener al menos un caracter especial"
    }

    return mensajeError
}


esMayuscula = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0)

    if (codigoAscii >= 65 && codigoAscii <= 90) {
        return true
    } else {
        return false
    }

}

esDigito = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0)

    if (codigoAscii >= 48 && codigoAscii <= 57) {
        return true
    } else {
        return false
    }
}


esGuionAsterisco = function(caracter) {
    let codigoAscii = caracter.charCodeAt(0);

   if (codigoAscii === 95 || codigoAscii === 45 || codigoAscii === 42) {
        return true;
    } else {
        return false;
    }
}
