const prompt = require("prompt-sync")();

// Determinar el número mayor entre 3 números
function findLargestNumber(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else if (num3 >= num1 && num3 >= num2) {
    return num3;
  }
}
// función para correr el programa
function run(){
    const num1 = parseInt(prompt("Ingrese el primer número: "));
    const num2 = parseInt(prompt("Ingrese el segundo número: "));
    const num3 = parseInt(prompt("Ingrese el tercer número: "));
    const mayor = findLargestNumber(num1, num2, num3);
    console.log(`El número mayor es: ${mayor}`);

    // otra forma de hacerlo con la función max
    const mayor2 = Math.max(num1, num2, num3);
    console.log(`Usando la función max: ${mayor2}`);
}

run();
