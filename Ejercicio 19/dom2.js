// 19. Manejo de Eventos (DOM) - HTML Requerido
// Título: Contador de Clicks
// Asume que tienes un botón HTML con el "id="botonContador"".
// Usa "document.getElementById()" para seleccionar el botón.
// Usa el método ".addEventListener('click', ...)" para que, al hacer click en el botón, se muestre en la
// consola el mensaje "Botón clickeado!".
function Saludar(){
    document.writeln('Botón clickeado!');
    console.log('Botón clickeado!');
}
let otroSaludo = () => 'He saludado';
document.getElementById('botonContador').addEventListener('click', Saludar);
document.writeln('<br>');
document.writeln('<br>');

document.writeln(otroSaludo());