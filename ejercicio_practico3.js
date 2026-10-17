let nota1 = Number(prompt("Ingresa la nota 1 "));
let nota2 = Number(prompt("Ingresa la nota 2 "));
let nota3 = Number(prompt("Ingresa la nota 3 "));


let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);

let aprobo = Number(promedio) >= 3.0;


console.log(`El aprendiz obtuvo un promedio de "promedio}. ¿Aprobó? ${aprobo}`);


// Reto adicional: puntos que faltan para llegar a 3.0
const faltan = aprobo ? 0 : (3.0 - Number(promedio)).toFixed(1);
console.log(`Puntos que le faltan para aprobar: ${faltan}`);