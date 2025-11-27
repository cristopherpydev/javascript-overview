// 24. Funciones de Orden Superior Avanzadas ("reduce")
// Título: Calculador de Inventario Total
// Tienes un array de objetos llamado "inventario", donde cada objeto tiene "nombre", "cantidad" y
// "precioUnitario".
// Usa el método de array ".reduce()" para calcular el valor total del inventario (sumando "cantidad
// precioUnitario" de cada objeto).
// Muestra el total final.


class ObjetoInventario{
    constructor(nombre, cantidad, precio_unitario){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio_unitario = precio_unitario;
    }
}

inventario = [];

escoba = new ObjetoInventario('Escoba de madera', 20, 5)
papelera = new ObjetoInventario('Papelera de reciclaje estándar', 5, 7.50)
tijeras = new ObjetoInventario('Tijeras de acero inoxidable', 100, 4)

inventario.push(escoba,papelera,tijeras);
for(let i = 0; i<inventario.length; i++){
    document.writeln(`${inventario[i].nombre} | Cantidad: ${inventario[i].cantidad} | Precio: ${inventario[i].precio_unitario}`)
    document.writeln('<br>')
    document.writeln('<hr>')
}

function totalPrecios(inventario) {
    return inventario.reduce((total, item) => {
        return total + item.cantidad * item.precio_unitario;
    }, 0);
}

document.writeln(`El total de precios de todos los productos es: ` + totalPrecios(inventario))

