// Variables 
let titulo = "";
let fecha = "";

// Calcular días restantes
function diasRestantes(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const fechaEvento = new Date(fecha + "T00:00:00");
  const diferencia = fechaEvento - hoy;
  return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}

// Texto según los días
function textoDias(dias) {
  if (dias === 0) return "¡HOY!";
  if (dias === 1) return "Falta 1 dia";
  if (dias > 1) return `Faltan ${dias} dias`;
  if (dias === -1) return "Vencio ayer";
  return `Vencio hace ${Math.abs(dias)} dias`;
}

// Agregar recordatorio
function agregar() {
  titulo = prompt("Escribe el titulo del recordatorio:");
  if (!titulo) {
    console.log("❌ Cancelado o sin titulo");
    return;
  }

  fecha = prompt("Escribe la fecha (formato YYYY-MM-DD):\nEjemplo: 2027-10-20");
  if (!fecha) {
    console.log("❌ Cancelado o sin fecha");
    return;
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
    console.log("❌ Formato de fecha incorrecto. Usa YYYY-MM-DD");
    return;
  }

  const dias = diasRestantes(fecha);
  console.log(`✅ Guardado: "${titulo}" → ${textoDias(dias)} para vencer`);
}

// Ver el recordatorio
function ver() {
  if (!titulo || !fecha) {
    console.log("📭 No hay ningun recordatorio guardado");
    return;
  }

  const dias = diasRestantes(fecha);
  console.log("📋 Recordatorio actual:");
  console.log(`   Título: ${titulo}`);
  console.log(`   Fecha: ${fecha}`);
  console.log(`   ${textoDias(dias)}`);
}

// Borrar el recordatorio
function borrar() {
  titulo = "";
  fecha = "";
  console.log("🗑️ Recordatorio eliminado");
}

// Menú
function iniciar() {
  let salir = false;

  while (!salir) {
    const opcion = prompt(`📅 MENÚ DE RECORDATORIOS
    1. Agregar Fecha
    2. Ver Fechas
    3. Borrar Fechas
    4. Salir`
    );

    console.log("");

    switch (opcion) {
      case "1":
        agregar();
        break;
      case "2":
        ver();
        break;
      case "3":
        borrar();
        break;
      case "4":
        console.log("👋 Hasta luego");
        salir = true;
        break;
      default:
        console.log("❌ Opción no válida");
    }
  }
}

// Iniciar
console.log("✅ Fecha programada");
iniciar();