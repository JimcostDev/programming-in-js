// Variables
let nombre = 'Ronaldo';
let apellido = 'Jimenez Acosta';
let telefono = '1326753768';

// Concatenar strings
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto); // Salida: Ronaldo Jimenez Acosta

// Diferentes usos de las comillas
let presentacion = `
                I'm from Colombia and 
                I'm a software developer, 
                I am 25 years old.
                `;
console.log(presentacion);

let cita = 'Él dijo: "Hola"';
console.log(cita); // Salida: Él dijo: "Hola"

// Formateo
let informacion = 'Soy: ' + nombre + ' ' + apellido + ', mi número de teléfono es: ' + telefono;
console.log(informacion); // Salida: Soy: Ronaldo Jimenez Acosta, mi número de teléfono es: 1326753768

informacion = `Soy: ${nombre} ${apellido}, mi número de teléfono es: ${telefono}`;
console.log(informacion); // Salida: Soy: Ronaldo Jimenez Acosta, mi número de teléfono es: 1326753768
