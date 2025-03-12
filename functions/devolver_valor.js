function obtenerEdad(anioNacimiento) {
    const anioActual = 2025;  // Año actual
    return anioActual - anioNacimiento;  // Calcula la edad
  }
  
  let edad = obtenerEdad(1999);
  console.log("Tu edad es: " + edad);  // Salida: Tu edad es: 26
  