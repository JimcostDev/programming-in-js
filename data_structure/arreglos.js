// Definir un arreglo de números
let numeros = [1, 2, 3, 4];
console.log(numeros);
console.log(typeof numeros); // "object" en JavaScript

// Definir un arreglo de tareas
let tareas = ['limpiar la casa', 'estudiar', 'hacer ejercicio'];
console.log(tareas);

// Arreglo con diferentes tipos de datos
let tipos = [1, true, 'hola', ['py', 'js', 'go']];
console.log(tipos);
// Imprimir go desde el arreglo anidado
console.log(tipos[3][2]);

// Acceder a elementos individuales
console.log(numeros[0]);   
console.log(tareas[1]);     

// En JavaScript los strings son inmutables
let text = 'Hola';
// text[0] = 'W'; // Esto no es posible, ya que no se pueden modificar directamente

// Modificar elementos de un arreglo
tareas[0] = 'ir a la playa';
console.log(tareas);

tareas[0] = 'lavar los platos';
console.log(tareas);

// "Slicing" de arreglos (obtener una porción del arreglo)
// En Python: numeros[:3]
// En JavaScript usamos slice(inicio, fin) sin incluir el índice "fin":
console.log(numeros.slice(0, 3));

// Verificar si un valor se encuentra en el arreglo
console.log(tipos.includes(true));   // true si "true" está en el arreglo "tipos"
console.log(tipos.includes('hola'));   // true si "hola" está en el arreglo "tipos"

// Ejemplo práctico con frutas:
let frutas = []; // Declaración de un arreglo vacío
frutas = ['cereza', 'piña', 'mandarina']; // Inicializando el arreglo con 3 elementos
console.log(frutas);

frutas[1] = 'mango';
console.log(frutas);

frutas[2] = 'fresa';
console.log(frutas);

frutas.push('kiwi'); // Agregar un valor al final del arreglo
console.log(frutas);

frutas.pop(); // Eliminar el último valor agregado
console.log(frutas);

// Recorrer el arreglo usando "for...of"
for (let fruta of frutas) {
  console.log(`Fruta: ${fruta}`);
}
