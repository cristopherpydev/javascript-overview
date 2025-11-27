// 20. Lógica de Funciones Complejas
// Título: Verificador de Palíndromos
// Define una función llamada "esPalindromo" que reciba un string como argumento.
// La función debe retornar "true" si el string se lee igual al revés (ignorando mayúsculas y espacios) y
// "false" en caso contrario.
//  Prueba la función con cadenas como "reconocer" o "Anita lava la tina".

function esPalindromo(frase){
    frase = frase.toLowerCase();
    let frase_auxiliar = frase;
    frase_auxiliar = frase_auxiliar.replaceAll('á', 'a');
    frase_auxiliar = frase_auxiliar.replaceAll('é', 'e');
    frase_auxiliar = frase_auxiliar.replaceAll('í', 'i');
    frase_auxiliar = frase_auxiliar.replaceAll('ó', 'o');
    frase_auxiliar = frase_auxiliar.replaceAll('ú', 'u');
    frase_auxiliar = frase_auxiliar.replaceAll(' ', '');
    frase_auxiliar = frase_auxiliar.split('').reverse().join('');
    frase = frase.replaceAll('á', 'a');
    frase = frase.replaceAll('é', 'e');
    frase = frase.replaceAll('í', 'i');
    frase = frase.replaceAll('ó', 'o');
    frase = frase.replaceAll('ú', 'u');
    frase = frase.replaceAll(' ', '');
    if (frase == frase_auxiliar){
        return true;
    }
    else{
        return false;
    }

}

frase = 'dabale arroz a la zorra el Abad';

palindromo = esPalindromo(frase);
if (palindromo){
    document.writeln(`La frase: ${frase} -> Es palindromo`);
}
else{
    document.writeln(`La frase: ${frase} -> NO es palindromo`);

}