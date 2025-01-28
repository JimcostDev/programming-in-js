// Calcula el Índice de Masa Corporal (IMC)
function calcularIMC(peso, estatura) {
    return peso / (estatura ** 2);
}

// Clasifica el IMC según la OMS
function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc < 25) {
        return "Normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidad tipo I";
    } else if (imc < 40) {
        return "Obesidad tipo II";
    } else {
        return "Obesidad tipo III";
    }
}

// Calcular peso máximo dentro del rango de IMC normal
function calcularPesoMaximo(estatura) {
    return 24.9 * (estatura ** 2);
}

// Calcular peso mínimo dentro del rango de IMC normal
function calcularPesoMinimo(estatura) {
    return 18.5 * (estatura ** 2);
}

// Mostrar peso máximo y mínimo dentro del rango de IMC normal
function mostrarPesoNormal(estatura) {
    const pesoMinimo = calcularPesoMinimo(estatura);
    const pesoMaximo = calcularPesoMaximo(estatura);
    return `El peso normal para una estatura de ${estatura} m debe estar entre ${pesoMinimo.toFixed(2)} y ${pesoMaximo.toFixed(2)} kg`;
}

// Mostrar resultados del IMC
function mostrarResultadosIMC(imc, clasificacion) {
    return `El IMC es ${imc.toFixed(2)} y se clasifica como ${clasificacion}`;
}

// Función principal para interactuar con el usuario
function IMC() {
    const peso = parseFloat(prompt("Ingrese el peso en kg (por ejemplo, 70.3): "));
    const estatura = parseFloat(prompt("Ingrese la estatura en metros (por ejemplo, 1.84): "));

    // Calcular IMC y clasificarlo
    const imc = calcularIMC(peso, estatura);
    const clasificacion = clasificarIMC(imc);

    // Mostrar resultados
    console.log(mostrarResultadosIMC(imc, clasificacion));
    console.log(mostrarPesoNormal(estatura));
}

// Llamar a la función principal
IMC();
