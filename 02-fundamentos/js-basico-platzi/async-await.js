// En este ejemplo, se define una función getUserData() que una hace  
// llamada a la API y usa await para esperar la respuesta 
// y el try/catch para manejar los errores. La función displayUserData() también utiliza 
// await para esperar que se resuelva la promesa retornada por getUserData() y luego muestra 
// el nombre del usuario en la consola.

async function getUserData(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function displayUserData(userId) {
    const data = await getUserData(userId);
    console.log(data.name);
  }
  
  displayUserData(7);