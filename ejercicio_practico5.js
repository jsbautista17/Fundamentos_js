// ============================================
// ACTIVIDAD PRÁCTICA 5: Repeticiones con sentido
// ============================================

let menu = prompt("Selecciona una opcion:\n1. Tabla de multiplicar\n2. Suma y promedio de notas\n3. Recorrer fichas\n4. Omitir una ficha con continue\n5. Numeros pares del 1 al 50\n0. Salir"
  );

switch (menu) {

    case "1":
      console.log("Tabla de multiplicar:");
      let numero = Number(prompt("Ingresa un numero para ver su tabla:"));
        console.log(`tabla del ${numero}:`);
        for (let i = 1; i <= 10; i++) {
          console.log(`${numero} x ${i} = ${numero * i}`);
        }
      break;


    case "2":
      console.log("Suma y promedio de notas:");
      let suma = 0;
      let cantidad = 0;

      let nota = Number(prompt("Ingresa una nota (0 para terminar):"));

        while (nota !== 0) {
          suma += nota;
          cantidad++;
          nota = Number(prompt("Ingresa otra nota (0 para terminar):"));
        }
        console.log("\n--- Resultados ---");

      console.log(`Notas ingresadas: ${cantidad}`);
      console.log(`Suma: ${suma}`); 

      if (cantidad > 0) {
        console.log(`Promedio: ${(suma / cantidad).toFixed(2)}`);
      } else {
        console.log("No se ingresaron notas.");
      }
      break;


    case "3":
      console.log("Recorriendo fichas:");
      const fichas = ["Ficha A", "Ficha B", "Ficha C", "Ficha D", "Ficha E"];

      let num = 1;
      for (let ficha of fichas) {
        console.log(`${num}. ${ficha}`);
        num++;
      }
      break;


    case "4":
      console.log("Recorriendo fichas y omitiendo 'Ficha C':");
      const fichas2 = ["Ficha A", "Ficha B", "Ficha C", "Ficha D", "Ficha E"];
      let contador = 1;

      for (let ficha of fichas2) {
        if (ficha === "Ficha C") {
          continue; 
        }
        console.log(`${contador}. ${ficha}`);
        contador++;
      }
      break;


    case "5":
      console.log("Numeros pares del 1 al 50:");
      for (let i = 2; i <= 50; i += 2) {
        console.log(i);
      }
      break;


    case "0":
      console.log("¡Hasta luego!");
      break;

    default:
      console.log("Opcion no válida. Intenta de nuevo.");
  }