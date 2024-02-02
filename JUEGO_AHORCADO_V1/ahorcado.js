//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta

esMayuscula = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0)

    if (codigoAscii >= 65 && codigoAscii <= 90) {
        return true
    } else {
        return false
    }

}

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