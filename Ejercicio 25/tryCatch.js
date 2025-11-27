// 25. Control de Errores ("try...catch")
// Título: Validador de JSON
// Define una función que acepte un string como entrada.
// Usa un bloque "try...catch" para intentar parsear el string usando "JSON.parse()".
// Si el parseo falla (por ejemplo, si el string no es JSON válido), el bloque "catch" debe capturar el
// error y mostrar un mensaje legible: ""Error: El string proporcionado no es un JSON válido."".

function aceptoString(mensaje){
    try {
        document.writeln(`El parámetro que introduzco es: ${mensaje}.`)
        document.writeln('<br>')
        document.writeln('<br>')
       
        JSON.parse(mensaje);
    } 
    catch (error) {
        document.writeln(`Error: El string no es un JSON válido. >> ${error}`)
    }
    
}

aceptoString('Rayco es el mejor profe del IES San Juan de la Rambla');
document.writeln('<br>')
document.writeln('<br>')
document.writeln('Y la función hace que no interrumpa el flujo normal del programa.')