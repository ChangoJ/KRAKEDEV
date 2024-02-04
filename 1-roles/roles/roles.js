
let esNuevo = false
let empleados = [
    {
        cedula: "1714616123",
        nombre: "John",
        apellido: "Cena",
        sueldo: 500.0
    },
    {
        cedula: "0914632123",
        nombre: "Luisa",
        apellido: "Gonzalez",
        sueldo: 900.0
    }
]


mostrarOpcionEmpleado = function () {

    mostrarComponente("divEmpleado")
    ocultarComponente("divRol")
    ocultarComponente("divResumen")
    deshabilitarCajasEmpleado()
    mostrarEmpleado()
}

deshabilitarCajasEmpleado = function () {
    deshabilitarComponente("txtCedula")
    deshabilitarComponente("txtNombre")
    deshabilitarComponente("txtApellido")
    deshabilitarComponente("txtSueldo")
    deshabilitarComponente("btnGuardar")
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula")
    habilitarComponente("txtNombre")
    habilitarComponente("txtApellido")
    habilitarComponente("txtSueldo")
    habilitarComponente("btnGuardar")
    esNuevo = true
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol")
    ocultarComponente("divEmpleado")
    ocultarComponente("divResumen")
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen")
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
}

onload = function () {
    mostrarOpcionEmpleado()
}

mostrarEmpleado = function () {
    let empleado
    let cmpEmpleado = document.getElementById("tablaEmpleados")
    let contenidoTabla = "<table>" +
        "<tr><th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th></tr>"

    for (i = 0; i < empleados.length; i++) {
        empleado = empleados[i]
        contenidoTabla += "<tr><td>" + empleado.cedula + "</td>"
        contenidoTabla += "<td>" + empleado.nombre + "</td>"
        contenidoTabla += "<td>" + empleado.apellido + "</td>"
        contenidoTabla += "<td>" + empleado.sueldo + "</td></tr>"
    }
    contenidoTabla += "</table>"

    cmpEmpleado.innerHTML = contenidoTabla
}



buscarEmpleado = function (cedula) {
    let empleado = null
    for (let i = 0; i < empleados.length; i++) {
        empleado = empleados[i]

        if (cedula == empleado.cedula) {
            return empleado
        }


    }

    return empleado

}

agregarEmpleado = function (empleado) {
    let existe = false
    for (let i = 0; i < empleados.length; i++) {
        empleadoCheck = empleados[i]

        if (empleadoCheck.cedula == empleado.cedula) {
            existe = true
        }


    }

    if (existe) {

        return true
    } else {
        return false
    }
}

guardar = function () {
    let cedula = ""
    let nombre = ""
    let apellido = ""
    let sueldo = 0
    let validarCedula = true
    let validarText = true
    let validarSueldo = true
    let estadoGuardado
    let nuevoEmpleado = {}
    cedula = recuperarTexto("txtCedula")
    nombre = recuperarTexto("txtNombre")
    apellido = recuperarTexto("txtApellido")
    sueldo = recuperarFloat("txtSueldo")

    if (cedula.length == 10) {
        for (i = 0; i < cedula.length; i++) {
            let caracter = cedula.charAt(i)
            if (!esDigito(caracter)) {
                validarCedula = false
            }
        }
        if (!validarCedula) {
            mostrarTexto("lblErrorCedula", "Debe ser solo digitos")


        } else {
            mostrarTexto("lblErrorCedula", "")
        }
    } else {
        mostrarTexto("lblErrorCedula", "Debe tener 10 caracteres")
        validarCedula = false

    }

    validarTextoNombre = validarTexto(nombre, "lblErrorNombre")
    validarTextoApellido = validarTexto(apellido, "lblErrorApellido")

    if ((sueldo < 400 || sueldo > 5000)) {

        mostrarTexto("lblErrorSueldo", "Debe ser entre 400 y 5000")
        validarSueldo = false

    } else if (!esFloat(sueldo)) {

        mostrarTexto("lblErrorSueldo", "Debe ser un numero Flotante")
        validarSueldo = false

    } else {
        mostrarTexto("lblErrorSueldo", "")

    }



    if (cedula.length > 0 && nombre.length > 0 && apellido.length > 0 && sueldo != null) {
      
        if (validarCedula & validarTextoNombre & validarTextoApellido & validarSueldo) {

            if (esNuevo) {
                nuevoEmpleado.cedula = cedula
                nuevoEmpleado.nombre = nombre
                nuevoEmpleado.apellido = apellido
                nuevoEmpleado.sueldo = sueldo
                estadoGuardado = agregarEmpleado(nuevoEmpleado)
                if (!estadoGuardado) {
                    alert("EMPLEADO GUARDADO CORRECTAMENTE")
                    deshabilitarCajasEmpleado()
                } else {
                    alert("YA EXISTE UN EMPLEADO CON LA CEDULA: " + nuevoEmpleado.cedula)

                }
            }
        }
    } else {
        console.log(cedula.length, nombre.length, apellido.length, isEmpty(sueldo))
    }



}

validarTexto = function (valor, componente) {

    let validarTexto = true
    if (valor.length >= 3) {
        for (i = 0; i < valor.length; i++) {
            let caracter = valor.charAt(i)
            if (!esMayuscula(caracter)) {
                validarTexto = false
            }
        }
        if (!validarTexto) {
            mostrarTexto(componente, "Debe ser solo mayusculas")

        } else {
            mostrarTexto(componente, "")

        }
    } else {

        mostrarTexto(componente, "Debe tener al menos 3 caracteres")
        validarTexto = false
    }

    return validarTexto
}

esFloat = function (valor) {
    let numeroFloat = parseFloat(valor);

    if (!isNaN(numeroFloat) && isFinite(numeroFloat) && Number.isInteger(numeroFloat)) {
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


esMayuscula = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0)

    if (codigoAscii >= 65 && codigoAscii <= 90) {
        return true
    } else {
        return false
    }

}

