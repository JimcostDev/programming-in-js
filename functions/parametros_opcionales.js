function saludar(nombre = "Invitado") {
  console.log("¡Hola, " + nombre + "!");
}

function describirPersona(nombre = "Desconocido", edad = 0) {
  console.log("Nombre: " + nombre + ", Edad: " + edad);
}

// Llamada a la función sin argumento
saludar(); 

// Llamada a la función con argumento
saludar("Juan"); 

describirPersona("Carlos", 30); 
describirPersona(); 
