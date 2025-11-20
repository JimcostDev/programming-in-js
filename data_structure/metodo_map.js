// map() se usa para transformar los elementos de un arreglo
// y devolver un nuevo arreglo con los elementos transformados
// por ejemplo, duplicar los valores de una lista de números

// Usando un ciclo for para llenar una lista con los números multiplicados por 2
numeros = [1, 2, 3, 4, 5];
for (let x of numeros) {
    console.log(x * 2);
}

// Usamos el método map para multiplicar cada número por 2
let numerosMultiplicados = numeros.map(function(num) {
    return num * 2;
  });
console.log(numerosMultiplicados); 
  
// Usando una función flecha para hacerlo más conciso
let numerosMultiplicadosFlecha = numeros.map(num => num * 2);
console.log(numerosMultiplicadosFlecha); 

// Crear una nueva lista con 'Par' o 'No par' dependiendo del número
let numerosParImpar = numeros.map(num => (num % 2 === 0 ? "Par" : "Impar"));
console.log(numerosParImpar);
