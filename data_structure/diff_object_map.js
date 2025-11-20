// ============================================
// DIFERENCIA ENTRE OBJECT Y MAP
// ============================================

console.log('🔍 LA GRAN DIFERENCIA:');
console.log('Object convierte TODO a string');
console.log('Map mantiene el tipo original de las claves\n');

// ============================================
// EJEMPLO 1: USANDO OBJECT (DICCIONARIO)
// ============================================
console.log('📘 USANDO OBJECT:');
console.log('='.repeat(40));

const miObject = {};

// Agregamos diferentes tipos de claves
miObject[1] = "uno";                    // Número como clave
miObject["texto"] = "dos";              // String como clave
miObject[true] = "tres";                // Boolean como clave
miObject[{ nombre: "Juan" }] = "cuatro"; // Objeto como clave

console.log('Contenido del Object:');
console.log(miObject);

console.log('\n🔑 Las claves del Object:');
Object.keys(miObject).forEach(clave => {
  console.log(`  "${clave}" → tipo: ${typeof clave}`);
});

console.log('\n❗ PROBLEMA: Todas las claves se convirtieron a STRING');

// ============================================
// EJEMPLO 2: USANDO MAP
// ============================================
console.log('\n📗 USANDO MAP:');
console.log('='.repeat(40));

const miMap = new Map();

// Agregamos los mismos tipos de claves
miMap.set(1, "uno");                    // Número como clave
miMap.set("texto", "dos");              // String como clave
miMap.set(true, "tres");                // Boolean como clave
miMap.set({ nombre: "Juan" }, "cuatro"); // Objeto como clave

console.log('Contenido del Map:');
console.log(miMap);

console.log('\n🔑 Las claves del Map:');
miMap.forEach((valor, clave) => {
  console.log(`  ${JSON.stringify(clave)} → tipo: ${typeof clave}`);
});

console.log('\n✅ VENTAJA: Cada clave mantiene su tipo original');

// ============================================
// EJEMPLO 3: CASO PRÁCTICO
// ============================================
console.log('\n🎯 CASO PRÁCTICO:');
console.log('='.repeat(40));
console.log('Guardando información de usuarios\n');

// Con Object - problema con objetos como claves
const usuariosObject = {};
const usuario1 = { id: 1, nombre: "Ana" };
const usuario2 = { id: 2, nombre: "Luis" };

usuariosObject[usuario1] = "Datos de Ana";
usuariosObject[usuario2] = "Datos de Luis";

console.log('Object - Intentando usar objetos como claves:');
console.log(usuariosObject);
console.log('❌ Ambos usuarios se guardaron con la misma clave: "[object Object]"');
console.log('Resultado: Solo se guardó el último valor');

// Con Map - funciona correctamente
const usuariosMap = new Map();
usuariosMap.set(usuario1, "Datos de Ana");
usuariosMap.set(usuario2, "Datos de Luis");

console.log('\nMap - Usando objetos como claves:');
console.log(usuariosMap);
console.log('✅ Cada objeto es una clave diferente');
console.log('Resultado: Ambos valores se guardaron correctamente');

// ============================================
// RESUMEN PARA PRINCIPIANTES
// ============================================
console.log('\n' + '='.repeat(40));
console.log('📚 RESUMEN:');
console.log('='.repeat(40));
console.log(`
¿Cuándo usar OBJECT?
  ✓ Claves siempre son strings o números simples
  ✓ Estructuras de datos sencillas
  ✓ Ejemplo: { nombre: "Ana", edad: 25 }

¿Cuándo usar MAP?
  ✓ Necesitas claves de cualquier tipo
  ✓ Claves pueden ser objetos, fechas, etc.
  ✓ Necesitas mantener el tipo original de la clave
  ✓ Ejemplo: usuarios, configuraciones avanzadas
`);