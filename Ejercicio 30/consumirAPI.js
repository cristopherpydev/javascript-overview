// 30. Simulación de Llamada HTTP con "fetch"
// Título: Consumo Básico de API
// Usa la función global "fetch()" para hacer una solicitud GET a una API de prueba pública (p. ej.,
// "https://jsonplaceholder.typicode.com/todos/1").
// Usa la cadena de ".then()" (o "async/await") para:
//  1. Convertir la respuesta a formato JSON ("response.json()").
//  2. Mostrar en la consola el objeto de datos f


async function obtenerDatos() {
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/tods/1');
        if (!respuesta.ok){
            throw new Error(`La petición no se ha podido resolver, revisa el endpoint | ${respuesta.status}`);
        }
        let datos = await respuesta.json();
        document.writeln(datos);
        document.writeln(JSON.stringify(datos));
    } catch (error) {
        document.writeln("Error:", error);
    }
}

obtenerDatos();
