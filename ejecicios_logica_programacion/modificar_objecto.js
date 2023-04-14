/*En este desafío tendrás que procesar una lista de compras.

Deberás implementar la lógica de la función processShoppingList() de tal manera que esta módifique 
el array original de la siguiente manera

1. Si el nombre del producto incluye la palabra "oferta", 
   se debe aplicar un descuento del 20% al precio del producto.
2. Multiplicar el precio del producto por su cantidad
3. Eliminar el atributo quantity una vez hecho lo anterior.
4. Finalmente, debes retornar el total de la suma de todos los productos de la lista modificada.*/

function processShoppingList(list) {
    let total =  0; 
    // buscar los articulos con oferta en el nombre
    list.forEach((articulo) => {
        //console.log(articulo.name);
        let incluyeOferta = articulo.name.includes("oferta");

        // aquellos articulos con oferta se le aplica un decuento del 20%
        if(incluyeOferta == true){
            let descuento = articulo.price * 0.2;
            articulo.price = articulo.price - descuento;
        }
        
        // Multiplicar el precio del articulo por su cantidad
        articulo.price = articulo.price * articulo.quantity; // El array original es modificado
        total = total + articulo.price;
        delete articulo.quantity // se elimina la propiedad cantidad
    });
    return total;
}

// EJECUCIÓN
const shoppingList = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
  ]

console.log(processShoppingList(shoppingList));
console.log(shoppingList);
