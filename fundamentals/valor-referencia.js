// Todos los primitivos se pasan por valor (copias independientes)
let a = 10;
let b = a; // b es 10 (copia independiente)
b = 20; // Solo cambia b
console.log({ a, b });

// Todos los objetos se pasan por referencia (variables que apuntan al mismo objeto)
let obj1 = { nombre: "Juan" };
let obj2 = obj1; // obj2 referencia el mismo objeto que obj1
obj2.nombre = "Pedro"; // Modifica EL objeto
console.log({ obj1, obj2 });

// Solución para copiar objetos y evitar referencias compartidas
let obj3 = { nombre: "Ana" };
let obj4 = { ...obj3 }; // Copia independiente usando spread operator
obj4.nombre = "Luisa"; // Modifica solo obj4
console.log({ obj3, obj4 });

// Otro caso: funciones que reciben objetos
const cambiarNombre = ({ persona }) => {
  // 1. clonar el objeto antes de modificarlo
  const nuevaPersona = { ...persona };
  // 2. modificar el nombre en la COPIA
  nuevaPersona.nombre = "Ronaldo";
  // 3. retornar la copia modificada
  return nuevaPersona;
};

let pau = { nombre: "Pau" };
// thiago recibe el objeto NUEVO y modificado
let thiago = cambiarNombre(pau);
console.log({ pau, thiago });

// Arreglos (objetos) también se pasan por referencia
let frutas1 = ["Piña", "Mango"];
let frutas2 = frutas1 // [...frutas1] // para crear una copia independiente
frutas2.push("Mandarina"); // Modifica el arreglo original
console.table({ frutas1, frutas2 });

// En Go, el paso es siempre por valor (copia). Para modificar el original, 
// se debe pasar explícitamente la copia de la dirección de memoria (un puntero).

// En JavaScript, los objetos y arreglos se pasan por referencia; 
// ambas variables apuntan a la misma ubicación en memoria, lo que permite modificar el original.
// Para evitar esto, se deben clonar los objetos o arreglos antes de modificarlos. 
// por eso el operador spread (...) es tan útil en JavaScript.