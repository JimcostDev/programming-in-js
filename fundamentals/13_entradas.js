// Para entornos de Node.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("¿Cuál es tu nombre? ", function(nombre) {
  console.log(`Hola, ${nombre}!`);
  rl.close();
});


// Para entornos de navegador (web)
// const nombre = prompt("¿Cuál es tu nombre?");
// console.log(`Hola, ${nombre}!`);
