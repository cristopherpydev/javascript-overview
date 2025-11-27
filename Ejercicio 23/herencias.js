// 23. Clases y Herencia (Programación Orientada a Objetos - POO)
// Título: Sistema de Vehículos
// Crea una clase llamada "Vehiculo" con un constructor que acepte "marca" y "modelo". Debe tener
// un método llamado "obtenerInformacion()" que retorne un string descriptivo.
// Crea una clase hija llamada "Coche" que herede de "Vehiculo". El constructor de "Coche" debe
// aceptar también la propiedad "puertas".
// Añade un método a "Coche" llamado "obtenerDetalles()" que use el método del padre y añada la
// información de "puertas"

////////// SI RECORDAMOS EN PYTHON, que es muy parecido, se hace con super para instanciar los atributos 
/// de la clase padre, y para los métodos también ///
class Vehiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    obtenerInformacion(){
        return `Marca ${this.marca}, modelo ${this.modelo}`
    }
}

class Coche extends Vehiculo{
    constructor(marca, modelo, puertas){
        super(marca, modelo);
        this.puertas = puertas;
    }
    obtenerDetalles(){
        return `${super.obtenerInformacion()}, puertas: ${this.puertas}`;
    }

}

let miVehiculo = new Vehiculo('Toyoa', '4X4');
let miCoche = new Coche('Toyota', '4X4', 7);
console.log(miCoche.obtenerDetalles());
console.log(miCoche.obtenerInformacion());