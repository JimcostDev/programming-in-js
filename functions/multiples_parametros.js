// Función que calcula el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

let area = calcularAreaRectangulo(5, 10);
console.log("Área del rectángulo: " + area);

// Usamos ...nombre-args para recibir múltiples parámetros
const imprimirArgs = (...args) => {
  return args;
};

let [edad, nombre, ciudad] = imprimirArgs(26, "Roanaldo", "Cali");
console.log({ edad, nombre, ciudad });

// Función para crear persona
const crearPersona = (nombre, apellido) => ({nombre, apellido});
let {apellido: apellidoPersona} = crearPersona("Roanaldo", "Jiménez");
console.log({ apellidoPersona });
  