// Switch es una forma diferente de validar, está depende del caso que sea verdad. 

var numero = 1, 
    resultado; 

/* Switch compara con un === por esa razón los elementos tiene que ser idénticos */ 

switch (numero) {
    case 1: 
        resultado = "Caso 1";
        break;
    case 10: 
        resultado = "Caso 10";
        break;
    case 100:
        resultado = "Caso 100";
        break;
    default:   
        resultado = "No match"; 
}

console.log(resultado); 