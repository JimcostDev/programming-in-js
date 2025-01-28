
/* window es el objeto global de JavaScript y 
console deriva directamente de este, por tanto está disponible en cualquier archivo .js

    window.console.log('Hola');
*/

console.log('Hola');
console.warn('Base de datos no respaldada, cuidado!');
console.info('Usuario creado satisfactoriamente');
console.error('No se pudo eliminar el registro');

console.group("Listado de paises");
  console.log("--Listado de paises--");
  console.log("Colombia");
  console.log("Peru");
  console.log("Brasil");
  console.log("Francia");
  console.log("Alemania");
console.groupEnd();

console.table(["apples", "oranges", "bananas"]);
console.log(console); // ver metodos del objeto
//console.clear(); // limpiar la consola