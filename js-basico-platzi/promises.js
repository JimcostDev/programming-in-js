/*
En este desafío debes utilizar promesas para enviar un correo electrónico.

La función sendEmail recibe tres parámetros: email, subject y body, 
los cuales son necesarios para enviar un correo. Deberás implementar 
la lógica necesaria para usar promesas y enviar el correo después de 2 segundos.

En caso de faltar algún dato, deberás lanzar un error con el mensaje 
indicando que faltan campos para enviar el correo.*/

function sendEmail(email, subject, body) {
    // De entrada empezamos retornando una promesa, la cual nos provee de resolve y reject dependiendo si hay éxito en esta
    return new Promise((resolve, reject) => {
      // Primero validamos que todos los aspectos del email estén disponibles
      if (email && subject && body) {
        // De ser así, creamos un timeout para "enviar" el email
        // Recuerden hacer uso de window para que las pruebas pasen
        window.setTimeout(() => {
          // Dentro del timeout definimos un objeto con
          // todos los datos recibidos
          const emailInfo = {
            email,
            subject,
            body,
          };
  
          // Y lo pasamos a la resolución exitosa de la promesa
          // Para que esto sea "enviado" después de 2 segundos
          resolve(emailInfo);
        }, 2000);
      } else {
        // En caso de faltar algún dato, lanzamos un error indicándolo
        reject(new Error("Hacen falta datos para poder enviar el correo"));
      }
    });
  }

  sendEmail(
    "test@mail.com",
    "Nuevo reto",
    "Únete a los 30 días de JS"
  )
  .then(result => console.log(result))
  .catch(error => console.log(error))