// ----------------------------------------
// 1. Array (Arreglo)
// ----------------------------------------
// En JavaScript, no necesitas especificar el tipo de dato del array en la declaración.
// Simplemente se declara como un array normal con corchetes [].
const numeros = [1, 2, 3, 4, 5];
console.log("Array de números:", numeros);

const nombres = ["Ana", "Carlos", "Beatriz"];
console.log("Array de nombres:", nombres);

// ----------------------------------------
// 2. Tuple (Tupla)
// ----------------------------------------
// JavaScript no tiene el concepto de tuplas como TypeScript que imponga una longitud y tipos fijos.
// En JavaScript, simplemente usas un array si quieres agrupar elementos,
// aunque conceptualmente quieras representarlo como una tupla.
const persona = ["Juan", 30, true];
console.log("Tupla persona (en JS, es un array):", persona);

// ----------------------------------------
// 3. Object (Objeto)
// ----------------------------------------
// En JavaScript, los objetos se definen de manera similar a TypeScript,
// pero no se necesita una interfaz para definir la estructura del objeto por adelantado.
// JavaScript es dinámico, por lo que puedes definir la estructura directamente al crear el objeto.
const producto = {
  id: 101,
  nombre: "Laptop",
  precio: 1500,
  enStock: true,
};
console.log("Objeto producto:", producto);

// ----------------------------------------
// 4. Map (Mapa)
// ----------------------------------------
// Map en JavaScript funciona de manera muy similar a TypeScript.
// No necesitas especificar los tipos clave-valor en la declaración.
const mapaEjemplo = new Map();
mapaEjemplo.set("a", 1);
mapaEjemplo.set("b", 2);
console.log("Mapa:", mapaEjemplo);

// ----------------------------------------
// 5. Set (Conjunto)
// ----------------------------------------
// Set en JavaScript también es muy similar a TypeScript.
// No necesitas especificar el tipo de los elementos en la declaración.
const conjuntoEjemplo = new Set([1, 2, 3, 3, 4]);
console.log("Conjunto:", conjuntoEjemplo);