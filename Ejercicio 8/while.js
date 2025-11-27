// 8. Bucle "while"
// Título: Suma hasta 100
// Usa un bucle "while" para sumar todos los números enteros desde el 1 hasta que la suma total sea
// mayor o igual a 100.
// Muestra la suma final y el último número que se sumó.

suma = 0;
contador = 0;
while (suma <=100){

    contador++;
    suma = suma + contador;
    console.log(contador,suma);
}

console.log(suma);