// 13. Objetos Literales
// Título: Descripción de un Libro
// Crea un objeto llamado "libro" con las propiedades: "titulo", "autor" y "publicacion" (año).
// Muestra en la consola el título y el año de publicación del libro usando la notación de punto.

class Libro{
    constructor(titulo, autor, publicacion){
        this.titulo = titulo;
        this.autor = autor;
        this.publicacion = publicacion;
    }
}

miLibro = new Libro('Luna de plutón', 'Dross Rotzank', '2015')

document.writeln(miLibro.titulo, miLibro.autor, miLibro.publicacion)