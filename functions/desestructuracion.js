const cali ={
    nombre: "Deportivo Cali",
    //estadio: "Estadio Deportivo Cali",
    fundacion: 1912,
    titulos: 10
};

const verEquipo = ({nombre, estadio = "Palmaseca", fundacion, titulos}) => {
    console.log({nombre, estadio, fundacion, titulos});  
}

verEquipo(cali);