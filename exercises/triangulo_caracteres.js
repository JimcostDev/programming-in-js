function printTriangle(size, character) {
    let triangulo = []; //array 
    for (let i = 1; i <= size; i++){
      let espacios = ' '.repeat(size - i); //repetimos los espacios, el tamaño(size) - la iteracion(i) 
      let caracteres = character.repeat(i); //repetimos el caracter el numero de veces de la iteracion(i)
      let figura = `${espacios}${caracteres}`;  //concatenanos espacios y caracteres
      triangulo.push(figura) //agregamos la figura al array
    }
    return triangulo.join("\n"); //remplazamos la ',' por un salto de linea en el array
  }

  let r = printTriangle(5, '⚽');
  console.log(r);