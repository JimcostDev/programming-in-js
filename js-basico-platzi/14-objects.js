// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.
var objecto = {}; // Object Literal Syntax 

var miAuto = {
    // propiedades del objecto
    marca: "Nissan",  // key - value 
    modelo: "Frontier",
    year: 2023,

    // metodos del objecto
    detallesDelAuto: function() {  // (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.year}`;
  }
};

miAuto.year 
miAuto.modelo 

miAuto.detallesDelAuto(); 


// Función constructora 
function auto(marca, modelo, year) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.year = year;
}

var newAuto = new auto("Tesla", "Model 4", 2023);

// También se pueden usar mutable functions para modificar objetos de la misma manera
// Las funciones mutables en JavaScript son aquellas que pueden modificar el estado de los objetos. 
const person = {
	name: 'John Doe',
	age: 30
};

function addProperty(object, key, value) {
	object[key] = value;
}
addProperty(person, 'address', '123 Main St');
console.log(person);