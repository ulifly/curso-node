function saludar(nombre) {
  return `hola ${nombre}`;
}

function holaMundo() {
  return "¡¡Hola mundo!!";
}

function funcionFalsa() {
  return "esta funcion es de relleno";
}
//module.exports.saludarx = saludar;
//module.exports.holaMundo = holaMundo;

// tambien se pude exportar con la sig sintaxis

module.exports = {
  saludarx: saludar,
  holaMundo: holaMundo,
};
