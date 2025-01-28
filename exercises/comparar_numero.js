// En este desafío vas a recibir un parámetro en la función solution. 
// Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual.

/* 

    // Input
    solution(1)
    solution(5)
    solution(10)

    // Output
    false
    false
    true 
*/

// solucion # 1
function solution_1(secreto) {
  if (secreto > 5) {
    return true
  }
  return false
}

console.log(solution_1(1))
console.log(solution_1(5))
console.log(solution_1(10))

// solucion # 2
function solution_2(secreto) {
  return !(secreto <= 5)
}
console.log(solution_2(1))
console.log(solution_2(5))
console.log(solution_2(10))