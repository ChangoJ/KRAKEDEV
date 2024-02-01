validarPlaca = function () {
    let erroresEstructura
    let placa
    let provincia
    let tipoVehiculo
    let picoYPlaca
    placa = recuperarTexto("txtPlaca")

    erroresEstructura = validarEstructura(placa)
    if (erroresEstructura == null) {
        erroresEstructura = "\nESTRUCTURA VALIDA\n"
        provincia = obtenerProvincia(placa)
        tipoVehiculo = obtenerTipoVehiculo(placa)
        picoYPlaca = obtenerDiaPicoYPlaca(placa)

        if (provincia == null) {
            mostrarTexto("lblValidation-provincia", "Provincia Incorrecta")
        } else {
            mostrarTexto("lblValidation-provincia", provincia + "\n")
        }

        if (tipoVehiculo == null) {
            mostrarTexto("lblValidation-vehiculo", "Vehiculo privado\n")
        } else {
            mostrarTexto("lblValidation-vehiculo", tipoVehiculo + "\n")
        }

        if (picoYPlaca) {
            mostrarTexto("lblValidation-picoYPlaca", picoYPlaca)
        }
    } else {
        erroresEstructura = "\nESTRUCTURA INCORRECTA: " + erroresEstructura + "\n"
        mostrarTexto("lblValidation-provincia", "")
        mostrarTexto("lblValidation-vehiculo", "")
        mostrarTexto("lblValidation-picoYPlaca", "")
    }



    mostrarTexto("lblValidation-placa", erroresEstructura)
}

limpiar = function () {
    mostrarTextoEnCaja("txtPlaca", "")
    mostrarTexto("lblValidation-placa", "")
    mostrarTexto("lblValidation-provincia", "")
    mostrarTexto("lblValidation-vehiculo", "")
    mostrarTexto("lblValidation-picoYPlaca", "")

}