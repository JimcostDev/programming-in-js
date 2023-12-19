// Las funciones son procedimientos, un conjunto de sentencias o pasos que realizarán una tarea o cálculo con ciertos valores.

// Tenemos dos tipos de funciones Declarativas y de Expresión

// Declarativa
function miFuncion() { 
    return 3; 
}

let r = miFuncion(); // mandamos llamar la funcion
console.log(r)

// function Expression (también conocidas como funciones anónimas)
var miOtraFuncion = function(a,b) {  
    return a + b;
}

r = miOtraFuncion(5,7); // mandamos llamar la variable como funcion
console.log(r)

//funtion arrows
const hola = () =>{
    return 'Jelouuuuu'
}
r = hola()
console.log(r)

/* =============== Ejemplos ============== */


function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);  // template strings (Plantillas de cadena de texto)
}
saludarEstudiante('Ronaldo')

function suma(a,b) {
    var resultado =  a + b; 
    return resultado;
}

r = suma(20, 30);
console.log(r)