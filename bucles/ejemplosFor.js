mostrarNumeros = function(){
    console.log("ANTES DEL FOR")
    for(let i=0; i<4;i++){
        console.log(i)
    }
    console.log("LUEGO DEL FOR")
}

mostrarNumeros2 = function(){
    console.log("ANTES DEL FOR")
    for(let indice=0; indice<=5; indice++){
        console.log(indice)
    }

    console.log("LUEGO DEL FOR")
}

mostrarPares = function(){
    console.log("ANTES DEL FOR")
    for(let x=2; x<=10; x+=2){

        
            console.log(x)
       
    }

    console.log("LUEGO DEL FOR")
}

mostrarInverso = function(){

    console.log("ANTES DEL FOR")
    for(let i=10; i>0; i--){
            console.log(i)
    }
    console.log("LUEGO DEL FOR")
}

hackearNasaPelis = function(){
    for(let porcentaje = 0; porcentaje<100; porcentaje++){
        console.log("Hackeando nada: "+porcentaje+"%")
    }
    console.log("La nasa ha sido hackeada")
}

mostrarImpares = function(){
    console.log("ANTES DEL FOR")
    for(let i=0; i<=21; i++){
        if(i%2 !=0){
            console.log(i)
        }
    }
    console.log("LUEGO DEL FOR")
}