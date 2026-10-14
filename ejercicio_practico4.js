let menu = prompt("1. Ver horario \n2. Ingresar nota del aprendiz \n3. Salir");

switch (menu) {
    case "1":
        console.log("El horario es de 6:00 pm a 10:00 pm");
        break;

    case "2":
        let nota = Number(prompt("Ingrese la nota del aprendiz: "));

        if (nota >= 0 && nota <= 5) {
            console.log("La nota es valida");

            if (nota >= 4.5) {
                console.log("Excelente");
            } else if (nota >= 3.5) {
                console.log("Bueno");
            } else if (nota >= 3.0) {
                console.log("Aceptable");
            } else {
                console.log("Debe reforzar");
            }
        } else {
            console.log("La nota no es valida");
        }
        break;

    case "3":
        console.log("Gracias por usar el programa");
        break;

    default:
        console.log("Opcion no valida");
        break;
}