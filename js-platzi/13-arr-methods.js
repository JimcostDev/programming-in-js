var articulos = [
    { nombre: 'Bici', costo: 300 },
    { nombre: 'TV', costo: 250 },
    { nombre: 'Libro', costo: 32 },
    { nombre: 'Celular', costo: 1000 },
    { nombre: 'laptop', costo: 2000 },
    { nombre: 'laptop', costo: 4200 },
    { nombre: 'teclado', costo: 50 },
    { nombre: 'audifonos', costo: 170 }
]


// Metodos para recorrer arrays 


//  Metodo Filter  
// filter que crea un arreglo con todos los valores que cumplen una condición, en el caso de .find solo extraerá el valor del primero que cumpla la condición
// Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */
console.log('Filter:');
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500  /* Menor o igual a 100 */ 
});
console.log(articulosFiltrados);
var encuentraArticulosConFilter = articulos.filter(function(articulo){
    return articulo.nombre === 'laptop';
});
console.log(encuentraArticulosConFilter);
console.log();


//  Metodo Map 
console.log('Map:');
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre   /*retorna un array solo con los nombres*/
});
console.log(nombreArticulos);
console.log();


 //  Metodo Find
 // encontrará el primer elemento del arreglo que cumpla la condición y retornará ese valor
 // De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */
console.log('Find:');
var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});
console.log(encuentraArticulos);
console.log();


//  Metodo forEach
console.log('forEach:');
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
console.log();

// Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */
console.log('Some:');
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos); 
console.log();


//  Metodo Every
/* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */
console.log('Every:');
var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos); 
// Otro ejemplo
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(function(element) {
	return element > 0;
});
console.log(allPositive);
console.log();


//   Metodo Reduce
/* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */
console.log('Reduce:');
var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual
console.log(costoTotal); 
console.log();

//  Metodo Includes
console.log('Includes:');
var numeros = [1, 2, 3, 4, 5, 6];
var incluyeNumero = numeros.includes(2); 
console.log(incluyeNumero);

