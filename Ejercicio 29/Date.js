// 29. Manipulación de Fechas ("Date" Object)
// Título: Calculador de Días Transcurridos
// Crea dos objetos "Date": uno para la fecha actual y otro para una fecha de inicio (ej. el 1 de enero
// del año actual).
// Calcula el número total de días que han transcurrido entre la fecha de inicio y la fecha actual.
// Muestra el resultado. (Pista: La diferencia entre fechas se mide en milisegundos, debes convertirlo a
// días).

let FechaActual = new Date('2025-11-27');
let FechaInicio = new Date('2025-01-01');

let tiempoActual = Date.parse(FechaActual);
let tiempoInicial = Date.parse(FechaInicio);

let diferencia = tiempoActual - tiempoInicial;

let diferenciaDias = diferencia/86400000;

document.writeln(`Fecha actual: ${FechaActual} | Fecha inicio: ${FechaInicio} | Dias transcurridos: ${diferenciaDias}`);