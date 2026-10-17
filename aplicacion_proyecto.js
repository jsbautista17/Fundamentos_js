calcularVencimiento

function calcularVencimiento(nombre , anioVencimiento){
    let fecha = new Date().getFullYear() - anioVencimiento;
    console.log(`el documento ${nombre} se vence en el año ${fecha}`)
}

calcularVencimiento("poliza", 2032);
