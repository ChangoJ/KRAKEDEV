
let esNuevo = false
let roles = []
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
    deshabilitarComponente("btnGuardarRol")
    mostarRoles()
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen")
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
}

onload = function () {
    mostrarOpcionRol()
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
        let empleadoSearch = empleados[i]

        if (cedula == empleadoSearch.cedula) {
            empleado = empleadoSearch
            return empleado
        }


    }
    console.log(empleado)

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
                    esNuevo = false
                    deshabilitarCajasEmpleado()
                } else {
                    alert("YA EXISTE UN EMPLEADO CON LA CEDULA: " + nuevoEmpleado.cedula)

                }
            } else {
                let empleadoEncontrado = buscarEmpleado(cedula)
                console.log(empleadoEncontrado)
                empleadoEncontrado.nombre = nombre
                empleadoEncontrado.apellido = apellido
                empleadoEncontrado.sueldo = sueldo
                mostrarEmpleado()
                alert("EMPLEADO MODIFICADO EXITOSAMENTE")
                deshabilitarCajasEmpleado()
            }
        }
    }



}

ejecutarBusqueda = function () {
    let cedula
    let empleado
    cedula = recuperarTexto("txtBusquedaCedula")
    empleado = buscarEmpleado(cedula)

    if (empleado != null) {
        mostrarTextoEnCaja("txtCedula", empleado.cedula)
        mostrarTextoEnCaja("txtNombre", empleado.nombre)
        mostrarTextoEnCaja("txtApellido", empleado.apellido)
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo)
        ejecutarNuevo()
        deshabilitarComponente("txtCedula")
        esNuevo = false

    } else {
        alert("EMPLEADO NO EXISTE")
    }


}

limpiar = function () {
    esNuevo = false
    mostrarTextoEnCaja("txtCedula", "")
    mostrarTextoEnCaja("txtNombre", "")
    mostrarTextoEnCaja("txtApellido", "")
    mostrarTextoEnCaja("txtSueldo", "")
    deshabilitarCajasEmpleado()
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

buscarPorRol = function () {
    let cedulaRol
    let empleado
    cedulaRol = recuperarTexto("txtBusquedaCedulaRol")
    empleado = buscarEmpleado(cedulaRol)

    if (empleado != null) {
        mostrarTexto("infoCedula", empleado.cedula)
        mostrarTexto("infoNombre", empleado.nombre+" "+empleado.apellido)
        mostrarTexto("infoSueldo", empleado.sueldo)
    }else{
        alert("No existe el empleado")
    }
    

}

buscarRol = function(cedula){
    let rol = null
    for (let i = 0; i < roles.length; i++) {
       let rolSearch = roles[i]

       if(cedula == rolSearch.cedula){
        rol = rolSearch
       }
        
    }

    return rol
}

agregarRol = function(rol){
    let verificarRol = false
    for (let i = 0; i < roles.length; i++) {
        let rolSearch = roles[i]
 
        if(rol.cedula == rolSearch.cedula){
            verificarRol = true
        }
         
     }

     if(!verificarRol){
        roles.push(rol)
     }else{
        alert("ROL YA EXISTE")
     }
}

calcularAporteEmpleado = function(sueldo){
    let aporteEmpleado
    aporteEmpleado = (sueldo*9.45)/100
    return aporteEmpleado
}


calcularAporteEmpleador = function(sueldo){
    let aporteEmpleador

    aporteEmpleador = (sueldo*11.15)/100

    return aporteEmpleador
}


guardarRol = function(){
    let cedula
    let nombre
    let sueldo
    let aporteEmpleado
    let aporteEmpleador
    let valorAPagar
    let rol = {}
    cedula = recuperarTextoDiv("infoCedula")
    nombre = recuperarTextoDiv("infoNombre")
    sueldo = recuperarFloatDiv("infoSueldo")
    aporteEmpleado = recuperarFloatDiv("infoIESS")
    aporteEmpleador = calcularAporteEmpleador(sueldo)
    valorAPagar = recuperarFloatDiv("infoPago")
    rol.cedula = cedula
    rol.nombre = nombre
    rol.sueldo = sueldo
    rol.valorAPagar = valorAPagar
    rol.aporteEmpleado = aporteEmpleado
    rol.aporteEmpleador = aporteEmpleador
    agregarRol(rol)
    alert("GUARDADO EXITOSAMENTE")
    deshabilitarComponente("btnGuardarRol")
    mostarRoles()
}

mostarRoles = function(){

    let rol
    let componenteTabla = document.getElementById("tablaResumen")
   
    contenidoTabla = "<table>" +
    "<tr><th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>VALOR A PAGAR</th>"+
    "<th>APORTE EMPLEADO</th>"+
    "<th>APORTE EMPLEADOR</th></tr>"
    for (let i = 0; i < roles.length; i++) {
        rol = roles[i]

        contenidoTabla += "<tr><td>"+rol.cedula+"</td>"
        contenidoTabla += "<td>"+rol.nombre+"</td>"
        contenidoTabla += "<td>"+rol.valorAPagar+"</td>"
        contenidoTabla +="<td>"+rol.aporteEmpleado+"</td>"
        contenidoTabla += "<td>"+rol.aporteEmpleador+"</td></th>"
        
    }

    contenidoTabla += "</table>"
    componenteTabla.innerHTML = contenidoTabla
    mostrarTotales()

}

mostrarTotales = function(){
    let rol
    let totalEmpleado = 0
    let totalEmpleador  = 0
    let totalAPagar  = 0
    let totalNomina  = 0

    for (let i = 0; i < roles.length; i++) {
        rol = roles[i]
        console.log(rol)
        totalAPagar += rol.valorAPagar
        totalEmpleador += rol.aporteEmpleador
        totalEmpleado += rol.aporteEmpleado
    }

    totalNomina = totalAPagar + totalEmpleado + totalEmpleador

    mostrarTexto("infoTotalPago",totalAPagar)
    mostrarTexto("infoAporteEmpresa",totalEmpleador)
    mostrarTexto("infoAporteEmpleado",totalEmpleado)
    mostrarTexto("infoTotalNomina",totalNomina)

}



calcularValorAPagar = function(sueldo, aporte, descuento){
    let valorAPagar
    valorAPagar = (sueldo - aporte) - descuento
    return valorAPagar
}

calcularRol = function(){
    let sueldo
    let descuentos
    let aporte
    let valorAPagar
    sueldo = recuperarFloatDiv("infoSueldo")
    descuentos = recuperarFloat("txtDescuentos")

    if(esFloat(descuentos) && (descuentos >=0 && descuentos <= sueldo) ){
        aporte = calcularAporteEmpleado(sueldo)
        mostrarTexto("infoIESS", aporte)
        valorAPagar = calcularValorAPagar(sueldo, aporte, descuentos)
        mostrarTexto("infoPago", valorAPagar)

    }
    
    habilitarComponente("btnGuardarRol")
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

