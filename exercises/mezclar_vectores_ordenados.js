// Programa para mezclar dos vectores ordenados ascendentemente
// Con vectores predefinidos en el código
// Si ingresas los vectores [1, 3, 6, 9, 17] y [2, 4, 10, 17], 
// el programa te mostrará como resultado: 1 2 3 4 6 9 10 17 17.

function main() {
    console.log("¡Bienvenido al programa de mezcla de vectores ordenados!");
    console.log("---------------------------------------------------------");
    
    // Definimos directamente los vectores ordenados
    const vector1 = [1, 3, 6, 9, 17];
    const vector2 = [2, 40, 10, 17];
    
    // Validamos que los vectores estén ordenados ascendentemente
    if (!estaOrdenado(vector1)) {
      console.log("Error: El primer vector no está ordenado ascendentemente.");
      return;
    }
    
    if (!estaOrdenado(vector2)) {
      console.log("Error: El segundo vector no está ordenado ascendentemente.");
      return;
    }
    
    // Mezclar los vectores
    const vectorMezclado = mezclarVectoresOrdenados(vector1, vector2);
    
    // Mostrar resultados
    console.log("\nResultados:");
    console.log("Primer vector:", vector1.join(" "));
    console.log("Segundo vector:", vector2.join(" "));
    console.log("Vector mezclado:", vectorMezclado.join(" "));
  }
  
  /**
   * Función para verificar si un vector está ordenado ascendentemente
   * @param {number[]} vector - Vector a verificar
   * @return {boolean} - true si está ordenado, false en caso contrario
   */
  function estaOrdenado(vector) {
    for (let i = 1; i < vector.length; i++) {
      if (vector[i] < vector[i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  /**
   * Función para mezclar dos vectores ordenados
   * @param {number[]} vector1 - Primer vector ordenado
   * @param {number[]} vector2 - Segundo vector ordenado
   * @return {number[]} - Vector resultante de la mezcla ordenada
   */
  function mezclarVectoresOrdenados(vector1, vector2) {
    const resultado = [];
    let i = 0; // Índice para vector1
    let j = 0; // Índice para vector2
    
    // Mientras haya elementos en ambos vectores
    while (i < vector1.length && j < vector2.length) {
      if (vector1[i] <= vector2[j]) {
        resultado.push(vector1[i]);
        i++;
      } else {
        resultado.push(vector2[j]);
        j++;
      }
    }
    
    // Agregar elementos restantes del vector1 (si hay)
    while (i < vector1.length) {
      resultado.push(vector1[i]);
      i++;
    }
    
    // Agregar elementos restantes del vector2 (si hay)
    while (j < vector2.length) {
      resultado.push(vector2[j]);
      j++;
    }
    
    return resultado;
  }
  
  // Ejecutar el programa
  main();