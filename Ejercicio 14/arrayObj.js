// 14. Arrays de Objetos
// Título: Catálogo de Productos
// Crea un array de objetos llamado "productos", donde cada objeto tenga propiedades "nombre" y
// "precio". Incluye al menos 3 productos.
// Usa un bucle "for" para mostrar el "nombre" y el "precio" de cada producto en la consola.

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

libro_1 = new Producto('Frankenstein', 20.99)
libro_2 = new Producto('Alicia en el país de las maravillas', 18.99)
libro_3 = new Producto('Las mil y una noches', 16.99)

productos = [libro_1, libro_2, libro_3]

for(let i = 0; i<productos.length; i++){
    document.writeln(`Nombre del producto: ${productos[i].nombre} | Precio: ${productos[i].precio}`)
    document.writeln('<br>')
}
