/*En este desafío, debes crear la lógica de la función isLeapYear, que determina si un año es bisiesto o no. Un año es bisiesto si cumple con las siguientes condiciones:

Es divisible por 4, pero no por 100.
Es divisible por 100 y por 400.
La función isLeapYear recibe un único parámetro: el año a evaluar. Debe devolver true si el año es bisiesto o false en caso contrario.

Toma en cuenta que la función debe ser capaz de manejar valores no enteros o negativos.

Ejemplo 1:

    Input: 2000;
    Output: true;

Ejemplo 2:

    Input: -2024;
    Output: false;

Ejemplo 3:

    Input: 1984.25;
    Output: false;

*/


function isLeapYear(year) {
    //validar que el numero sea positivo y entero
    if(year >=0 && year % 1 === 0){
        if (year % 4 === 0 && year % 100 != 0) {
            return true;
          }
          else if (year % 100 === 0 && year % 400 === 0) {
            return true;
          }
          else {
            return false;
          }
    }
    else{
        return false;
    }
    
  }

  let r = isLeapYear(1996);
  console.log(r);