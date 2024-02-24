let cuentas = []


agregarCuenta = function(){
    let cedula
    let nombre
    let apellido
    let numeroCuenta
    let cuenta = {}
    let estadoDuplicado = false

    cedula = recuperarTexto("txtCedula")
    nombre = recuperarTexto("txtNombre")
    apellido = recuperarTexto("txtApellido")
    numeroCuenta = recuperarTexto("txtCuenta")
    console.log(numeroCuenta)
    
    for (let i = 0; i < cuentas.length; i++) {
        let verificador = cuentas[i];

        if(verificador.numeroCuenta == numeroCuenta){
            estadoDuplicado = true
        }
        
    }

    if(!estadoDuplicado){
        cuenta.cedula = cedula
        cuenta.nombre = nombre
        cuenta.apellido = apellido
        cuenta.numeroCuenta = numeroCuenta
        console.log(cuenta)
        cuentas.push(cuenta)
    }else{
        alert("CUENTA EXISTENTE")
    }
    
    mostrarCuentas()
}


mostrarCuentas = function(){
    let cuenta
    let componenteCuenta = document.getElementById("tablaCuentas")
    let contenidoTabla = "<table>" +
        "<tr><th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>N° CUENTA</th></tr>"

    for (i = 0; i < cuentas.length; i++) {
        cuenta = cuentas[i]
        contenidoTabla += "<tr><td>" + cuenta.cedula + "</td>"
        contenidoTabla += "<td>" + cuenta.nombre + "</td>"
        contenidoTabla += "<td>" + cuenta.apellido + "</td>"
        contenidoTabla += "<td>" + cuenta.numeroCuenta+ "</td></tr>"
    }
    contenidoTabla += "</table>"

    componenteCuenta.innerHTML = contenidoTabla
}

onload = function(){
    mostrarCuentas()
}