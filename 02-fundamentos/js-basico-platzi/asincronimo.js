const datos = [{
  id: 01,
  title: 'movie x',
  year:'2020'
},{
  id: 02,
  title: 'movie y',
  year:'2019'
},{
  id: 03,
  title: 'movie z',
  year:'2023'
}];

// funcion que tarda 1.5s en resolver (delay)
function getDatos(){
  // resolve = en caso de exito
  // reject = en caso de rechazo o error
  return new Promise((resolve, reject)=>{
    if (datos.length === 0){
      reject(new Error('No existen datos'))
    }
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
}

// asincronismo - usando promesas
getDatos()
  .then((datos)=> console.log(datos));

// asincronismo - usando async/await
async function fetchData(){
  try{
    const data = await getDatos();
    console.log(data);
  }catch (err){
    console.log(err.message);
  }
}

fetchData();

// Nota: al final async/await y promises son 2 formas de trabajar el asincronismo en js