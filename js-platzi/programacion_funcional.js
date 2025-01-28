function suma(a,b){
    return a + b;
  }
  
  function resta(a,b){
    return a - b;
  }
  
  function mult(a,b){
    return a * b;
  }
  
  // EJECUCIÓN
  let operacion = suma;
  function hacerOperacion(operacion, num1, num2){
    return operacion(num1, num2);
  }
  
  console.log(hacerOperacion(operacion, 3, 5));

  /* En resumen, la programación funcional es un enfoque de programación que se centra en el uso de funciones 
  y evita el uso de estado y efectos secundarios. En javascript, se puede utilizar programación funcional 
  mediante el uso de funciones como map, reduce, filter, arrow functions y librerías de programación 
  funcional pura, lo cual permite crear código más fácil de probar y depurar.*/

const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function(number) {
  return number * 2;
});
console.log(doubles); // [2, 4, 6, 8, 10]

// OTRO EJEMPLO
const arr = [1, 2, 3, 4, 5]; 
const result = arr.map(num => num * 2).filter(num => num > 5); 
console.log(result);