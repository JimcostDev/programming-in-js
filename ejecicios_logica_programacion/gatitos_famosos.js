/* En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

Recibirás un array de objetos que incluirán las siguientes propiedades:

name: nombre del gatito.
followers: un array de números, donde cada uno representa los seguidores de cada red social.

Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. 
Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, 
manteniendo el orden en el que aparecen en el array de entrada. 

 ------------------ Ejemplo 1: -----------------
findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
])

// Output: ["Luna"]

------------------ Ejemplo 2: -----------------
findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
])

// Output: ["Milo", "Gizmo"]
*/

/* ----------------- SOLUCIÓN 1 ------------------------- */
function findFamousCats(cats) {
    // Creamos un objeto en el cual guardaremos los nombres y el número máximo de seguidores
    let catStats = {
      catNames: [],
      maxNumOfFollowers: 0,
    };
  
    for (let i = 0; i < cats.length; i++) {
      // Obtenemos la suma total de seguidores con reduce por gato
      const cat = cats[i];
      const totalFollowers = cat.followers.reduce(function (sum, follower){
        return sum + follower;
      }, 0);
   
     // comparamos si el total de followers del actual gato es IGUAL al del objeto que declaramos al inicio
     if (totalFollowers === catStats.maxNumOfFollowers) {
        catStats.catNames.push(cat.name);
      }

      // si es MAYOR el total de seguidores 
      if (totalFollowers > catStats.maxNumOfFollowers) {
         // Reiniciamos el array de nombres
         catStats.catNames = [];
         // agregamos el nombre y el total de seguidores 
         catStats.catNames.push(cat.name);
         catStats.maxNumOfFollowers = totalFollowers;
      }
    }
  
    // Al final solo retornamos LOS NOMBRES
    return catStats.catNames;
};
// .
// .
// .
// .
// .
// .
// .
/* ----------------- SOLUCIÓN 2 ------------------------- */
function findFamousCats_2(cats) {
  let gatosFamosos = {};
  
  // calcular total de seguidores por cada gato
  cats.forEach(gato => {
    return gatosFamosos[gato.name] = gato.followers.reduce((sum,follower) => sum + follower)   
  });

  // saber quien tiene mas seguidores - retornamos el nombre (key)
  let famoso = Math.max(...Object.values(gatosFamosos));
    return(Object.keys(gatosFamosos).filter(key => gatosFamosos[key] === famoso));
};
// .
// .
// .
// .
// .
// .
// .
/* ----------------- EJECUCIÓN ------------------------- */
let r = findFamousCats([
        {
          name: "Mimi",
          followers: [320, 120, 70]
        },
        {
          name: "Milo",
          followers: [400, 300, 100, 200]
        },
        {
          name: "Gizmo",
          followers: [250, 750]
        }
      ]);
console.log(r); 
