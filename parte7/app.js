// ***************** modulo fs (file system) ******************
//sirve para utilizar el sistema de archivos como nota todos los metodos de este modulo son asincronos por defecto
//se puede agregar Sync a sus nombres para volver el proceso sincrono

const fs = require ('fs')
//--------unlink--------
//  elimina un archivo 

fs.unlink('indice.txt', (err) => {
    if (err)
        throw err
    console.log("se ha eliminado el archivo");    
});
