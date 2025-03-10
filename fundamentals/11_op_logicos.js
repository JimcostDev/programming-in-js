// ---------- AND ------------
console.log('AND'); // Multiplicación lógica
console.log('True && True =>', true && true);   // true
console.log('True && False =>', true && false); // false
console.log('False && True =>', false && true); // false
console.log('False && False =>', false && false); // false

console.log(10 > 5 && 5 < 10); // true
console.log(10 > 5 && 5 > 10); // false

let stock = '45'// prompt('Ingrese el número de stock => ');
stock = parseInt(stock);

console.log(stock >= 100 && stock <= 1000); // true si está en el rango

// ---------- OR ------------
console.log('OR'); // Suma lógica
console.log('True || True =>', true || true);   // true
console.log('True || False =>', true || false); // true
console.log('False || True =>', false || true); // true
console.log('False || False =>', false || false); // false

let role = 'vendedor' // prompt('Digita el rol => ');
console.log(role === 'admin' || role === 'vendedor'); // true si es admin o vendedor

// ---------- NOT ------------
console.log('NOT'); // Negación lógica
console.log('!True =>', !true);   // false
console.log('!False =>', !false); // true

