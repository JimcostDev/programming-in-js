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

// forma dinamica de hacerlo, leer varios números
function readNumber(key) {
    let numeroUsuario = parseInt(prompt(`Ingrese el ${key} número: `));
    return numeroUsuario;
}

// encontrar el número mayor
function numeroMayor(numeros) {
    let mayor = numeros[0];
    for (let x of numeros) {
        if (x > mayor) {
            mayor = x;
        }
    }
    return mayor;
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

    // forma dinámica
    console.log("Forma dinámica");5
    let primerNumero = readNumber("primer");
    let segundoNumero = readNumber("segundo");
    let tercerNumero = readNumber("tercer");
    let cuartoNumero = readNumber("cuarto");
    let quintoNumero = readNumber("quinto");
    let numeros = [primerNumero, segundoNumero, tercerNumero, cuartoNumero, quintoNumero];
    let resultado = numeroMayor(numeros);
    console.log(`El número mayor es (forma dinámica): ${resultado}`);
}

run();
