//asi es como se importan funciones de otro modulo
// const saludos = require("./saludos.js");

// y las llamamos con notacion de punto

/*
console.log(saludos.saludarx("uliflyx"));
console.log(saludos.holaMundo());
*/

//tambien se puede importar funciones especificas con desestructuracion y asi no se importa todo el modulo

const { saludarx, holaMundo } = require("./saludos");

// como se importo funciones especificas estan disponibles como una funcion entro de este modulo y la notacionde punto no sirve

console.log(saludarx("isabela"));
console.log(holaMundo());
