// Algoritmo que muestra el tipo de dato de una variable.

// Variable para almacenar diferentes tipos de datos
let variable = [1, 2, 3]; 
let tipoDato = typeof variable;

if (tipoDato === 'number') {
  if (Number.isInteger(variable)) {
    console.log(`La variable es un número de tipo: entero (${tipoDato}) `);
  } else {
    console.log(`La variable es un número de tipo: float (${tipoDato})`);
  }
} else if (tipoDato === 'string') {
  console.log(`La variable es de tipo: cadena (${tipoDato})`);
} else if (tipoDato === 'boolean') {
  console.log(`La variable es de tipo: booleana (${tipoDato})`);
} else if (Array.isArray(variable)) {
  console.log(`La variable es de tipo: lista (${tipoDato})`);
} else if (tipoDato === 'object') {
  console.log(`La variable es de tipo: diccionario (${tipoDato})`);
} else {
  console.log('Tipo de dato no reconocido');
}
