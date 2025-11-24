// Objeto en JavaScript (equivalente a un diccionario en Python)
const persona = {
  ID: "1234",
  nombre: "Ronaldo",
  apellido: "Jiménez",
  edad: 25,
  lenguajes: ["Python", "Javascript", "Go"],
};

console.log(persona);
console.log();

// Actualizar valores
persona.nombre = "jimcostdev";
persona.edad += 5;
persona.lenguajes.push("Rust"); // Agregar nuevo lenguaje
console.log(persona);
console.log();

// Eliminar un valor
delete persona.apellido;

// Obtener las claves y valores
console.log("items:");
console.log(Object.entries(persona)); // Equivalente a items() en Python
console.log(typeof Object.entries(persona));
console.log();

console.log("keys:");
console.log(Object.keys(persona)); // Equivalente a keys() en Python
console.log(typeof Object.keys(persona));
console.log();

console.log("values:");
console.log(Object.values(persona)); // Equivalente a values() en Python
console.log(typeof Object.values(persona));
console.log();

// Recorrer el objeto con forEach
console.log("Recorriendo con forEach:");
Object.entries(persona).forEach(([clave, valor]) => {
  console.log(`clave: ${clave}, valor: ${valor}`);
});
console.log();

// for of
console.log("Recorriendo con for of:");
for (const [clave, valor] of Object.entries(persona)) {
  console.log(`${clave}: ${valor}`);
}
console.log();

// for in
console.log("Recorriendo con for in:");
for (const idx in persona) {
  console.log(`${idx}: ${persona[idx]}`);
}

// Diferencias entre Object.keys() y Object.getOwnPropertyNames()
console.log();
console.log("Diferencia entre Object.keys() y Object.getOwnPropertyNames():");
const ejemplo = { a: 1, b: 2 };
// Creamos una propiedad NO ENUMERABLE
Object.defineProperty(ejemplo, "oculta", {
  value: 999,
  enumerable: false
});
console.log("Object.keys(ejemplo):", Object.keys(ejemplo));
console.log("Object.getOwnPropertyNames(ejemplo):", Object.getOwnPropertyNames(ejemplo)); 