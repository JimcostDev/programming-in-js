// for se usa cuando se conoce el número de iteraciones a realizar
// es utilizado para recorrer estructuras de datos como arreglos y objetos

// Iterar del 1 al 10
console.log("Iterando del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Iterar sobre un array
console.log("\nIterar sobre un array: ");
const langs = ["py", "js", "go"];
for (let lang of langs) {
  console.log(lang);
}

// Iterar sobre objetos
console.log("\nIterar sobre un objeto:");
const producto = {
  name: "Camisa",
  price: 100,
  stock: 45,
};

for (let clave in producto) {
  console.log(`${clave} => ${producto[clave]}`);
}

// Lista de personas con lenguajes de programación
console.log("\nIterar sobre una lista de objetos:");
const people = [
  {
    name: "jimcostdev",
    lang: ["py", "go"],
  },
  {
    name: "santafe",
    lang: ["java", "c#"],
  },
  {
    name: "santi",
    lang: ["rust", "go"],
  },
];

for (let person of people) {
  console.log(person);
  console.log("name =>", person.name);
}

// Ejercicio: duplicar los valores de una lista de números
console.log("\nEjercicio: Duplicar valores de una lista:");
const numerosOriginales = [1, 2, 3, 4, 5];
const numerosDuplicados = numerosOriginales.map((num) => num * 2);
console.log(numerosDuplicados);
