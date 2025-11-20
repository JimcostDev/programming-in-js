let text = "Ella sabe JS";

// Acceder a caracteres individuales:
console.log("Primer carácter:", text[0]);       
console.log("Carácter en la posición 10:", text[10]); 

// Tamaño del string:
let size = text.length;
console.log("Tamaño del string:", size);

// Último carácter (usando la propiedad length):
console.log("Último carácter:", text.charAt(size - 1)); 

// Slicing básico:
// Extraer desde el índice 0 hasta el 5 (sin incluir el 5)
console.log("text.slice(0, 5):", text.slice(0, 5));

// Extraer desde el inicio hasta el índice 10 (sin incluir el 10)
console.log("text.slice(0, 10):", text.slice(0, 10));

// Extraer desde el índice 5 hasta el penúltimo carácter
console.log("text.slice(5, -1):", text.slice(5, -1));

// Extraer desde el índice 5 hasta el final
console.log("text.slice(5):", text.slice(5));

// Extraer todo el string (copia completa)
console.log("text.slice(0):", text.slice(0));

// Invertir el string (equivalente a text[::-1] en JS)
console.log("Texto al revés:", text.split('').reverse().join(''));
