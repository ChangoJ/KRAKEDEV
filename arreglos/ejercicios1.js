let notas = []



agregarElementos = function () {
    notas.push(5)
    notas.push(10)
    console.log(notas.length)
}

recorrerArreglo = function () {
    let notaR
    for (let i = 0; i < notas.length; i++) {
        notaR = notas[i]
        console.log(notaR)
    }
}

probarAgregar = function () {
    let notaRecuperada
    notaRecuperada = recuperarInt("txtNota")
    agregarNota(notaRecuperada)
}

agregarNota = function (nota) {
    notas.push(nota)
}

ejecutarPromedio = function () {
    let promedio = calcularPromedio()
    mostrarTexto("lblPromedio", promedio)
}

calcularPromedio = function () {
    let sumaNotas = 0
    let promedio
    for (i = 0; i < notas.length; i++) {
        sumaNotas += notas[i]

    }

    promedio = sumaNotas / notas.length
    return promedio
}

generarTabla = function () {
    let contenidoTabla = ""
    let cmpTabla = document.getElementById("divTable")
    contenidoTabla += "<table><tr><td>UNO</td></tr></table>"+
    "<table><tr><td>UNO</td></tr></table>"
    cmpTabla.innerHTML = contenidoTabla
}

mostrarNotas = function(){
    let cmpTabla = document.getElementById("divTable")
    let contenidoTabla = "<table><tr><th>Notas</th></tr>";
    let miNota
    for(let i = 0; i<notas.length; i++){
        miNota = notas[i]
        contenidoTabla += "<tr><td>"
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>"
    }
    
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla 
}