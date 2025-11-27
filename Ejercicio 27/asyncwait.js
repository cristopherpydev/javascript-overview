// 27. Consumo Asíncrono con "async/await"
// Título: Espera de Tareas
// Utiliza la función "simularCargaDeDatos" del ejercicio anterior (o crea una nueva Promise simple).
// Define una función asíncrona ("async function") llamada "ejecutarTareaAsincrona".
// Dentro de la función, usa la palabra clave "await" para esperar la resolución de la Promise.
// Muestra el resultado final en la consola.

function simularCargaDeDatos() {
    return new Promise(function(respuesta) {
        setTimeout(function() {
            respuesta('Datos cargados con éxito después de 2 segundos');
        }, 2000);
    });
}

async function ejecutarTareaAsincrona() {
    let resultado = await simularCargaDeDatos();
    console.log(resultado);
    document.writeln(resultado);
}

ejecutarTareaAsincrona();
