// ciclo while 


// TENER CUIDADO CON LOS CICLOS INFINITOS

// Imprimir los números del 1 al 10 usando un ciclo while


// let i = 1;

// while (i <= 10) {
//     console.log("El valor de i es: " + i);
//     i++;
// }


// Validacion de contraseña 


// let password_servidor = "admin123";
// let password_usuario = "admin123";

// while (password_usuario !== password_servidor) {
//     console.log("Contraseña incorrecta. Inténtelo de nuevo.");
// }
//     console.log("Bienvenido al sistema.");


// app de entrada a un bar


// let edad = 16;

// while (edad < 18) {
//     console.log("No puedes entrar al bar. Debes ser mayor de edad.");
//     edad++;
// }
// console.log("Bienvenido al bar. Puedes entrar.");


// app de riego de plantas


// let cantidad_agua = 0;

// while (cantidad_agua < 10) {
//     console.log("Riegos las plantas con" + cantidad_agua + "litros de agua")
//     cantidad_agua++;
// }
// console.log("todas las plantas han sido regadas");


// ciclo do while


// let numero=1;

// do {
//     console.log(numero);
//     numero++;
// }  while (numero <= 10);


// sentencia break: salir del bucle cuando se cumpla una condición


// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         console.log("Se ha alcanzado el número 5, saliendo del bucle.");
//     break;
//     }
//     console.log(i);
// }   


// app de bar con break


// let i = 1;

// for (let edad = 18; i <= 20; i++) {
//     if (edad < 18) {
//         console.log("no puedes entrar al bar. Debes ser mayor de edad.");
//         break;
//     } else {    
//     console.log("Bienvenido al bar. Puedes entrar.");
//     }
// }    


// sentencia continue: saltar a la siguiente iteración del bucle cuando se cumpla una condición


// for (let i = 1; i <= 11; i++) {
//     if (i === 5) {
//         console.log("se salto el numero 5");
//         continue;
//     }
//     console.log(i);
// }


// continue y break


for (let n = 1; n <= 10; n++) {
if (n % 2 === 0) continue; // salta los pares
if (n > 7) break; // termina el ciclo
console.log(n); // 1, 3, 5, 7
}