
//Funcion para calcular la tase de interes, segun el valor de ingreso anual se aplica su tasa de interes
calcularTasaInteres = function (ingresoAnual) {
    let tasaInteres
    if (ingresoAnual < 300000) {
        tasaInteres = 16
    } else if (300000 <=  ingresoAnual && ingresoAnual  < 500000) {
        tasaInteres = 15
    } else if (500000 <=  ingresoAnual && ingresoAnual  < 1000000) {
        tasaInteres = 14
    } else if (1000000 <=  ingresoAnual && ingresoAnual  < 2000000) {
        tasaInteres = 13
    } else if (ingresoAnual >= 2000000) {
        tasaInteres = 12
    }else{
        console.log("Datos incorrectos")
    }

    return tasaInteres
}

//Funcion para calcular el pórcentaje a pagar segun la edad
calcularCapacidadPago = function (edad, ingresos, egresos) {
    let cuotaMensual
    let restante


    restante = ingresos - egresos

    if (edad > 50) {
        cuotaMensual = restante * (30 / 100)
    } else if (edad <= 50) {
        cuotaMensual = restante * (40 / 100)
    }else{
        console.log("Datos incorrectos")
    }

    return cuotaMensual
}


//Funcion para calcular descuentos segun su cantidad se aplica el descuento
calcularDescuento = function (precio, cantidad) {
    let valorDescuento

    if (cantidad < 3) {
        valorDescuento = precio * (0 / 100)
    } else if (3 <= cantidad <= 5) {
        valorDescuento = precio * (2 / 100)
    } else if (6 <= cantidad <= 11) {
        valorDescuento = precio * (3 / 100)
    } else if (cantidad >= 12) {
        valorDescuento = precio * (4 / 100)
    }else{
        console.log("Datos incorrectos")
    }


    return valorDescuento

}


//Funcion para determinar el colesterol LDL segun su nivel de colesterol se da el estado
determinarColesterolLDL = function (nivelColesterol) {
    let estadoColesterol

    if (nivelColesterol < 100) {
        estadoColesterol = "Óptimo (lo mejor para su salud)"
    } else if (100 <= nivelColesterol <= 129) {
        estadoColesterol = "Casi óptimo"
    } else if (130 <= nivelColesterol <= 159) {
        estadoColesterol = "Límite superior del rango normal"
    } else if (160 <= nivelColesterol <= 189) {
        estadoColesterol = "Alto"
    } else if (nivelColesterol >= 190) {
        estadoColesterol = "Muy alto"
    }else{
        console.log("Datos incorrectos")
    }

    return estadoColesterol
}


//Funcion para validar clave y ver su longitud y si cumple la longitud de caracteres
validarClave = function (clave) {
    if (clave.length > 8 && clave.length < 16) {
        return true
    } else {
        return false
    }

}

//Funcion para verificar si es mayuscula segun los codigos ascci
esMayuscula = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0)

    if (codigoAscii >= 65 && codigoAscii <= 90) {
        return true
    } else {
        return false
    }

}
//Funcion para verificar si es minuscula segun los codigos ASCCI
esMinuscula = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0)

    if (codigoAscii >= 97 && codigoAscii <= 122) {
        return true
    } else {
        return false
    }
}
//Funcion para verificar si es digito segun los codigos ASCCI

esDigito = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0)

    if (codigoAscii >= 48 && codigoAscii <= 57) {
        return true
    } else {
        return false
    }
}

//Funcion para dar permiso si las notas si alguna de ellas cumple y es mayor a 90
darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        return true
    } else {
        return false
    }
}
//Funcion para dar permiso si las notas si fisica o matematicas es mayor a 90 y gemotria mayor a 80

otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        return true
    } else {
        return false
    }
}

//Funcion para dar permiso si las notas si fisica o matematicas  o gemotira es mayor a 90 ademas cumplir que  fisica sea mayor a matematicas

dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica)) {
        return true
    } else {
        return false
    }
}