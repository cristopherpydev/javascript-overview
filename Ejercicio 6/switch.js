// 6. Estructura "switch"
// Título: Días de la Semana
// Crea una variable "dia" con un número del 1 al 7.
// Usa una estructura "switch" para mostrar el nombre del día de la semana correspondiente (1 =
// Lunes, 7 = Domingo). Si el número no está en el rango, muestra "Día no válido"

dia = 4;

switch (dia) {
    case 1:
        document.getElementById('dia').innerHTML = 'Lunes';
        document.getElementById('dia').style.color = 'violet';
        break;
    case 2:
        document.getElementById('dia').innerHTML = 'Martes';
        document.getElementById('dia').style.color = 'red';

        break;
    case 3:
        document.getElementById('dia').innerHTML = 'Miercoles';
        document.getElementById('dia').style.color = 'blue';

        break;    
    case 4:
        document.getElementById('dia').innerHTML = 'Jueves';
        document.getElementById('dia').style.color = 'purple';

        break;
    case 5:
        document.getElementById('dia').innerHTML = 'Viernes';
        document.getElementById('dia').style.color = 'pink';

        break;
    case 6:
        document.getElementById('dia').innerHTML = 'Sabado';
        document.getElementById('dia').style.color = 'aquamarine';

        break;   
    case 7:
        document.getElementById('dia').innerHTML = 'Domingo';
        document.getElementById('dia').style.color = 'indigo';

        break;

    default:
        document.writeln('<h1>Solo hay 7 dias a la semana...</h1>');
        break;
}