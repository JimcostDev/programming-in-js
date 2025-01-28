
// simular un ejercicio de potenciacón matematica
let base = 2;
let exponente = 8;
let resultado = 1;

// for (i = 0; i < exponente; i++)
//     resultado = resultado * base
// console.log(`el resultado es: ${resultado}`)

let i = 0;
while (i < exponente){
    resultado = resultado * base
    i++
}
console.log(`el resultado es: ${resultado}`)


let otra_forma = Math.pow(base, exponente);
console.log(`el resultado con Math.pow: ${otra_forma}`)