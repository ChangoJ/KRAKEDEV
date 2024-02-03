probarAtributos = function () {
    let persona = {
        nombre: "Jordan",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre)
    console.log(persona.edad)
    if (persona.estaVivo == false) {
        console.log("no esta vivo")
    } else {
        console.log("Si esta vivo")
    }
}

crearProducto = function () {
    let producto1
    let producto2
    producto1 = {
        nombre: "Flips",
        precio: 4.50,
        stock: 20
    }

    producto2 = {
        nombre: "Marsmellos",
        precio: 2.50,
        stock: 15
    }

    console.log(producto2.nombre)
    console.log(producto1.precio)
    if (producto1.stock == producto2.stock) {
        alert("Los dos productos tiene el mismo stock")
    } else if (producto1.stock > producto2.stock) {
        alert("El producto 1 tiene mayor stock")
    } else if (producto1.stock < producto2.stock) {
        alert("El producto 2 tiene mayor stock")

    }

}

modificarAtributos = function () {
    let cuenta = {
        numero: "4053578",
        saldo: 0.0,

    }

    cuenta.saldo = 100
    cuenta.saldo += 50

    console.log(cuenta)
}

crearCliente = function () {
    let cliente = {
        cedula: "1726851447",
        nombre: "Marco"
    }

    let cliente1 = {}
    cliente1.nombre = "Romeo"
    cliente1.apellido = "Salcedo"
    cliente1.cedula = "564123"
}

probarIncrementoSaldo = function(){
    let cta = {
        numero: "5642431123",
        saldo: 34.0
    }
    console.log(cta.saldo)
    incrementarSaldo(cta,100);
}

probarDeterminarMayor = function(){
    let mayor
    let persona1 = {
        nombre: "Jordan",
        edad: 50,
    }

    let persona2 = {
        nombre: "Adrian",
        edad: 24,
    }
    
    mayor = determinarMayor(persona1,persona2)

    if(mayor != null){
        console.log("El mayor es: "+mayor.nombre)
    }
}

incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto

}

determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1
    } else if (persona2.edad > persona1.edad) {
        return persona2
    } else {
        return null
    }
}