calcularValorDescuento = function(monto, porcentajeDescuento){
    let descuento
    descuento = (monto * porcentajeDescuento)/100

    return descuento
}

calcularIVA = function(monto){
    let iva
    iva = monto * (12/100)

    return iva
}

calcularSubtotal = function(precio, cantidad){
    let subtotal
    subtotal = precio * cantidad

    return subtotal
}

calcularTotal = function(subtotal, descuento,iva){
    let total
    total = (subtotal - descuento)+ iva

    return total
}

calcularDescuentoPorVolumen = function(subtotal, cantidad){
    let valorDescuento
    if(cantidad <3){
        valorDescuento = (subtotal  *0)/100
    }else if(cantidad >=3 && cantidad <=5){
        valorDescuento = (subtotal  * 3)/100
    }else if(cantidad >=6 && cantidad <=11){
        valorDescuento = (subtotal  * 4)/100
    }else if(cantidad >=12){
        valorDescuento = (subtotal  * 5)/100
    }

    return valorDescuento

}

esProductoValido = function (producto, idComponenteError) {
    let hayErrores = false
    if (producto.length >= 10) {
        mostrarTexto(idComponenteError, "DEBE CONTENER MÁXIMO 10 CARACTERES")
        hayErrores = true
    }else if(producto == null || producto == ""){
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO")
        hayErrores = true
    }

   
    if(hayErrores == false){
        mostrarTexto(idComponenteError, "")
        
    }

    return !hayErrores

}

esCantidadValida = function (cantidad, idComponenteError) {
    console.log(cantidad)
    let hayErrores = false
    if ( cantidad <= 0 || cantidad >= 100) {
        mostrarTexto(idComponenteError, "DEBE SER UN NUMERO ENTRE 0 Y 100")
        hayErrores = true
    }else if( isNaN(cantidad)){
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO")
        hayErrores = true
    }

   
    if(hayErrores == false){
        mostrarTexto(idComponenteError, "")
        
    }

    return !hayErrores

}

esPrecioValido = function (precio, idComponenteError) {
    let hayErrores = false
    if ( precio <= 0 ||  precio >=50) {
        mostrarTexto(idComponenteError, "DEBE SER UN NUMERO ENTRE 0 Y 50")
        hayErrores = true
    }else if(isNaN(precio)){
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO")
        hayErrores = true
    }

   
    if(hayErrores == false){
        mostrarTexto(idComponenteError, "")
        
    }

    return !hayErrores

}