validarEstructura = function(placa){
    let mensajeError = ""

    if(placa.length <7  || placa.length > 8){
        mensajeError = "La placa debe tener de 7 u 8 caracteres"
    }else if(!esMayuscula(placa.charAt(0))){
        mensajeError = "El primer caracter debe ser Mayuscula"
    
    }else if(!esMayuscula(placa.charAt(1))){
        mensajeError = "El segundo caracter debe ser Mayuscula"
    
    }else if(!esMayuscula(placa.charAt(2))){
        mensajeError = "El tercer caracter debe ser Mayuscula"
    
    }else if(!esGuion(placa.charAt(3))){
        mensajeError = "El cuarto caracter debe ser un guion"
    
    }else if(!esDigito(placa.charAt(4))){
        mensajeError = "El quinto caracter debe ser un Digito"
    
    }else if(!esDigito(placa.charAt(5))){
        mensajeError = "El sexto caracter debe ser un Digito"
    
    }else if(!esDigito(placa.charAt(6))){
        mensajeError = "El septimo caracter debe ser un Digito"
    
    }else if(placa.length == 8 && !esDigito(placa.charAt(7))){
     
            mensajeError = "El octavo caracter debe ser un Digito"
    
    }else{
        return mensajeError = null
    }

   return mensajeError

}

obtenerProvincia = function(placa) {
    
    const provincias = {
        'A': 'Azuay',
        'B': 'Bolívar',
        'U': 'Cañar',
        'C': 'Carchi',
        'X': 'Cotopaxi',
        'H': 'Chimborazo',
        'O': 'El Oro',
        'E': 'Esmeraldas',
        'W': 'Galápagos',
        'G': 'Guayas',
        'I': 'Imbabura',
        'L': 'Loja',
        'R': 'Los Ríos',
        'M': 'Manabí',
        'V': 'Morona Santiago',
        'N': 'Napo',
        'S': 'Pastaza',
        'P': 'Pichincha',
        'K': 'Sucumbíos',
        'Q': 'Orellana',
        'T': 'Tungurahua',
        'Z': 'Zamora Chinchipe',
        'Y': 'Santa Elena'
    };

    
    let letra = placa.charAt(0).toUpperCase(); 

    if (letra in provincias) {
        return provincias[letra];
    } else {
        return null
    }
}

obtenerTipoVehiculo = function(placa){
    const tipoVehiculo = {
        'A': 'Vehículo comercial',
        'Z': 'Vehículo comercial',
        'E': 'Vehículo gubernamental',
        'X': 'Vehículo de uso ofical',
        'S': 'Vehículo del gobierno provincial',
        'M': 'Vehículo municipal',
    };
    
    let letra = placa.charAt(1).toUpperCase();

    if (letra in tipoVehiculo) {
        return tipoVehiculo[letra];
    } else {
        return null
    }
}

obtenerDiaPicoYPlaca = function(placa){
    const picoYPlaca = {
        '1': 'Lunes',
        '2': 'Lunes',
        '3': 'Martes',
        '4': 'Martes',
        '5': 'Miércoles',
        '6': 'Miércoles',
        '7': 'Jueves',
        '8': 'Jueves',
        '9': 'Viernes',
        '0': 'Viernes',
    };

    let digito = placa.charAt(placa.length-1)

    if (digito in picoYPlaca) {
        return picoYPlaca[digito];
    }

}