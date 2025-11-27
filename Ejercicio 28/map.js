// Título: Tareas Pendientes Prioritarias
// Tienes un array de objetos "tareasPendientes", donde cada objeto tiene "descripcion" y "prioridad"
// (número del 1 al 5).
// Encadena los métodos de array:
//  1. Usa ".filter()" para seleccionar solo las tareas con "prioridad" mayor o igual a 4.
//  2. Usa ".map()" para transformar los objetos filtrados en un array simple de solo las
// "descripciones".
// Muestra el array final de descripciones.

class ObjetoInventario{
    constructor(descripcion, prioridad){
        this.descripcion = descripcion;
        this.prioridad = prioridad;
    }
}

let inventario = [
    new ObjetoInventario('Tijeras', 5),
    new ObjetoInventario('Lápices', 4),
    new ObjetoInventario('Marmol', 3)
];

let descripcionesPrioritarias = inventario.filter(obj => obj.prioridad >= 4).map(obj => obj.descripcion);        

document.writeln(descripcionesPrioritarias);
