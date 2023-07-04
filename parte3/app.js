// ***************** modulo fs (file system) ******************
//sirve para utilizar el sistema de archivos como nota todos los metodos de este modulo son asincronos por defecto
//se puede agregar Sync a sus nombres para volver el proceso sincrono
const fs = require('fs');


//--------------readfile -----------------//
//lee un archivo
fs.readFile('index.html', 'utf-8', (err, contenido)=>{
    if (err) {
        console.log(err); //es un simple log el programa continuara apesar del error
    }
    else {
        console.log(contenido);
    }
    console.log('debes poder leer el contenido del archivo');
})

// aqui probamos con un error 

fs.readFile('indexa.html', 'utf-8', (err, contenido)=>{
    if (err) {
        console.log(err); //es un simple log el programa continuara apesar del error
    }
    else {
        console.log(contenido);
    }
    console.log('aun cuando hay error el programa se sigue ejecutando');
})

fs.readFile('indexa.html', 'utf-8', (err, contenido)=>{
    if (err) {
        throw err;
    }
    else {
        console.log(contenido);
    }
    console.log('no aparece este mensaje por que throw err detiene la ejecucion');
})

