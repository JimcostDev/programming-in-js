// Función de flecha
// Son una forma más corta de escribir funciones anónimas.
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 3));

// Función de flecha con cuerpo de función
const calcularIMC = (peso, altura) => {
  return peso / (altura * altura);
}

console.log(calcularIMC(70, 1.85));