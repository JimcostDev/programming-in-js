
// separar elementos de un array por su tipo de dato
let datos = ['Ronaldo','Jimenez',7,27,'COL',1999, true];
let datos_numeros = [];
let datos_textos = [];
let datos_varios = [];


for (let dato = 0; dato < datos.length; dato++) {
    if (typeof(datos[dato]) == 'number'){
        datos_numeros.push(datos[dato]);
    }
    else if(typeof(datos[dato]) == 'string'){
        datos_textos.push(datos[dato]);
    }
    else {
        datos_varios.push(datos[dato]);
    }
}

console.log(datos_numeros);
console.log(datos_textos);
console.log(datos_varios);