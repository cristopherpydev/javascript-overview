// 11. Funciones con Múltiples Parámetros
// Título: Conversor de Temperatura
// Define una función llamada "convertirCelsiusAFahrenheit" que tome la temperatura en Celsius
// como parámetro.
// La función debe calcular y retornar la temperatura en Fahrenheit: $F = (C \cdot 9/5) + 32$.
// Llama a la función con 25°C y muestra el resultado.

function convertirCelsiusAFahrenheit(celsius){
    farenheit = (celsius * (9/5)) + 32;
    return farenheit
}

let celsius = 5;
let tempNueva = convertirCelsiusAFahrenheit(celsius);
document.writeln('Temperatura celsius:'+celsius+' Nueva:'+tempNueva)