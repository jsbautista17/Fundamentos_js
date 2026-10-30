let entrada = document.getElementById("entrada");
let btnAgregar = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");
let contador = document.getElementById("contador");
let contadorCaracteres = document.getElementById("contadorCaracteres");
let filterInput = document.getElementById("filterInput");

let total = 0;
let nombres = []; // Arreglo para evitar duplicados

// Contador de caracteres en tiempo real
function actualizarCaracteres() {
    contadorCaracteres.textContent = "Caracteres: " + entrada.value.length;
}

entrada.addEventListener("input", actualizarCaracteres);

// Función para agregar aprendiz
function agregarAprendiz() {
    let nombre = entrada.value.trim(); //quita los espacios en 

    if (nombre === "") {
        alert("Escribe un nombre");
        return;
    } else if (nombres.includes(nombre)) {  // evitar nombres repetidos
        alert("Ese nombre ya está en la lista");
        return;
    } else 
        {nombres.push(nombre); //guardamos el nombre en el arreglo
    }

    let li = document.createElement("li");
    li.textContent = nombre;

    // Función para tachar
    function tachar() {
        li.classList.toggle("tachado");
    }
    li.addEventListener("click", tachar);

    // Botón Eliminar (reto adicional)
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    function eliminar(eliminar) {
        eliminar.stopPropagation(); // Evita que se active el tachado

        // Quitar del arreglo
        let index = nombres.indexOf(nombre);
        if (index > -1) {
            nombres.splice(index, 1);
        }

        li.remove();

        // Actualizar contador
        total--;
        contador.textContent = "Aprendices: " + total;
    }

    btnEliminar.addEventListener("click", eliminar);
    li.appendChild(btnEliminar);

    lista.appendChild(li);

    total++;
    contador.textContent = "Aprendices: " + total;

    entrada.value = "";
    contadorCaracteres.textContent = "Caracteres: 0";
    entrada.focus();
}


btnAgregar.addEventListener("click", agregarAprendiz);

filterInput.addEventListener("keyup", function () {
    let term = filterInput.value.toLowerCase();
    let items = lista.getElementsByTagName("li");

    Array.from(items).forEach(function (item) {
        if (item.textContent.toLowerCase().indexOf(term) !== -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});
