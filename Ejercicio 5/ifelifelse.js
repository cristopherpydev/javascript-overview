// . Condicionales Múltiples ("if/else if/else")
// Título: Clasificación de Edad
// Crea una variable "edad".
// Usa una estructura "if/else if/else" para clasificar la edad en:
//  "Niño" (si es menor de 13)
//  "Adolescente" (si es de 13 a 17)
//  "Adulto" (si es mayor o igual a 18)

edad = 12;

if (edad < 13){
    document.writeln('<h1>Eres un niño</h1>')
}
else if(edad >=13 && edad <= 17){
    document.writeln('<h2>Eres un adolescente</h2>')
}
else{
    document.writeln('<h3>Eres un adulto</h3>')
}