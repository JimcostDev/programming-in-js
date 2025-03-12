// Primero necesitas instalar prompt-sync con: npm install prompt-sync
// Luego puedes usarlo así:

// Importar la biblioteca
const prompt = require('prompt-sync')({ sigint: true });

// Ejemplo básico: solicitar el nombre al usuario
const nombre = prompt('¿Cómo te llamas? ');
console.log(`¡Hola, ${nombre}!`);

// Ejemplo para leer un número
const edad = prompt('¿Cuántos años tienes? ');
const edadNumero = parseInt(edad);
console.log(`Tienes ${edadNumero} años, así que naciste aproximadamente en ${2025 - edadNumero}`);

// Ejemplo con validación simple
let numeroPositivo;
do {
  numeroPositivo = parseInt(prompt('Por favor, ingresa un número positivo: '));
  if (isNaN(numeroPositivo) || numeroPositivo <= 0) {
    console.log('¡Error! Debes ingresar un número positivo.');
  }
} while (isNaN(numeroPositivo) || numeroPositivo <= 0);

console.log(`¡Gracias! Ingresaste: ${numeroPositivo}`);