// modulo os
// este modulo no esta disponible de forma global asi que hay que importarlo
const os = require("os");

console.log(os.type()); //tipo de sistema operativo widows o darwin si es mac
console.log(os.homedir()); //deirectorio principal del sistema operativo
console.log(os.uptime()); //tiempo que lleva corriendo el sistema operativo en segundos
console.log(os.userInfo()); //informacion sobre el usuario

//modulo timers, sirve para realizar operaciones asincronas
