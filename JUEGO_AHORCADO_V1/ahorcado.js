//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta
let intentos = 0
let coincidencias = 0
let errores = 0


guardarPalabra = function () {
    let letra
    let verificadorMayuscula = 0
    let palabra = recuperarTexto("txtSecreta")

    for (i = 0; i < palabra.length; i++) {
        letra = palabra.charAt(i)

        if (esMayuscula(letra)) {
            verificadorMayuscula++
        }
    }

    if (palabra.length == 5 && verificadorMayuscula == 5) {
        palabraSecreta = palabra
    } else {
        alert("Debe ingresar una palabras de 5 letras mayusculas")
    }
    console.log(palabra)
}


mostrarLetra = function (letra, posicion) {

    const posiciones = {
        0: "div0",
        1: "div1",
        2: "div2",
        3: "div3",
        4: "div4"

    }

    mostrarTexto(posiciones[posicion], letra)
}
validar = function (letra) {
    let letrasEncontradas = 0
    for (i = 0; i < palabraSecreta.length; i++) {
        if (letra == palabraSecreta.charAt(i)) {
            mostrarLetra(letra, i)
            letrasEncontradas++
            coincidencias++
        }

    }
    if (letrasEncontradas == 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA")
        errores++
        mostrarAhorcado()
    }

}

ingresarLetra = function () {
    let letra
    letra = recuperarTexto("txtLetra")

    if (esMayuscula(letra)) {
        validar(letra)
        if (coincidencias == 5) {
            alert("HA GANADO")
        } else if (intentos == 10) {
            alert("HA PERDIDO")
        }
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }
    intentos++
}

mostrarAhorcado = function () {
    for (let i = 0; i <= errores; i++) {
        if (errores == i) {
            mostrarImagen("ahorcadoImagen", "Ahorcado_0"+i+".png")
        }
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