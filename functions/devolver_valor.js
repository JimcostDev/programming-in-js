function obtenerEdad(anioNacimiento) {
  const anioActual = 2025; 
  return anioActual - anioNacimiento; 
}

const getAaleatorio = () =>  Math.random(); 
console.log(getAaleatorio());

let edad = obtenerEdad(1999);
console.log("Tu edad es: " + edad); 
