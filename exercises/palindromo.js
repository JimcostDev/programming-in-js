/*
    Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.
*/

// función que retorna la palabra al reves
function invertirPalabra(palabra){
    let palabra_alReves = [];
    // separamos la palabra en letras e invertimos el sentido de la palabra
    for (let letra of palabra){
      palabra_alReves.unshift(letra);
    }
  
    // unimos los elementos del nuevo array (convertir a una palabra)
    let nueva_palabra = palabra_alReves.join(''); // quitamos las ',' por ''.
    return nueva_palabra;
  }
  
  // función que retorna si la palbra es palíndromo 
  function esPalindromo(palabra){
    let palabra_invertida = invertirPalabra(palabra);
    if(palabra_invertida === palabra){
      return true; // es palindromo
    }
    else{
      return false;
    }
  }
  
  // función que retorna una lista de palíndromos
  function findLargestPalindrome(lista_de_palabras){
    let listaPalindromos = [];
  
    for (palabra of lista_de_palabras){
      if(esPalindromo(palabra)){
        listaPalindromos.push(palabra); // agregamos la palabra al array
      }
    }
    return listaPalindromos;
  }
  
  let r = findLargestPalindrome(["racecar", "level", "world", "hello"]);
  // comprobar que el array(r) no este vacio, si length retorna 0 es porque esta vacio.
  if (r.length == 0){
    console.log(null);
  }else{
    console.log(r);
  }
  
  