// La principal diferencia radica en el alcance y el comportamiento del hoisting:

// Ámbito (scope):
// var: Tiene ámbito de función, lo que significa que la variable está disponible en toda la función en la que se declara, incluso antes de su declaración debido al hoisting.
// let: Tiene ámbito de bloque, por lo que la variable solo es accesible dentro del bloque en el que se declara (por ejemplo, dentro de un if, for, etc.).

// Hoisting y redeclaración:
// var: Se eleva (hoisting) y permite redeclaraciones en el mismo ámbito, lo que puede ocasionar comportamientos inesperados.
// let: Aunque también se eleva, no se inicializa hasta que se evalúa la declaración, y no permite redeclarar la misma variable en el mismo bloque, ayudando a evitar errores.

// En términos de buenas prácticas, se recomienda usar let
// (o const cuando no se requiera reasignación) para lograr un código más predecible
// y seguro, evitando los problemas asociados con el alcance y la redeclaración 
// que pueden presentarse con var.

// 1. Ámbito de bloque con let:
if (true) {
    let mensaje = "Hola desde el bloque con let";
    console.log(mensaje); // Salida: Hola desde el bloque
  }
 //console.log(mensaje); // Error: mensaje no está definido

// 2. Ámbito de función con var:
function ejemplo() {
    var mensaje = "Hola desde la función";
    if (true) {
      var mensaje = "Hola desde el bloque con var";
      console.log(mensaje); // Salida: Hola desde el bloque
    }
    console.log(mensaje); // Salida: Hola desde el bloque
  }
  ejemplo();

// 3. Hoisting con let y var:
console.log(mensajeVar); // Salida: undefined
var mensajeVar = "Hola con var";

console.log(mensajeLet); // Error: Cannot access 'mensajeLet' before initialization
let mensajeLet = "Hola con let";
