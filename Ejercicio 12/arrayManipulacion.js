// 12. Manipulación de Arrays ("push", "pop", "splice")
// Título: Gestor de Tareas Pendientes
// Crea un array llamado "tareas" con 3 elementos.
// Usa el método ".push()" para añadir una nueva tarea al final.
// Usa el método ".splice()" para eliminar la segunda tarea.
// Muestra el array final en la consola

tareas = ['Salir a comprar', 'Hacer la tarea de Rayco', 'Hacer el examen sorpresa no tan sorpresa de Inés'];
tareas.push('Esto se añade al final siempre...');
tareas.splice(1,1);
for(i=0;i<tareas.length;i++)
    document.writeln(tareas[i]+ '<br></br>');