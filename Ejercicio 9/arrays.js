// 9. Bucle "for" en Arrays
// Título: Mostrar Elementos
// Crea un array de tus 5 frutas favoritas.
// Usa un bucle "for" (o "for...of") para mostrar cada fruta del array en la consola.

let miArray = ['Pera', 'Coco', 'Cereza', 'Plátano de Canarias', 'Limón'];

for(let i = 0; i<miArray.length; i++){
    console.log(miArray[i]);
}
miArray.forEach((elemento) => console.log(elemento));