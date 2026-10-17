// funciones


//funcion simple

// function saludar (){
//     console.log("hola mundo")
// }


// llamar la funcion

// saludar();


//funcion con paranetros

// function saludoPersonalizado(nombre, apellido){
//     console.log(`hola ${nombre} ${apellido}`); 
// }

// saludoPersonalizado("sebastian", "bautista");
// saludoPersonalizado("juan", "castillo");
// saludoPersonalizado("pedro", "bose");


// funcion con parametros por defecto

// function bienvenidaSena(nombre, programa = "adso"){
//     console.log(`hola aprendiz ${nombre} del programa ${programa}`)
// }

// bienvenidaSena("FELIPE")
// bienvenidaSena("JUAN", "MINERIA")


// FUNCION CON PARAMETROS DESORDENADOS

// function calcularEdad(nombre , anioNacimiento){
//     let edad = new Date().getFullYear() - anioNacimiento;
//     console.log(`hola ${nombre} tu edad es ${edad} años`)
// }

// calcularEdad("sebastian", 2002);


// funcion con retunr

// function calcularPromedio(num1, num2, num3){
//     let resultado = (num1 + num2 + num3) / 3;
//     return resultado;
// }

// let promedio = calcularPromedio(4, 5, 6); 

// if (promedio >= 4.5) {
//     console.log("Excelente");
// } else if (promedio >= 3.5) {
//     console.log("Bueno");
// } else if (promedio >= 3.0) {
//     console.log("Debe reforzar");
// } else {
//     console.log("Insuficiente"); 
// }

// // let resultadoClasificacion = clasificar (4.5);
// // console.log (resultadoClasificacion);

calculadora

function sumar (num1, num2){
    return num1 + num2;
}

function restar (num1, num2){
    return num1 - num2; 
}

function multiplicar (num1, num2){
    return num1 * num2; 
}

function dividir (num1, num2){
    return num1 / num2;
}

console.log(sumar(2,7));
console.log(restar(10,7));
console.log(multiplicar(2,7));
console.log(dividir(2,7));


function calculadora(num1, num2, opcion){
    switch(opcion){
        case 1:
            return sumar(num1, num2);
        case 2:
            return restar(num1, num2);
        case 3:
            return multiplicar(num1, num2);
        case 4:
            return dividir(num1, num2);
        default:
            return "opcion no valida";   
    }
}

console.log(calculadora(5, 3, 1)); 
console.log(calculadora(7, 3, 2)); 
console.log(calculadora(8, 3, 3)); 
console.log(calculadora(9, 3, 4));