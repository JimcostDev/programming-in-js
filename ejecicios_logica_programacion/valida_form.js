//En este desafío deberás validar un formulario de registro de usuario.

//Tu tarea es implementar la lógica de la función validateForm la cual recibirá como 
//parámetro un objeto con los datos del formulario al igual que una lista de usurios registrados.

//La función debe verificar que todos los campos requeridos del 
//formulario (name, lastname, email y password) estén completos, 
//si falta algún campo, debe lanzar un error especificando los campos faltantes.

function validateForm(formData, registeredUsers) {
  //Datos requeridos
  const requiredData = ["name", "lastname", "email", "password"]
  //Encontrar que datos faltan
  const missingData = requiredData.filter(x => !Object.keys(formData).includes(x))

  //Mensaje de error si faltan datos
  if (!!missingData.length)
    throw new Error(`Faltan los siguientes campos: ${missingData.join(", ")}`);

  //Extraer los valores necesarios de formData
  const { name, lastname, email } = formData

  //Comprobar si ya esta registrado ese email
  if (registeredUsers.some(x => x.email == email))
    throw new Error(`Email ya existe: ${email}`);

  //Agregar el registro
  registeredUsers.push({ name, lastname, email })

  //Retorno
  return (`Tu registro fue exitoso ${name} ${lastname}`)

}

// EJECUCUÓN
const formData = {
    name: "Juan",
    password: "123456",
  };
  
  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ]
  
result = validateForm(formData, registeredUsers);
console.log(result);