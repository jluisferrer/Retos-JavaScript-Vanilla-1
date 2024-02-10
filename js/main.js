//Retos JavaScript Vanilla I

// 1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
// dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
// funciona.

// var numero1 = 6;
// var numero2 = 9;

// if(numero1 > numero2){

//     console.log ('El numero 1 es mayor que el numero 2');
// }
// else if(numero1 === numero2){
// console.log('Los numeros son iguales')
//}
// else {console.log ('El numero 2 es mayor que el numero 1')
// }


// 2. Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida
// por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”.

// let String = ("Jose")

// {console.log ("bienvenido", String)}

// 3. Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir
// (recuerda usar prompt).

// let nombre = prompt("Introduce tu nombre")
// {console.log("bienvenido", nombre)}



// 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
// (recuerda pasar de String a double con parseDouble). Usa la constante PI.

// const pi = 3.1415

// let numero = parseFloat(prompt ("Introduce el radio para calcular"))
// let area = pi*(numero**2)
// console.log(area)

// 5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
// debemos indicarlo.

// let num = parseInt(prompt("Introduce tu numero"))
// if(num %2 == 0){
// console.log("Tu numero es divisible entre 2")
// }
// else{
// console.log("No es divisible entre 2")}

// 6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
// calcule el precio final con IVA. El IVA será una constante que sera del 21%

// let num = parseFloat(prompt("Introduzca su numero para calculaIVA"))

// const numconIva=num*0.21

// console.log("el precio de tu producto con IVA es", numconIva+num)

// 7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.


// let num = 0

// while (num < 100) {
//     num++
//     console.log(num);

//     num == 100
// }

// 8. Haz el mismo ejercicio anterior con un bucle for.

// for ( let num=0; num <= 100 ; num++ ){
// console.log (num)

// }

// 9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle
// que desees.

// for (let num = 1 ; num<=100 ; num ++)
//     if(num %2 == 0 && num%3 ==0)
//     {console.log (num)}

// 10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
// pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
// mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.

// const Numventas = prompt('Introduce tu numero de ventas:')
// let sumaTotalVentas  = 0;


// for(let VentaNumero=1 ; VentaNumero<=Numventas ; VentaNumero++ ){
//     const PrecioVenta = parseFloat(prompt('Introduce el importe de la venta'))
//     sumaTotalVentas+=PrecioVenta

// }
//   console.log('tu suma total de ventas es',sumaTotalVentas)

//Forma 2

// let NVentas = prompt("ingrese un numero de ventas")
// let ventas1 = 0
// for (i = 0; i < NVentas; i++) {
//   ventas1 += parseInt(prompt("ingrese importe de ventas"))

// }
// console.log("el total de ventas es", ventas1)


// let nVentas = parseInt(prompt("Cuantas"))
// let total = 0;

// for (let i = 0; i < nVentas; i++) {
//     total += /* para sumar se debe poner '+=' como operador*/
// }



// 11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
// o no. Usa un switch para ello.

// let dia = prompt('Dime un dia de la semana para saber si es laborable')

// switch (dia) {
//     case 'lunes':
//     console.log ('Toca currar')
//     break;    
//     case 'martes':
//     console.log ('Toca currar')
//     break;    
//     case 'miercoles':
//     console.log ('Toca currar')
//     break;    
//     case 'jueves':
//     console.log ('Toca currar')
//     break;    
//     case 'viernes':
//     console.log ('Toca currar')
//     break;    
//     case 'sabado':
//     console.log ('FINDEE')
//     break;    
//     case 'domingo':
//     console.log ('FINDEE')
//     break;    
//     default:
//     console.log ('DIA NO RECONOCIDO')
//     break;    
// }

// 12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
// se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
// más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
// condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

// const contraseña = "1234"

// for (let intento = 0; intento < 3; intento++) {

//     const IntroduceConstraseña = prompt("introduce la contraseña, tienes 3 intentos")

//     if (IntroduceConstraseña === contraseña) {
//         console.log('Enorabuena estas dentro')
//         break;
//     }

//     else {
//         console.log("contraseña incorrecta intentalo de nuevo")
//     }

//     console.log("Las contraseña intrucida no es correcta")
// }

// 13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
// aritmético (String), según este último se realizará la operación correspondiente. Al final
// mostrará el resultado en un cuadro de diálogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

// let numero1 = parseInt(prompt("Introduce primer numero"))
// let operacion = prompt("Introduce operacion que quieres realizar")
// let numero2 = parseInt(prompt("Introduce segundo numero"))

// if ((operacion === "+") || (operacion === "-") || (operacion === "*") || (operacion === "/") || (operacion === "^") || (operacion === "%")) {
//     if (operacion == "+") {
//         let resultado = numero1 + numero2;
//         console.log("El resultado de tu suma es", resultado)
//     }
//     else if (operacion == "-") {
//         let resultado = numero1 - numero2;
//         console.log("El resultado de tu resta es", resultado)
//     }
//     else if (operacion == "*") {
//         let resultado = numero1 * numero2;
//         console.log("El resultado de tu multiplicacion es", resultado)
//     } else if (operacion == "/") {
//         let resultado = numero1 / numero2;
//         console.log("El resultado de tu division es", resultado)
//     } else if (operacion == "^") {
//         let resultado = Math.pow(numero1, numero2);
//         console.log("El resultado de elevar", numero1, "a", numero2, "es", resultado)
//     } else if (operacion == "%") {
//         let resultado = numero1 % numero2;
//         console.log("El resto de dividir", numero1, "entre", numero2, "es", resultado)
//     }
// } else {
//     console.log("El simbolo introducido no es corresponde a ninguna operacion")
// }



