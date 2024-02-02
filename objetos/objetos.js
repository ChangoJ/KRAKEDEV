probarAtributos = function(){
    let persona = {
        nombre: "Jordan",
        apellido: "Morales",
        edad: 24,
        estaVivo : true
    }
    console.log(persona.nombre)
    console.log(persona.edad)
    if(persona.estaVivo == false){
        console.log("no esta vivo")
    }else{
        console.log("Si esta vivo")
    }
}

crearProducto = function(){
    let producto1
    let producto2
    producto1 = {
        nombre : "Flips",
        precio: 4.50,
        stock: 20
    }

    producto2 = {
        nombre : "Marsmellos",
        precio: 2.50,
        stock: 15
    }

    console.log(producto2.nombre)
    console.log(producto1.precio)
    if(producto1.stock == producto2.stock){
        alert("Los dos productos tiene el mismo stock")
    }else if(producto1.stock > producto2.stock){
        alert("El producto 1 tiene mayor stock")
    }else if(producto1.stock < producto2.stock){
        alert("El producto 2 tiene mayor stock")

    }

}