// Dada una lista de por lo menos 3 participantes se deberá 
// retornar un cronograma de enfrentamientos de tal manera 
// que todos los equipos se enfrenten contra cada uno de 
// ellos de manera aleatoria y sin repetición para poder 
// tener el calendario de partidos de un campeonato.

function sorteo(equipos) {

    if (equipos.length % 2 > 0) {
        equipos.push('No juega: descansa'); // Si el número de equipos es impar, se añade un equipo que descanse
    }

    let fixture = []
    let cantidad_equipos = equipos.length;
    let rivales = cantidad_equipos - 1;
    let partidos = cantidad_equipos / 2;


    for (let i = 0; i < rivales; i++) {
        fixture[i] = []
        for (let j = 0; j < partidos; j++) {
            fixture[i].push([equipos[j], equipos[rivales - j]]); // Se añaden los partidos a la lista de enfrentamientos
        }
        equipos.splice(1, 0, equipos.pop()) // Se rota la lista de equipos, splice(cuantos, donde, que)
    }

    return fixture;
}

let participantes = [
    "Real Madrid",
    "Barcelona",
    "Atlético de Madrid",
    "Liverpool",
    "Manchester City ",
    "Bayern Munich ",
    "Juventus",
    "Inter de Milán",
]

console.log(sorteo(participantes))