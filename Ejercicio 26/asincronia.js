// 26. Simulación Asíncrona con "Promise"
// Título: Retraso de Datos
// Crea una función llamada "simularCargaDeDatos" que retorne una "Promise".
// La Promise debe resolverse después de 2 segundos usando "setTimeout()".
// Cuando se resuelva, debe retornar un mensaje: "Datos cargados con éxito después de 2 segundos".
// Llama a la función y usa el método ".then()" para mostrar el mensaje en la consola. 

// otra plantilla: https://www.w3schools.com/js/tryit.asp?filename=tryjs_promise3

function simularCargaDeDatos() {
    return new Promise(function(respuesta, rechazo){
        setTimeout(function(){
            respuesta('Datos cargados con éxito después de 2 segundos');
        }, 2000)
    })
}

let miPromesa = simularCargaDeDatos();

miPromesa.then(function(value){
    document.writeln(value);
})
