// CONSTANTES (ID)
const piedra = 'PI', 
      papel = 'PA',
      tijera = 'TI';

// VARIABLES PARA JUGAR
let usuario = 'PA',
    maquina = 'TI'

// false = perder
// true = ganar 

function play(user, machine){
    // PIERDE USUARIO
    if ((user === piedra && machine === papel) || 
        (user === papel && machine === tijera) || 
        (user === tijera && machine === piedra)){
        return false
    }
    // GANA USUARIO
    else if ((user === piedra && machine === tijera) ||
             (user === papel && machine === piedra)  || 
             (user === tijera && machine === papel)){
        return true
    }
    // EMPATE
    else {
        return 'empate'
    }
}


// EJECUCIÓN
let resultado = play(usuario, maquina);

if(resultado === true){
    console.log('Gano user');
}
else if(resultado === false){
    console.log('Perdio user');
}
else if (resultado === 'empate'){
    console.log('Empate');
}




