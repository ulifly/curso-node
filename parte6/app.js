// ***************** modulo fs (file system) ******************
//sirve para utilizar el sistema de archivos como nota todos los metodos de este modulo son asincronos por defecto
//se puede agregar Sync a sus nombres para volver el proceso sincrono

const fs = require ('fs')
//--------writeFile--------
//  reemplaza el contenido de un archivo o crea un archivo nuevo si no existe

fs.writeFile('index.html', 'cambiamos totalmente el contenido', (err) => {
    if (err)
        throw err
    console.log("se ha cambiado el archivo");    
});
fs.writeFile('indice.txt', "creeamos este archivo con este contenido que no existia", (err) => {
    if (err)
        throw err
    console.log("este archivo se creo porq ue no existia");    
});
