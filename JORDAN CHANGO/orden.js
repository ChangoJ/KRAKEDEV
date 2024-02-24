let personas = [
    {
        nombre: "Marcos",
        edad: 18
    }, 
    {
        nombre: "Roberto",
        edad: 15
    }, 
    {
        nombre: "Kate",
        edad: 25
    }, 
    {
        nombre: "Diana",
        edad: 12
    }, 
    {
        nombre: "Benja",
        edad: 5
    }, 
]

agregarPersona = function(){
    let nombre
    let edad
    let estadoError
    estadoError = false
    nombre = recuperarTexto("txtNombre")
    edad = recuperarInt("txtEdad")
    console.log(edad)
    if(nombre.length <=3){
        mostrarTexto("lblErrorNombre", "Debe tener al menos 3 caracteres")
        estadoError = true
    }
    
    if( (edad <0 || edad > 100)){
        mostrarTexto("lblErrorEdad", "Debe ser entre 0 y 100 y sea numero entero")
        estadoError = true
    }

    if(!estadoError){
        nuevaPersona = {}
        nuevaPersona.nombre = nombre
        nuevaPersona.edad = edad
        personas.push(nuevaPersona)
        alert("PERSONA AGREGADA CORRECTAMENTE")
    }
    mostrarPersonas()
}

encontrarMayor = function(){
    let personaMayor
    let elementoPersona
    personaMayor = personas[0]
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i]
       if(elementoPersona.edad > personaMayor.edad){
        personaMayor = elementoPersona
       }
        
        
    }

    return personaMayor
}

encontrarMenor = function(){
    let personaMenor
    let elementoPersona
    personaMenor = personas[0]
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i]
        console.log(elementoPersona)
       if(elementoPersona.edad < personaMenor.edad){
        personaMenor = elementoPersona
       }
        
        
    }

    return personaMenor
}

determinarMayor  = function(){
    let mayor = encontrarMayor()
    alert(mayor.nombre+" "+mayor.edad)
}

determinarMenor = function(){
    let menor = encontrarMenor()
    alert(menor.nombre+" "+menor.edad)
}

mostrarPersonas = function(){
    let persona
    let contenidoTabla
    let componenteTabla = document.getElementById("tablaEmpleados")

    contenidoTabla = "<table>"+
    "<tr><th>NOMBRE</th>"+
    "<th>EDAD</th></tr>"

    for (let i = 0; i < personas.length; i++) {
        persona = personas[i]
        contenidoTabla += "<tr><td>"+persona.nombre+"</td>"
        contenidoTabla += "<td>"+persona.edad+"</td></tr>"
        
    }
    contenidoTabla += "</table>"

    componenteTabla.innerHTML = contenidoTabla
}

onload = function(){
    mostrarPersonas()
}