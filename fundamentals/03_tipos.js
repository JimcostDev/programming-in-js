// ============================================
// DETECTOR DE TIPOS DE DATOS - VERSIÓN SIMPLE
// ============================================

// Variable de prueba (puedes cambiar el valor aquí)
let variable = [1, 2, 3];

console.log('Analizando la variable:', variable);
console.log('-----------------------------------');

// Obtener el tipo de dato
let tipoDato = typeof variable;

// ============================================
// PARTE 1: TIPOS PRIMITIVOS
// ============================================
// Los primitivos son los tipos de datos más básicos

if (tipoDato === 'number') {
  // Es un número
  if (Number.isInteger(variable)) {
    console.log('✅ PRIMITIVO: Número entero');
  } else {
    console.log('✅ PRIMITIVO: Número decimal');
  }

} else if (tipoDato === 'string') {
  // Es un texto
  console.log('✅ PRIMITIVO: Texto (string)');

} else if (tipoDato === 'boolean') {
  // Es verdadero o falso
  console.log('✅ PRIMITIVO: Booleano (true/false)');

} else if (tipoDato === 'symbol') {
  // Es un identificador único
  console.log('✅ PRIMITIVO: Símbolo único');

} else if (tipoDato === 'undefined') {
  // No tiene valor asignado
  console.log('✅ PRIMITIVO: Indefinido (undefined)');

// ============================================
// PARTE 2: TIPOS OBJETO
// ============================================
// Los objetos son estructuras más complejas

} else if (variable === null) {
  // null es un caso especial
  console.log('🔷 OBJETO: null (sin valor)');

} else if (Array.isArray(variable)) {
  // Es una lista de elementos
  console.log('🔷 OBJETO: Array (lista)');

} else if (tipoDato === 'object') {
  // Es un objeto normal (diccionario)
  console.log('🔷 OBJETO: Object (diccionario)');

} else {
  console.log('❌ Tipo no reconocido');
}

console.log('-----------------------------------');

// ============================================
// EJEMPLOS PARA PRACTICAR
// ============================================
console.log('\n📚 EJEMPLOS DE TIPOS PRIMITIVOS:');
console.log('-----------------------------------');

// Números
let numero1 = 42;
console.log(numero1, '→', typeof numero1, '(entero)');

let numero2 = 3.14;
console.log(numero2, '→', typeof numero2, '(decimal)');

// Texto
let texto = 'Hola mundo';
console.log(texto, '→', typeof texto);

// Booleano
let verdadero = true;
console.log(verdadero, '→', typeof verdadero);

// Símbolo (identificador único)
let simbolo = Symbol('id');
console.log(simbolo.toString(), '→', typeof simbolo);

// Undefined
let sinValor;
console.log(sinValor, '→', typeof sinValor);

console.log('\n📦 EJEMPLOS DE TIPOS OBJETO:');
console.log('-----------------------------------');

// Array (lista)
let lista = [1, 2, 3];
console.log(lista, '→ Array');

// Object (diccionario)
let persona = { nombre: 'Ana', edad: 25 };
console.log(persona, '→ Object');

// null
let vacio = null;
console.log(vacio, '→ null');

console.log('\n💡 RESUMEN:');
console.log('-----------------------------------');
console.log('PRIMITIVOS: number, string, boolean, symbol, undefined');
console.log('OBJETOS: Array, Object, null, Date, etc.');