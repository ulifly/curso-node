// ***************** modulo fs (file system) ******************
//sirve para utilizar el sistema de archivos como nota todos los metodos de este modulo son asincronos por defecto
//se puede agregar Sync a sus nombres para volver el proceso sincrono
const { ifError } = require('assert');
const fs = require('fs');

//-------rename---------
//cambia el nombre de un archivo


fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log("se cambio el nombre satisfactoriamente");
})
