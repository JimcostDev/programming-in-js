function saludar(nombre = "Invitado") {
    console.log("¡Hola, " + nombre + "!");
}

function describirPersona(nombre = "Desconocido", edad = 0) {
    console.log("Nombre: " + nombre + ", Edad: " + edad);
}

// Llamada a la función sin argumento
saludar();  // Salida: ¡Hola, Invitado!
  
// Llamada a la función con argumento
saludar("Juan");  // Salida: ¡Hola, Juan!
  
describirPersona("Carlos", 30);  // Salida: Nombre: Carlos, Edad: 30
describirPersona();  // Salida: Nombre: Desconocido, Edad: 0
  

  