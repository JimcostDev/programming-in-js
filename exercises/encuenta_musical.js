// Sistema de Encuesta Musical para Emisora
const prompt = require("prompt-sync")({ sigint: true });

// Arreglo para almacenar las personas encuestadas
let personas = [];

// Función principal que muestra el menú
function mostrarMenu() {
  console.log("\n==== SISTEMA DE ENCUESTA MUSICAL ====");
  console.log("1. Agregar persona encuestada");
  console.log("2. Mostrar información de una persona");
  console.log("3. Salir");

  const opcion = prompt("Seleccione una opción (1-3): ");

  switch (opcion) {
    case "1":
      agregarPersona();
      break;
    case "2":
      mostrarPersona();
      break;
    case "3":
      console.log("¡Gracias por usar el sistema!");
      return;
    default:
      console.log("Opción no válida. Intente nuevamente.");
  }

  // Volver a mostrar el menú
  mostrarMenu();
}

// Función para agregar una nueva persona encuestada
function agregarPersona() {
  console.log("\n---- AGREGAR NUEVA PERSONA ----");

  // Validar que no se exceda el límite de 6 personas
  if (personas.length >= 6) {
    console.log("Ya se ha alcanzado el límite de 6 personas encuestadas.");
    return;
  }

  // Recopilar datos personales
  const nombre = prompt("Nombre completo: ");
  const cedula = prompt("Número de identificación (cédula): ");
  const fechaNacimiento = prompt("Fecha de nacimiento (DD/MM/AAAA): ");
  const correo = prompt("Correo electrónico: ");
  const ciudadResidencia = prompt("Ciudad de residencia: ");
  const ciudadOrigen = prompt("Ciudad de origen: ");

  // Recopilar canciones favoritas
  console.log("\nA continuación, ingrese sus 3 canciones favoritas:");
  const cancionesFavoritas = [];

  for (let i = 0; i < 3; i++) {
    console.log(`\nCanción #${i + 1}:`);
    const artista = prompt("Nombre del artista: ");
    const titulo = prompt("Título de la canción: ");

    cancionesFavoritas.push({
      artista: artista,
      titulo: titulo,
    });
  }

  // Crear objeto persona
  const persona = {
    nombre: nombre,
    cedula: cedula,
    fechaNacimiento: fechaNacimiento,
    correo: correo,
    ciudadResidencia: ciudadResidencia,
    ciudadOrigen: ciudadOrigen,
    cancionesFavoritas: cancionesFavoritas,
  };

  // Agregar persona al arreglo
  personas.push(persona);

  console.log(
    `\n¡Persona agregada exitosamente! Posición en el vector: ${
      personas.length - 1
    }`
  );
}

// Función para mostrar información de una persona según su posición
function mostrarPersona() {
  if (personas.length === 0) {
    console.log("No hay personas registradas en el sistema.");
    return;
  }

  let posicion;
  
  // Mejorar el mensaje cuando solo hay una persona
  if (personas.length === 1) {
    console.log("Solo hay una persona registrada (posición 0).");
    posicion = parseInt(prompt("Presione 0 para ver su información: "));

    if (posicion !== 0) {
      console.log("Posición no válida. Intente nuevamente.");
      return;
    }
  } else {
    posicion = parseInt(
      prompt(`Ingrese la posición de la persona (0-${personas.length - 1}): `)
    );

    // Validar posición
    if (isNaN(posicion) || posicion < 0 || posicion >= personas.length) {
      console.log("Posición no válida. Intente nuevamente.");
      return;
    }
  }
  
  // Obtener persona
  const persona = personas[posicion];

  // Mostrar información
  console.log("\n---- INFORMACIÓN PERSONAL ----");
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Cédula: ${persona.cedula}`);
  console.log(`Fecha de nacimiento: ${persona.fechaNacimiento}`);
  console.log(`Correo electrónico: ${persona.correo}`);
  console.log(`Ciudad de residencia: ${persona.ciudadResidencia}`);
  console.log(`Ciudad de origen: ${persona.ciudadOrigen}`);

  console.log("\n---- CANCIONES FAVORITAS ----");
  persona.cancionesFavoritas.forEach((cancion, index) => {
    console.log(`\nCanción #${index + 1}:`);
    console.log(`Artista: ${cancion.artista}`);
    console.log(`Título: ${cancion.titulo}`);
  });
}

// Iniciar el programa
console.log("¡Bienvenido al Sistema de Encuesta Musical!");
console.log(
  "Este programa permite registrar los gustos musicales de hasta 6 personas."
);
mostrarMenu();