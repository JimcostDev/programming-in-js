// Para entornos de Node.js podemos usasr prompt-sync o readline
const prompt = require('prompt-sync')({ sigint: true }); // sigint permite interrumpir con Ctrl+C
const nombre = prompt("¿Cuál es tu nombre? ");
console.log(`Hola, ${nombre}!`);

// Para entornos de navegador (web)
// const nombre = prompt("¿Cuál es tu nombre?");
// console.log(`Hola, ${nombre}!`);
