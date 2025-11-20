// Map fue introducido en ES6. A diferencia de un Object tradicional, un Map:
// - Permite claves de cualquier tipo (no solo strings o symbols)
// - Mantiene el orden de inserción
// - Tiene un mejor rendimiento para muchas operaciones de búsqueda
// - Tiene métodos propios como set(), get(), delete(), has()
// - El tamaño se obtiene con size en vez de length u otras funciones

// Crear un Map en JavaScript (equivalente a un diccionario en Python)
const persona = new Map([
  ["ID", "1234"],
  ["nombre", "Ronaldo"],
  ["apellido", "Jiménez"],
  ["edad", 25],
  ["lenguajes", ["Python", "Javascript", "Go"]],
]);

console.log(persona);
console.log();

// Actualizar valores
persona.set("nombre", "jimcostdev");
persona.set("edad", persona.get("edad") + 5);

// Agregar nuevo lenguaje
persona.get("lenguajes").push("Rust");

console.log(persona);
console.log();

// Eliminar un valor
persona.delete("apellido");

// Obtener las claves y valores
console.log("items:");
console.log([...persona.entries()]); // Similar a items() en Python
console.log(typeof [...persona.entries()]);
console.log();

console.log("keys:");
console.log([...persona.keys()]); // Similar a keys() en Python
console.log(typeof [...persona.keys()]);
console.log();

console.log("values:");
console.log([...persona.values()]); // Similar a values() en Python
console.log(typeof [...persona.values()]);
console.log();

// Recorrer el Map con forEach
persona.forEach((valor, clave) => {
  console.log(`clave: ${clave}, valor: ${valor}`);
});
