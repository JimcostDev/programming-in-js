// CRUD: Create, Read, Update & Delete en arreglos

// Crear y leer elementos
let teams = ['colombia', 'argentina', 'brasil'];
console.log(teams);
console.log(teams[1]); 

// Actualizar el último elemento (equivalente a teams[-1] en Python)
let ultimo = teams.length - 1;
teams[ultimo] = 'uruguay';
console.log(teams); 

// Agregar valores al final usando push (equivalente a append)
teams.push('españa');
console.log(teams); 

// Agregar valores al inicio usando unshift
teams.unshift('portugal');
console.log(teams);

// Insertar un valor en un índice específico (equivalente a insert)
teams.splice(2, 0, 'francia'); // en el índice 2, eliminar 0 elementos, agregar 'francia'
console.log(teams);

// Concatenar o unir arreglos
let players = ['james', 'ronaldo', 'messi'];
let nueva_lista = teams.concat(players);
console.log(nueva_lista);

// Buscar el índice de un elemento (equivalente a index)
let indice = nueva_lista.indexOf('messi');
console.log(indice);

// Actualizar el elemento encontrado
nueva_lista[indice] = 'haaland';
console.log(nueva_lista);

// Eliminar valores
// Remover por valor: encontrar el índice y usar splice
let idx = nueva_lista.indexOf('francia');
if (idx !== -1) { // -1 significa que el elemento fue encontrado
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
let numeros = [1, 4, 6, 3];
// Para números, se debe pasar una función de comparación
numeros.sort((a, b) => a - b);
console.log(numeros);

let strings = ['re', 'ab', 'ed'];
strings.sort(); // Ordena alfabéticamente
console.log(strings);

// forEach para iterar sobre los elementos
let frutas = ['manzana', 'banana', 'cereza'];
frutas.forEach((fruta, indice, arreglo) => {
  console.log(`Fruta: ${fruta}, Índice: ${indice}, Arreglo: ${arreglo.join(', ')}`);
});

