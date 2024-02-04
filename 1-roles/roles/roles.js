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


mostrarOpcionEmpleado = function(){

    mostrarComponente("divEmpleado")
    ocultarComponente("divRol")
    ocultarComponente("divResumen")
    mostrarEmpleado()
}

mostrarOpcionRol = function(){
    mostrarComponente("divRol")
    ocultarComponente("divEmpleado")
    ocultarComponente("divResumen")
}

mostrarOpcionResumen = function(){
    mostrarComponente("divResumen")
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
}

onload = function(){
    mostrarOpcionEmpleado()
}

mostrarEmpleado = function(){
    let empleado
    let cmpEmpleado = document.getElementById("tablaEmpleados")
    let contenidoTabla = "<table>"+
    "<tr><th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th></tr>"

    for(i =0; i<empleados.length; i++){
        empleado = empleados[i]
        contenidoTabla += "<tr><td>"+empleado.cedula+"</td>"
        contenidoTabla += "<td>"+empleado.nombre+"</td>"
        contenidoTabla += "<td>"+empleado.apellido+"</td>"
        contenidoTabla += "<td>"+empleado.sueldo+"</td></tr>"
    }
    contenidoTabla += "</table>"

    cmpEmpleado.innerHTML = contenidoTabla
}
