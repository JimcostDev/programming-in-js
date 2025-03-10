// Declaración y cambio de tipo de una variable
let nombre = "Ronaldo";
console.log(typeof nombre); // Salida: 'string'

nombre = 12;
console.log(typeof nombre); // Salida: 'number'

nombre = true;
console.log(typeof nombre); // Salida: 'boolean'

// Concatenación de cadenas y operaciones aritméticas
console.log("Ronaldo" + " Jimenez"); // Salida: 'Ronaldo Jimenez'
console.log(10 + 20); // Salida: 30
console.log("Ronaldo" + "12"); // Salida: 'Ronaldo12'

// Conversión de número a cadena para concatenación
let edad = 12; // Tipo number
console.log("Mi edad es " + String(edad)); // Salida: 'Mi edad es 12'

// Uso de plantillas literales (template literals) para formatear cadenas
console.log(`Mi edad es ${edad}`); // Salida: 'Mi edad es 12'

// Lectura de datos del usuario y conversión de tipos
let edadUsuario = '25'//prompt('Escribe tu edad => '); // prompt devuelve una cadena
console.log(typeof edadUsuario); // Salida: 'string'

edadUsuario = parseInt(edadUsuario, 10); // Convertir cadena a número entero
console.log(typeof edadUsuario); // Salida: 'number'

edadUsuario += 10; // Incrementar la edad en 10
console.log(`Tu edad en 10 años será: ${edadUsuario}`); // Salida: 'Tu edad en 10 años será: X'
