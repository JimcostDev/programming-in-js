// CRUD: Create, Read, Update & Delete en arreglos

// Crear y leer elementos
let numeros = [1, 2, 3, 4, 5];
console.log(numeros[1]); // Imprime el segundo elemento (2)

// Actualizar el último elemento (equivalente a numeros[-1] en Python)
numeros[numeros.length - 1] = 10;
console.log(numeros); // [1, 2, 3, 4, 10]

// Agregar valores al final usando push (equivalente a append)
numeros.push(700);
console.log(numeros); // [1, 2, 3, 4, 10, 700]

// Insertar un valor en un índice específico (equivalente a insert)
numeros.splice(3, 0, 'hola'); // Inserta 'hola' en el índice 3
console.log(numeros);

// Concatenar o unir arreglos
let tareas = ['tarea 1', 'tarea 2', 'tarea 3'];
let nueva_lista = numeros.concat(tareas);
console.log(nueva_lista);

// Buscar el índice de un elemento (equivalente a index)
let indice = nueva_lista.indexOf('tarea 3');
console.log(indice);

// Actualizar el elemento encontrado
nueva_lista[indice] = 'tarea nueva 3';
console.log(nueva_lista);

// Eliminar valores
// Remover por valor: encontrar el índice y usar splice
let idx = nueva_lista.indexOf('tarea 1');
if (idx !== -1) {
  nueva_lista.splice(idx, 1);
}
console.log(nueva_lista);

// Eliminar el último elemento con pop
nueva_lista.pop();
console.log(nueva_lista);

// Eliminar el primer elemento (índice 0) usando splice
nueva_lista.splice(0, 1);
console.log(nueva_lista);

// Invertir el arreglo
nueva_lista.reverse();
console.log(nueva_lista);

// Ordenar arreglos
let numeros_a = [1, 4, 6, 3];
// Para números, se debe pasar una función de comparación
numeros_a.sort((a, b) => a - b);
console.log(numeros_a);

let strings = ['re', 'ab', 'ed'];
strings.sort(); // Ordena alfabéticamente
console.log(strings);

