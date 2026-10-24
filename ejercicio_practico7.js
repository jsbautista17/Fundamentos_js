// Arreglo de objetos
let aprendices = [
    { nombre: "Laura", nota: 4.5 },
    { nombre: "Andrés", nota: 2.8 },
    { nombre: "Camila", nota: 3.9 },
    { nombre: "Diego", nota: 3.0 },
    { nombre: "Jhon", nota: 4.0 }
];


// Función para mostrar cada aprendiz

function verAprendiz(aprendiz) {
    console.log(`Aprendiz: ${aprendiz.nombre} - Nota: ${aprendiz.nota}`);
}


// 1 y 2. Listar todos con forEach

console.log("\n LISTADO DE TODOS LOS APRENDICES ");
aprendices.forEach(verAprendiz);


// 3. Filtrar solo los aprobados (nota >= 3.0)

function esAprobado(aprendiz) {
    return aprendiz.nota >= 3.0;
}

let aprobados = aprendices.filter(esAprobado);

console.log("\n APRENDICES APROBADOS ");
aprobados.forEach(verAprendiz);
console.log(`TOTAL APROBADOS: ${aprobados.length} DE ${aprendices.length}`);


// 4. Nombres en mayúscula con map

function nombresMayusculas(aprendiz) {
    return aprendiz.nombre.toUpperCase();
}

let nombresEnMayuscula = aprendices.map(nombresMayusculas);

console.log("\n NOMBRES EN MAYÚSCULA ");
console.log(nombresEnMayuscula);


// 5. Calcular promedio con for...of

let suma = 0;

for (const aprendiz of aprendices) {
    suma = suma + aprendiz.nota;
}

let promedio = suma / aprendices.length;

console.log("\n PROMEDIO GENERAL ");
console.log(`Promedio: ${promedio.toFixed(2)}`);


// 6. Agregar un sexto aprendiz con push y volver a calcular el promedio

aprendices.push({ nombre: "Sebastian", nota: 4.2 });

let suma2 = 0;

for (const aprendiz of aprendices) {
    suma2 = suma2 + aprendiz.nota;
}

let promedio2 = suma2 / aprendices.length;

console.log("\n PROMEDIO DESPUÉS DE AGREGAR A SEBASTIAN ");
console.log(`Nuevo promedio: ${promedio2.toFixed(2)}`);


//  RETO ADICIONAL 
// Encontrar al aprendiz con la nota más alta

let mejorAprendiz = aprendices[0]; 

for (const aprendiz of aprendices) {
    if (aprendiz.nota > mejorAprendiz.nota) {
        mejorAprendiz = aprendiz;
    }
}

console.log("\n APRENDIZ CON LA NOTA MÁS ALTA ");
console.log(`${mejorAprendiz.nombre} con nota ${mejorAprendiz.nota}`);