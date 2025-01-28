/**
 
En este desafío, deberás calcular el promedio general de una clase, así como el promedio individual de cada estudiante.

Para ello, se te proporcionará un array de objetos, cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:

name: El nombre del estudiante
grades: Las notas de cada materia del estudiante
A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad classAverage con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.

Es importante mencionar que los promedios deben ser calculados con precisión y se deben redondear a dos decimales para que los test pasen sin problema alguno.
 */

function getStudentAverage(students) {
   // crear estructura del objeto 
    let classAverage = {
        classAverage: 0,
        students: [{
            name: '',
            average: 0
        }]
    };

    // reiniciar array de students
    classAverage.students = [] 
    let generalAVG = 0;
    
    for (let i = 0; i < students.length; i++) {
        // obtener la suma de todas las notas por estudiante
        const student = students[i];
        const sumGrades = student.grades.reduce(function (sum, grades){
            return sum + grades;
        }, 0);

        // calcular promedio por cada estudiante
        let avg = sumGrades / student.grades.length;

        // guardar datos en el objeto     
        classAverage.students.push({name: student.name, average: Number(avg.toFixed(2))}) 
    }

    // sumar promedios de estudiantes
    for (let cas of classAverage.students) {
      generalAVG += cas.average;
  }
    
    // calcular el promedio general
    generalAVG = generalAVG / students.length
    classAverage.classAverage = Number(generalAVG.toFixed(2));

    return classAverage;
}


/* ********** EJECUCIÓN ********** */
let r = getStudentAverage([
    {
      name: "Pedro",
      grades: [90, 87, 88, 90],
    },
    {
      name: "Jose",
      grades: [99, 71, 88, 96],
    },
    {
      name: "Maria",
      grades: [92, 81, 80, 96],
    },
  ]);
console.log(r)