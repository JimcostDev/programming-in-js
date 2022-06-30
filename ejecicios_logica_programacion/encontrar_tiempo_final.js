/*
    La tarea es preparar un código simple para evaluar o encontrar el tiempo final de un periodo de tiempo dado, 
    expresándolo en horas y minutos. Las horas van de 0 a 23 y los minutes de 0 a 59. 
    Por ejemplo, si el evento comienza a las 12:17 y dura 59 minutos, terminará a las 13:16.
    
    Datos de Prueba
      Entrada de muestra:
      12
      17
      59 (duracion)
      Salida esperada: 13:16
      Entrada de muestra:
      23
      58
      642 (duracion)
      Salida esperada: 10:40
 */

let hora = 23;
let min = 58;
let duracion = 642; // minutos

console.log(`Hora inicial del evento, ${hora}:${min}`);
console.log(`duracion: ${duracion} minutos`);

let suma = min + duracion;

if (suma >= 60){
    let minutos_sobrantes = suma % 60;
    let suma_hora = parseInt(suma / 60);
    hora += suma_hora;
    if (hora > 24){
        hora = 0;
        hora += suma_hora - 1;
    }
    console.log(`Hora salida, ${hora}:${minutos_sobrantes}`);
}
else{
    console.log(`Hora salida, ${hora}:${suma}`);
}
