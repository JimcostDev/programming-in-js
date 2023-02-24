const piedra = 'p', 
      papel = 'pa',
      tijera = 't';

// false = perder
// true = ganar 

function play(user, machine){
    // PIEDRA
    if (user === piedra && machine === papel){
        return false
    }
    else if (user === piedra && machine === tijera){
        return true
    }
    // PAPEL
    else if (user === papel && machine === piedra){
        return true
    }
    else if (user === papel && machine === tijera){
        return false
    }
    // TIJERA
    else if (user === tijera && machine === piedra){
        return false
    }
    else if (user === tijera && machine === papel){
        return true
    }
    else {
        return 'empate'
    }
}


// ===================== EJECUCION ==================== //
let resultado = play('t', 'pa');

if(resultado === true){
    console.log('Gano user');
}
else if(resultado === false){
    console.log('Perdio user');
}
else if (resultado === 'empate'){
    console.log('Empate');
}