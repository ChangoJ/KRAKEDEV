let clientes = [
    {
        cedula: "0726889740",
        nombre: "Keyla",
        edad: 25
    },
    {
        cedula: "1716889740",
        nombre: "Marco",
        edad: 30
    },
    {
        cedula: "1726879740",
        nombre: "Sofia",
        edad: 65
    }
]

guardarCambios = function(){
    let cedula = recuperarTexto("txtCedula")
    let nombre = recuperarTexto("txtNombre")
    let edad = recuperarInt("txtEdad")
    let clienteModificado = {}
    clienteModificado.cedula = cedula
    clienteModificado.nombre = nombre
    clienteModificado.edad = edad

    modificarCliente(clienteModificado)

    mostrarClientes()

}

modificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula)
    if(clienteEncontrado !=null){
        clienteEncontrado.nombre = cliente.nombre
        clienteEncontrado.edad = cliente.edad
    }
}

ejecutarBusqueda = function () {
    let cedula = recuperarTexto("txtCedulaBusqueda")
    let cliente = buscarCliente(cedula)

    if (cliente == null) {
        alert("Cliente no encontrado")
    } else {
        mostrarTextoEnCaja("txtCedula", cliente.cedula)
        mostrarTextoEnCaja("txtNombre", cliente.nombre)
        mostrarTextoEnCaja("txtEdad", cliente.edad)
    }
}

crearCliente = function () {
    let cedula = recuperarTexto("txtCedula")
    let nombre = recuperarTexto("txtNombre")
    let edad = recuperarInt("txtEdad")

    let nuevoCliente = {}
    nuevoCliente.cedula = cedula
    nuevoCliente.nombre = nombre
    nuevoCliente.edad = edad
    agregarCliente(nuevoCliente)
}



agregarCliente = function (cliente) {
    let resultado
    resultado = buscarCliente(cliente.cedula)
    if (resultado == null) {
        clientes.push(cliente)
    } else {
        alert("Ya existe el cliente con la cedula: " + cliente.cedula)
    }
}


buscarCliente = function (cedula) {
    let elementoCliente
    let clienteEncontrado = null
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i]
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente
            break
        }
    }
    return clienteEncontrado
}

mostrarClientes = function () {
    let cmpTabla = document.getElementById("tablaClientes")
    let elementoCliente
    let contenidoTabla = "<table>" +
        "<tr><th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th></tr>"

    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i]
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td></tr>"
    }

    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla

}