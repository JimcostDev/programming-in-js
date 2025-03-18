const prompt = require('prompt-sync')();
// tines 3 intentos para adivinar un número aleatorio del 0 al 10, suerte.
function getRandom() {
    let num = Math.random()*10; 
    return parseInt(num);
}

// contador de intentos
let intentos = 0;
let numero = getRandom();

while(true){
    let adivina = parseInt(prompt('Escribe un número, solo tienes 3 intentos: '));
    intentos += 1
    if(intentos == 3){
        console.log(` perdiste, el número era: ${numero}`);
        break;
    }
    else if (adivina == numero){
        console.log('Felecidades, adivinaste')
        break;
    }
}

console.log(numero);