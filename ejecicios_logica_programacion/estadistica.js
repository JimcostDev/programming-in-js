// este algoritmo lo cree cuando estudiba estadistica y necesitaba ordenar listas
let lista = [0, 10, 0, 0, 0, 1, 1, 1, 12, 1, 1, 1, 2,5, 5, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4]
let cantidad = lista.length 

// ordenar la lista de numeros
lista.sort(); 
console.log(lista)
console.log(`Total de datos(N): ${cantidad}`)


// sumar elementos de la lista
let total = 0
for (item in lista){
    total += lista[item]
}
console.log(`La suma de los datos es: ${total}`)

// hallar promedio
let promedio = total/cantidad

console.log(`El promedio es: ${promedio.toFixed(3)}`)