// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax 

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]; 
console.log(frutas); 
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]);   // Los arrays iician en "0" 


// === Metodos para mutar arrays ===


// .push();
 var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
 console.log(frutas);

// .pop();
 var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 
 console.log(frutas);

// unshift()
var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

// shift()
var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf();
var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);


/*El método “map()” permite aplicar una función a cada elemento 
del array y devolver un nuevo array con los valores modificados. Por ejemplo:*/
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados); // [1, 4, 9, 16, 25]


// El método “reduce()” permite combinar todos los elementos del array en un solo valor. Por ejemplo:
const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);
  console.log(suma); // 15

console.log()
console.log("OTRA FORMA DE CREAR ARRAYS")
// Creación de Arrays utilizando la Clase Constructora Array
let myArray = new Array();
let myArray2 = new Array(1, 2, 3, 4);

// Array.from()
// La función Array.from() permite crear un nuevo array a partir de un objeto similar a un array o iterable. 
let arrFrom = Array.from('hello');
console.log(arrFrom); // ["h", "e", "l", "l", "o"]

// Array(n).fill()
// La función fill() permite llenar un array con un valor específico.
let ArrayFill = new Array(5).fill(0);
console.log(ArrayFill); // [0, 0, 0, 0, 0]

//Array.isArray()
//La función Array.isArray() permite determinar si un objeto es un array o no.
console.log(Array.isArray(myArray)); 

// Copiando Arrays
const originalArray = [1, 2, 3, 4];
const copiedArray = new Array(...originalArray);
const copiedArray2 = originalArray.slice();
const copiedArray3 = originalArray.concat();


// Arrays Bidimensionales
const matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];
console.log(matrix);

// También puedes crear un array bidimensional utilizando la clase constructora Array:
const mtrx = new Array(3);
for (let i = 0; i < mtrx.length; i++) {
  mtrx[i] = new Array(3);
}

mtrx[0][0] = 1;
mtrx[0][1] = 2;
mtrx[0][2] = 3;
mtrx[1][0] = 4;
mtrx[1][1] = 5;
mtrx[1][2] = 6;
mtrx[2][0] = 7;
mtrx[2][1] = 8;
mtrx[2][2] = 9;
console.log(mtrx);

// copia de la matriz
const copiedMatrix = [...mtrx];
console.log(copiedMatrix);