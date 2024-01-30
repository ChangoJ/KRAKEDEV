calcularPromedioNotas = function () {
    let nota1
    let nota2
    let nota3
    let promedio
    nota1 = recuperarFloat("txtNota1")
    nota2 = recuperarFloat("txtNota2")
    nota3 = recuperarFloat("txtNota3")

    promedio = calcularPromedio(nota1, nota2, nota3)

    mostrarTexto("lblPromedio", promedio.toFixed(2))

    if (promedio < 5 && promedio > 0) {
        mostrarTexto("lblMensaje", "REPROBADO")
        mostrarImagen("imgSituacion", "imagenes/fracaso.gif")

    } else if (promedio >= 5 && promedio <= 8) {
        mostrarTexto("lblMensaje", "BUEN TRABAJO")
        mostrarImagen("imgSituacion", "imagenes/exito.gif")

    } else if (promedio > 8 && promedio <= 10) {
        mostrarTexto("lblMensaje", "EXCELENTE")
        mostrarImagen("imgSituacion", "imagenes/excelente.gif")
    }else{
        
        mostrarTexto("lblMensaje", "DATOS INCORRECTOS")
        mostrarImagen("imgSituacion", "imagenes/fracaso.gif")
    }
}