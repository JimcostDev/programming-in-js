/**
 * En matemáticas, un número primo es un número natural
    mayor que 1 que tiene únicamente dos divisores 
    positivos distintos: él mismo y la unidad (1) 
    (a exepcion del número 1, este no se considera primo).
 */

// SOLUTION # 1
let number = 15;
let count;
console.log('// SOLUTION # 1')
console.log(`the numbers primes between 2 and ${number} are:`);
for (prime = 1; prime<=number; prime++){
    count = 0
    for (item = 1; item<=prime; item++){
        if (prime%item == 0){
            count++;
        }
    }
    if(count == 2){
        console.log(prime); // print in the screen the numbers primes
    }
}


// SOLUTION # 2
console.log('// SOLUTION # 2')
console.log(`the numbers primes between 2 and ${number} are:`);
for (prime = 1; prime<=number; prime++){
    if(isPrime(prime)){
        console.log(prime);
    }
}

// function what determines if a number is prime
function isPrime (num) {
    if (num < 2){
        return false;
    }
    //1 and same number are excluded
    for (i = 2; i < num; i++) {
        if (num % i == 0){
            return false; //  is not a prime
        }
    }
    return true; //is prime 
}