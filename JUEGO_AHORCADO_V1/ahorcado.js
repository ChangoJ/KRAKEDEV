//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta


guardarPalabra = function(){
    let letra
    let verificadorMayuscula = 0
    let palabra = recuperarTexto("txtSecreta")

    for(i=0; i<palabra.length; i++){
        letra = palabra.charAt(i)
        
        if(esMayuscula(letra)){
            verificadorMayuscula++
        }
    }

    if(palabra.length == 5 && verificadorMayuscula == 5){
        palabraSecreta = palabra
    }else{
        alert("Debe ingresar una palabras de 5 letras mayusculas")
    }
    console.log(palabra)
}   


mostrarLetra = function(letra, posicion){

    const posiciones = {
        0: "div0",
        1: "div1",
        2: "div2",
        3: "div3",
        4: "div4"

    }

    mostrarTexto(posiciones[posicion], letra)
}


esMayuscula = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0)

    if (codigoAscii >= 65 && codigoAscii <= 90) {
        return true
    } else {
        return false
    }

}