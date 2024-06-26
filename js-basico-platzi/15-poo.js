/*La programación orientada a objetos (POO) es un paradigma de programación que se enfoca en el uso de 
objetos para representar conceptos del mundo real y manipular datos. JavaScript es un lenguaje 
orientado a objetos basado en prototipos, lo que significa que los objetos en JavaScript tienen 
una relación de prototipo entre ellos, en lugar de tener una relación de clase como en lenguajes 
como Java o C#.*/

class Animal {
    constructor(especie) {
        this.especie = especie;
    }
    respirar() {
        console.log("Respirando...");
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("Guau!");
    }
}

const perro = new Perro("Canino");
console.log(perro.especie); // Output: "Canino"
perro.respirar(); // Output: "Respirando..."
perro.ladrar(); // Output: "Guau!"