//ESTRUCTURAS CONDICIONALES

// if

//if (true){  
    //bloque codigo        
//}


//let evidencia = 2.0;
//if (evidencia >= 3.5){
//    console.log("el resultado es APROBADO")    
//} else {
//    console.log("el resultado es NO APROBADO")    
//}

// if - else if

//let edad = 61;

//if (edad <=13){
    //console.log("eres un niño");    
//} else if (edad <= 18){
    //console.log("el es un adolescente");    
//} else if (edad <= 60){
    //console.log("el es un adulto");    
//} else {
    //console.log("el es un anciano");    
//}


//let edad = 62;
//let semanas_cotizadas = 1200;
//let genero = "no definido";

//if (genero == "masculino"){
  // if (edad >= 62){
       // if (semanas_cotizadas >= 1300){
        //    console.log("el hombre puede pensionarse")
      //  } else {
       //     console.log("el hombre no puede pensionarse, le faltan semanas")
     //   }
   // } else {
    //    console.log("el hombre no puede pensionarse, le falta edad");
  //  } 

//} else if (genero == "femenino"){
   // if (edad >= 57){
      //  if (semanas_cotizadas >= 1200){
        //    console.log("la mujer puede pensionarse")
      //  } else {
        //    console.log("la mujer no puede pensionarse, le faltan semanas")
      //  }
    //} else {
      //  console.log("la mujer no puede pensionarse, le falta edad");
    //}
//} else {
    //console.log("lo siento, no se puede calcular la pensión para este parametro");
//}

//condicioanel con operadores logicos

//inicio de sesion - login

//let usuario = "Sebastian";
//let contrasena = "1234";

// if (usuario == "Sebastian" && contrasena == "1234"){
   // console.log("Bienvenido al sistema");
// } else {
    //console.log("Usuario o contraseña incorrectos");
// }


//condicional con operador logico OR

//proceso de certificacion

//let etapa_electiva = false;
//let etapa_practica = false;

//if (etapa_electiva == true || etapa_practica == true){
    //console.log("El aprendiz puede certificarse");
//} else {
    //console.log("El aprendiz no puede certificarse");
//}


// operador ternario

//let nota = 3.6;

//let resultado = (nota >= 3.5) ? "APROBADO" : "REPROBADO"; 
//console.log(nota);


//switch

//let dia = 6;

//switch (dia) {
    //case 1:
      //  console.log("Lunes");
      //  break;
   // case 2:
     //   console.log("Martes");
       // break;
  //  case 3:
       // console.log("Miercoles");
       // break;
   // case 4:
     //   console.log("Jueves");
       // break;
   // case 5:
     //   console.log("Viernes");
       // break;
   // case 6:
     //   console.log("Sabado");
       // break;
   // case 7:
     //   console.log("Domingo");
       // break;
   // default:
     //   console.log("El dia no es valido");
       // break;    
// }


//reto: calculadora con un menu manejado con switch

let numero1 = Number(prompt("Ingrese el primer numero:"));
let numero2 = Number(prompt("Ingrese el segundo numero:"));
let operacion = Number(prompt("Ingrese el numero de la operacion que desea realizar: 1. Suma, 2. Resta, 3. Multiplicacion, 4. Division"));

switch (operacion) {
    case 1:
        console.log(`El resultado de la suma es: ${numero1} y ${numero2} es igual a: ${numero1 + numero2}`);
        break;

    case 2:
        console.log(`El resultado de la resta es: ${numero1} y ${numero2} es igual a: ${numero1 - numero2}`);
        break;
    
    case 3:
        console.log(`El resultado de la multiplicacion es: ${numero1} y ${numero2} es igual a: ${numero1 * numero2}`);
        break;
    
    case 4:
        if (numero2 !== 0) {
            console.log(`El resultado de la division es: ${numero1} y ${numero2} es igual a: ${numero1 / numero2}`);
        } else {
            console.log("No se puede dividir entre 0");
        }

    default: 
        console.log("el numero de operacion no es valido");
}