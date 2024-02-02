


generarNumerosRandom = function () {
    let numeroRandom

    numeroRandom = Math.random()

    numeroRandom = Math.floor(numeroRandom * 100) + 1

    return numeroRandom
}

generarAleatorios = function () {
    let aleatorios = []
    let numeroUser
    let numeroAleatorio = []
    numeroUser = recuperarInt("txtNumero")

    if (numeroUser >= 5 && numeroUser <= 20) {
        for (let i = 0; i < numeroUser; i++) {
           
            numeroAleatorio = generarNumerosRandom();
            aleatorios.push(numeroAleatorio);
        }
    } else {
        alert("Ingrese un numero entre 5 y 20")
    }
    console.log(aleatorios)
    mostrarResultados(aleatorios)
}

mostrarResultados = function (arregloNumeros) {
    let componenteTabla = document.getElementById("divTable")
    let contenidoTabla = "<table><tr><th>Numeros</tr></td>"

    for (i = 0; i < arregloNumeros.length; i++) {
        let numeros = arregloNumeros[i]
        contenidoTabla += "<tr><td>"
        contenidoTabla += numeros
        contenidoTabla += "</tr></td>"
    }

    contenidoTabla += "</table>"

    componenteTabla.innerHTML = contenidoTabla
}


