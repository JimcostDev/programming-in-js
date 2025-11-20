// Definir el texto y mostrarlo
let texto = 'Ya se programar en JavaScript';
console.log(texto);

// Verificar si 'JavaScript' está en el texto
if (texto.includes('JavaScript')) {
  console.log('JavaScript es un lenguaje genial!!');
} else {
  console.log('Haz elegido otro lenguaje, esta bien');
}

// Obtener y mostrar el tamaño del texto
let size = texto.length;
console.log(size);

// Mostrar el texto en mayúsculas y minúsculas
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// Contar cuántas veces aparece la letra "a"
console.log(`En el texto aparece ${texto.split('a').length - 1} veces la letra a`);

// Simular swapcase: cambiar mayúsculas por minúsculas y viceversa
console.log(
  texto
    .split('')
    .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join('')
);

// Verificar inicio y fin del texto
console.log(texto.startsWith('Ya'));  // true si inicia con "Ya"
console.log(texto.endsWith('C#'));      // false ya que termina en "JavaScript"

// Reemplazar "JavaScript" por "Go"
console.log(texto.replace('JavaScript', 'Go'));

let texto_2 = 'este es un titulo';
console.log(texto_2);

// Capitalize: primera letra en mayúscula y el resto en minúscula
console.log(texto_2.charAt(0).toUpperCase() + texto_2.slice(1).toLowerCase());

// Title case: cada palabra con la primera letra en mayúscula
console.log(
  texto_2
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
);

// Verificar si el texto contiene solo dígitos
console.log(/^\d+$/.test(texto_2)); // false
console.log(/^\d+$/.test("12"));    // true
