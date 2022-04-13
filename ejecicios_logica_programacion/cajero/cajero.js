
// billetes disponibles (billete : cantidad)
const disponible = {
    100: 3,
    50: 6,
    20: 10,
    10: 50,
    1: 50,
};

//obtener las llaves del objeto
const billetes = Object.keys(disponible);
billetes.reverse(); //ordenar de mayor a menor


//esta funcion calcula el total disponible del ATM
const totalDisponible = () => {
    let total = 0;
    for (let i = 0; i < billetes.length; i++) {
        total += billetes[i] * disponible[billetes[i]]
    }

    return total;
}


// esta función devuelve la cantidad de billetes disponibles por cada denominacion de acuerdo al valor solicitado
const calcularBilletes = (saldoARetirar, denominacion) =>{
    let contador = saldoARetirar / denominacion // 1000/100 = 10, contador = 10

    if (contador > disponible[denominacion]) { // 10 es mayor a 3
        contador = disponible[denominacion] // contador = 3
    }
    disponible[denominacion] -= contador // 3 - 3 = 0

    return contador
}

// esta funcion devuelve la cantidad solicitada por el usuario
const procesar = valorAretirar => {
    if (valorAretirar > totalDisponible()) {
        console.log("Error, no hay suficiente saldo");
        return
    }

let saldoARetirar = valorAretirar;
    while (saldoARetirar > 0) {

        let contador = 0;
        for (let i = 0; i < billetes.length; i++) {
            contador = calcularBilletes(saldoARetirar, billetes[i]);
            if(contador != 0){
                console.log(`${contador} billetes de denonimacion: $ ${billetes[i]}`);
            }
            

            saldoARetirar -= contador * billetes[i]
        }
    }
}

procesar(1348)