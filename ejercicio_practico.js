// 1. Pedir las tres notas y convertirlas a número
let nota1 = Number(prompt("Ingresa la nota 1:" ));
let nota2 = Number(prompt("Ingresa la nota 2:" ));
let nota3 = Number(prompt("Ingresa la nota 3" ));

// 2. Calcular el promedio y redondearlo a un decimal
let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);

// 3. Variable booleana de aprobación
let aprobo = promedio >= 3;

// 4. Mostrar el resultado con plantilla de texto
console.log(`El aprendiz obtuvo un promedio de ${promedio}. ¿Aprobó? ${aprobo}`);



let faltan = 0;

if (promedio >= aprobo); {

console.log(`El aprendiz le falta: ${promedio-aprobo}`);
}