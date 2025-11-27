// 17. Manipulación de Strings ("toUpperCase", "slice")
// Título: Formateador de Texto
// Crea una variable "frase" con una cadena de texto.
// Convierte toda la frase a mayúsculas.
// Extrae y muestra solo los primeros 5 caracteres de la frase.
document.writeln('Esta es mi frase al principio: ');
let frase = 'En algun lugar de la mancha de cuyo nombre no quiero acordarme.';
document.writeln(frase);
document.writeln('<hr>');
document.writeln('Esta es mi frase con todo mayusculas gracias al metodo .toUpperCase(): ');
let frase_mayuscula = frase.toUpperCase();
document.writeln(frase_mayuscula);
document.writeln('<hr>');
document.writeln('Y haciendo slicing, con el método .slice() estas son las 5 primeras letras o caracteres:');
let frase_slice = frase_mayuscula.slice(0,5);
document.writeln(frase_slice);