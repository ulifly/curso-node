

// aqui declaramos un objeto de js
let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 48646,
    "numLikes": 2356,
    "temas": [
        "Javascript",
        "Node.js"
    ],
    "esPublico": true
}

//aqui se asiga el objeto a una constante  y con la funcion stringify se pasa a una cadena de texto
//******************** funcion stringify *****************************/
// sirve para cambiar a tipo texto
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON); 
console.log(typeof infoCursoJSON);//es tipo texto(string)

// ahora se va a pasar de cadena de caracteres =>  objeto 
let infoCursoObjeto = JSON.parse(infoCursoJSON) //aqui volvemos a convertir la cadena de caractrres que se asigno a la constante
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);