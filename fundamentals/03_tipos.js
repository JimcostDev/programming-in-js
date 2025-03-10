// Algoritmo que muestra el tipo de dato de una variable.

// Variable para almacenar diferentes tipos de datos
let variable = 8;
let tipoDato = typeof variable;

if (tipoDato === 'number') {
  if (Number.isInteger(variable)) {
    console.log('La variable es un número de tipo: entero');
  } else {
    console.log('La variable es un número de tipo: float');
  }
} else if (tipoDato === 'string') {
  console.log('La variable es de tipo: cadena');
} else if (tipoDato === 'boolean') {
  console.log('La variable es de tipo: booleana');
} else if (Array.isArray(variable)) {
  console.log('La variable es de tipo: lista');
} else if (tipoDato === 'object') {
  console.log('La variable es de tipo: diccionario');
} else {
  console.log('Tipo de dato no reconocido');
}
