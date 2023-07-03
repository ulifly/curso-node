// ******************** modulo os *************************+
// este modulo no esta disponible de forma global asi que hay que importarlo
const os = require("os");

console.log(os.type()); //tipo de sistema operativo widows o darwin si es mac
console.log(os.homedir()); //deirectorio principal del sistema operativo
console.log(os.uptime()); //tiempo que lleva corriendo el sistema operativo en segundos
console.log(os.userInfo()); //informacion sobre el usuario

//********************  modulo timers ************************
//sirve para realizar operaciones asincronas

// --------------funcion setTimeout-------------
// sirve para ejecutar una funcion en una cantidad de tiempo definido
function mostrarTema(tema) {
  //creamos una funcion para llamarla
  console.log(`Estoy aprendiendo ${tema}`);
}
//esta funcion es para probar que se puede pasr mas de un argumento a setTeimeout solo con una coma
function sumar(a, b, c) {
  console.log(a + b + c);
}

mostrarTema("Node.js"); // aqui la funcion se llama al instante
setTimeout(mostrarTema, 5000, "salesforce"); // aqui la funcion tarda 5000 ms
setTimeout(sumar, 6000, 1, 2, 3); //aqui probamos setTimeout con 3 argumentos

// ----------funcion setInmediate-------------
// sirve para ejecutar una funcion despues del codigo sincrono
setImmediate(mostrarTema, "Phyton");

//-----------------funcion setInterval-------------------
// sirve para ejecutar codigo un numero infinito de veces  con un retrasi especifico de milisegundos
setInterval(mostrarTema, 1000, "javascript");

// ***************** modulo fs (file system) ******************
