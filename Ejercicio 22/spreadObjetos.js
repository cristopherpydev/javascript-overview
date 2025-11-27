//  Propagación (Spread Operator) en Objetos
// Título: Actualizador de Configuración
// Tienes un objeto base "configuracionBase" con propiedades como "tema: 'oscuro'" y
// "notificaciones: true".
// Tienes un objeto "configuracionUsuario" con las propiedades que se quieren cambiar:
// "notificaciones: false" y una propiedad nueva "idioma: 'es'".
// Crea un nuevo objeto "configuracionFinal" combinando "configuracionBase" y
// "configuracionUsuario" usando el Spread Operator ("...").
// Muestra "configuracionFinal" en la consola para verificar que "notificaciones" fue sobrescrita.
let configuracionBase = {
    tema: 'oscuro',
    notificaciones: true
};

let configuracionUsuario = {
    notificaciones: false,
    idioma: 'es'
} 

let configuracionFinal = {
    ...configuracionBase, ...configuracionUsuario
};

console.log(configuracionFinal);