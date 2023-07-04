// ***************** modulo fs (file system) ******************
//sirve para utilizar el sistema de archivos como nota todos los metodos de este modulo son asincronos por defecto
//se puede agregar Sync a sus nombres para volver el proceso sincrono

const fs = require ('fs')
//--------apendfile--------
// agrega contenido al final de un archivo o creoa un archivo nuevo si no existe

fs.appendFile('index.html', '<p>agregamos esta lienea con codigo en Node.js<p>', (err)=>{
    if (err) {
        throw err;
    }
    console.log('archivo actualizado satisfactoriamente');
}) 