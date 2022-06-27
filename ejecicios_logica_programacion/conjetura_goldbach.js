/*
---- CONJETURA DE GOLDBACH ----
Todo número par mayor que 2 se puede expresar como suma de dos números primos.
Para el número 14 tendríamos: 3 y 11, 7 y 7
(1 y 13 no valdrian, ya que el uno no es considerado un primo)
Hacer un programa que muestre todas las parejas de primos en las que se puede
expresar un número par mayor que 2.
*/

let numero = 100

// funcion que determina si un número es primo
const esPrimo = (num) => {
    if (num < 2){
        return false
    }
    //se excluye el  1 y el mismo numero
    for (i = 2; i < num; i++) {
        if (num % i == 0){
            return false // no es primo
        }
    }
    return true //es primo  
}

// condición para verificar que el numero sea par y mayor que 2
if (numero % 2 == 0 && numero > 2){
    let encontrado = false
    for (a = 2; a < numero; a++){
        //se toma numero(14) y se le resta el primer numero primo a(3) y si el resultado b(11) es un numero primo, se forma una pareja (a,b) y asi hasta terminar el ciclo.
        if(esPrimo(a)){
            b = numero - a;
            if (esPrimo(b)){
                encontrado = true; 
                //condición para evitar que se repitan las parejas
                if (a <= b){ 
                    console.log(`parejas de números primos: ${a}, ${b} `);
                }
            }
        }
    }
    if (!encontrado){
        console.log(`No se ha encontrado ninguna pareja para el número: ${numero}`);
    }
}
else{
    console.log('No es un número valido: ' + numero)
}




