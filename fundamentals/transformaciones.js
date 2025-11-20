// Declaración y cambio de tipo de una variable
let nombre = "Ronaldo";
console.log(typeof nombre); 

nombre = 12;
console.log(typeof nombre); 

nombre = true;
console.log(typeof nombre); 

// Concatenación de cadenas y operaciones aritméticas
console.log("Ronaldo" + " Jimenez"); 
console.log(10 + 20); 
console.log("Ronaldo" + "12"); 

// Conversión de número a cadena para concatenación
let edad = 12; // Tipo number
console.log("Mi edad es " + String(edad)); 

// Uso de plantillas literales (template literals) para formatear cadenas
console.log(`Mi edad es ${edad}`); 

// Lectura de datos del usuario y conversión de tipos
let edadUsuario = '25'//prompt('Escribe tu edad => '); // prompt devuelve una cadena
console.log(typeof edadUsuario); 

edadUsuario = parseInt(edadUsuario, 10); // Convertir cadena a número entero
console.log(typeof edadUsuario); 

edadUsuario += 10; // Incrementar la edad en 10
console.log(`Tu edad en 10 años será: ${edadUsuario}`); 
