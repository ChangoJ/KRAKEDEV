calcularTasaInteres = function (ingresoAnual) {
    let tasaInteres
    if (ingresoAnual < 300000) {
        tasaInteres = 16
    } else if (300000 <= ingresoAnual < 500000) {
        tasaInteres = 15
    } else if (500000 <= ingresoAnual < 1000000) {
        tasaInteres = 14
    } else if (1000000 <= ingresoAnual < 2000000) {
        tasaInteres = 13
    } else if (ingresoAnual >= 2000000) {
        tasaInteres = 12
    }

    return tasaInteres
}

calcularCapacidadPago = function (edad, ingresos, egresos) {
    let cuotaMensual
    let restante


    restante = ingresos - egresos

    if (edad > 50) {
        cuotaMensual = restante * (30 / 100)
    } else if (edad <= 50) {
        cuotaMensual = restante * (40 / 100)
    }

    return cuotaMensual
}

calcularDescuento = function (precio, cantidad) {
    let valorDescuento
    let valorAPagar

    if (cantidad < 3) {
        valorDescuento = precio * (0 / 100)
    } else if (3 <= cantidad <= 5) {
        valorDescuento = precio * (2 / 100)
    } else if (6 <= cantidad <= 11) {
        valorDescuento = precio * (3 / 100)
    } else if (cantidad >= 12) {
        valorDescuento = precio * (4 / 100)
    }

    valorAPagar = precio - valorDescuento

    return valorAPagar

}

determinarColesterolLDL = function (nivelColesterol) {
    let estadoColesterol

    if (nivelGlucosa < 100) {
        estadoColesterol = "Óptimo (lo mejor para su salud)"
    } else if (100 <= nivelGlucosa <= 129) {
        estadoColesterol = "Casi óptimo"
    } else if (130 <= nivelGlucosa <= 159) {
        estadoColesterol = "Límite superior del rango normal"
    } else if (160 <= nivelGlucosa <= 189) {
        estadoColesterol = "Alto"
    } else if (nivelColesterol >= 190) {
        estadoColesterol = "Muy alto"
    }

    return estadoColesterol
}

validarClave = function (clave) {
    if (clave.length > 8 && clave.length < 16) {
        return true
    } else {
        return false
    }

}

esMayuscula = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0)

    if (codigoAscii >= 65 && codigoAscii <= 90) {
        return true
    } else {
        return false
    }

}

esMinusucula = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0)

    if (codigoAscii >= 97 && codigoAscii <= 122) {
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


darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        return true
    } else {
        return false
    }
}

otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        return true
    } else {
        return false
    }
}

dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica)) {
        return true
    } else {
        return false
    }
}