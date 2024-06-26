// ejemplo tomado del libro de Apreniendo JavaScript de Carlos Azaustre

// Clases en ECMAScript 6
class Inventario{
    constructor(nombre){
        this.nombre = nombre;
        this.articulos = [];
    }
    
    add(nombre, cantidad){
        this.articulos[nombre] = cantidad;
    }
    borrar(nombre){
        delete this.articulos[nombre];
    }
    cantidad(nombre){
        return this.articulos[nombre];
    }
    obtenerNombre(){
        return this.nombre;
    }
}

const libros = new Inventario('libros');
libros.add('React', 3);
libros.add('NodeJS', 5);
libros.add('JavaScript', 10);
console.log(libros.cantidad('React'));
console.log(libros.obtenerNombre());


// Herencia en ECMAScript 6
class InventarioHijo extends Inventario{
    constructor(nombre){
        super(nombre);
    }
}

const comics = new InventarioHijo('comics');
comics.add('Batman', 20);
comics.add('Superman', 10);
comics.add('Flash', 5);
console.log(comics.cantidad('Batman'));
comics.borrar('Batman');
console.log(comics.cantidad('Batman'));
console.log(comics.obtenerNombre());
