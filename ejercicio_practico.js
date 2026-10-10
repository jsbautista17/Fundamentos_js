// 1. Pedir las tres notas y convertirlas a número
const nota1 = Number(prompt("Ingresa la nota 1 (1 a 5):"));
const nota2 = Number(prompt("Ingresa la nota 2 (1 a 5):"));
const nota3 = Number(prompt("Ingresa la nota 3 (1 a 5):"));

// 2. Calcular el promedio y redondearlo a un decimal
const promedio = ((nota1 + nota2 + nota3) / 3);

// 3. Variable booleana de aprobación
const aprobo = promedio >= 3;

// 4. Mostrar el resultado con plantilla de texto
console.log(`El aprendiz obtuvo un promedio de ${promedio}. ¿Aprobó? ${aprobo}`);

// Reto adicional: puntos que faltan para llegar a 3.0
const faltan = aprobo ? 0 : (3 - promedio);
console.log(`Puntos que le faltan para aprobar: ${faltan}`);