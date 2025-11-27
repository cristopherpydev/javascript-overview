// 15. Métodos de Array de Orden Superior ("map" o "filter")
// Título: Precios con Descuento
//  Usando el array "productos" del ejercicio 14, usa el método ".map()" para crear un nuevo array
// donde el precio de cada producto tenga un 10% de descuento.
//  Muestra el nuevo array en la consola

//// pues hay dos metodos

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

libro_1 = new Producto('Frankenstein', 20.99);
libro_2 = new Producto('Alicia en el país de las maravillas', 18.99);
libro_3 = new Producto('Las mil y una noches', 16.99)

let productos = [libro_1, libro_2, libro_3];
for(let i = 0; i<productos.length; i++){
    document.writeln(`Nombre del producto: ${productos[i].nombre} | Precio: ${productos[i].precio}`)
    document.writeln('<br>')
}
let productos_nuevos = productos.map(producto => {
    producto.precio *=1.1;
    return producto;
});
document.writeln('<hr>')
document.writeln('Despues de usar la funcion mira como queda')
document.writeln('<hr>')



for(let i = 0; i<productos.length; i++){
    document.writeln(`Nombre del producto: ${productos_nuevos[i].nombre} | Precio: ${productos_nuevos[i].precio}`)
    document.writeln('<br>')
}