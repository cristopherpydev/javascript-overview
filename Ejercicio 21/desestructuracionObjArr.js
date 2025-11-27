// 21. Desestructuración de Objetos y Arrays
// Título: Extracción de Datos de Perfil
// Tienes un objeto complejo "usuario" que contiene las propiedades "nombre", "edad", un objeto
// anidado "direccion" (con "calle" y "ciudad") y un array de "hobbies".
// Usa la desestructuración para extraer en variables separadas: "nombre", "ciudad", y el primer
// "hobby".
// Muestra el valor de estas tres variables en la consola.

class Usuario{
    constructor(nombre, edad, direccion, hobbies){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.hobbies = hobbies;
    }
}

class Direccion{
    constructor(calle, ciudad){
        this.calle = calle;
        this.ciudad = ciudad;
    }
}

let direccion = new Direccion('Calle Wallabi, 42', 'Sidney');

let sherman = new Usuario('P.Sherman', 32, direccion, ['Buceo', 'Volley Playa']);

let nombre = sherman.nombre;
let ciudad = sherman.direccion.ciudad;
let primerHobbie = sherman.hobbies[0];

console.log(`El nombre es -> ${nombre} | La ciudad donde vive es -> ${ciudad}| Su primer hobbie es -> ${primerHobbie}`);
