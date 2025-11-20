//  Esto es un ciclo infinito porque la condición siempre es true
// Se usa cuando no se conoce el número de iteraciones a realizar
// while (true) {
//   console.log('Mientras la condición sea "true" el bloque de código se va a ejecutar');
// }

// Ejemplo 1: Ciclo while con condición
let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++; // Incrementa el contador en 1
}

// Ejemplo práctico: Adivina el número secreto
const numero_secreto = 10;
console.log("------ ADIVINA EL NÚMERO -----");

while (true) {
  // Se pide al usuario que ingrese un número usando prompt()
  let input = prompt("Escribe el número => ");
  // Convertir la entrada a número
  let numeroUser = parseInt(input);

  // Si el número ingresado es igual al número secreto, se rompe el ciclo
  if (numeroUser === numero_secreto) {
    console.log("¡Felicidades! Adivinaste el número secreto");
    break;
  }
}
