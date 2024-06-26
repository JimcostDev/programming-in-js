
// La frase "use strict"; debe colocarse al principio del código. 
// Hará que el intérprete se ocupe del resto del código utilizando 
// el modo estricto, que es el estándar moderno de JavaScript. 


// Esta sentencia ha cambiado radicalmente el comportamiento del intérprete. 
// ¿Por qué? Lo usamos cuando queremos obligar al intérprete a comportarse 
// de acuerdo con los estándares modernos de JavaScript.

"use strict";

height = 180; // -> Uncaught ReferenceError: height is not defined
console.log(height);