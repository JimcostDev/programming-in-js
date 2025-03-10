const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funciones para calcular áreas
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaRectangulo(base, altura) {
    return base * altura;
}

function areaCuadrado(lado) {
    return lado * lado;
}

function areaCirculo(radio) {
    return Math.PI * radio * radio;
}

// Función principal
function calcularArea() {
    console.log("Calculadora de áreas:");
    console.log("1. Triángulo");
    console.log("2. Rectángulo");
    console.log("3. Cuadrado");
    console.log("4. Círculo");

    rl.question("Elige una opción (1-4): ", (opcion) => {
        opcion = parseInt(opcion);

        // Si la opción requiere base y altura, pedirlas primero
        if (opcion === 1 || opcion === 2) {
            rl.question("Ingresa la base: ", (base) => {
                rl.question("Ingresa la altura: ", (altura) => {
                    base = parseFloat(base);
                    altura = parseFloat(altura);

                    let area = opcion === 1 ? areaTriangulo(base, altura) : areaRectangulo(base, altura);
                    console.log(`El área es: ${area}`);
                    rl.close();
                });
            });
        } else {
            rl.question("Ingresa el valor necesario (lado o radio): ", (valor) => {
                valor = parseFloat(valor);

                switch (opcion) {
                    case 3:
                        console.log(`El área del cuadrado es: ${areaCuadrado(valor)}`);
                        break;
                    case 4:
                        console.log(`El área del círculo es: ${areaCirculo(valor).toFixed(2)}`);
                        break;
                    default:
                        console.log("Opción no válida.");
                        break;
                }
                rl.close();
            });
        }
    });
}

// Ejecutar la función
calcularArea();
