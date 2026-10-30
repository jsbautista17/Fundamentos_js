let imagenes = ["imag/imagen 1.jpg", "imag/imagen 2.jpg", "imag/imagen 3.jpg"]; // Array con las rutas de las imágenes del carrusel

let btnAnterior = document.getElementById("btnAnterior"); // se guardan los Botones de navegación
let btnSiguiente = document.getElementById("btnSiguiente");

let posicion = 0; // se inicia en la posicion 0 del array

btnSiguiente.addEventListener("click", function(){  // al hacer click haga la funcion 
    let slider = document.getElementById("slider"); // Elemento de la imagen del carrusel
    posicion++; // va sumando de a 1 cada posicion
    if (posicion >= imagenes.length){ // Si se pasa del final del array, vuelve al inicio.
        posicion = 0; // la posicion inicia en 0
    }
    slider.src = imagenes[posicion]; // Muestra la imagen correspondiente a la posición actual
});

btnAnterior.addEventListener("click", function(){
    let slider = document.getElementById("slider");
    posicion--; // va restando de a 1 cada posicion
    if (posicion < 0){ // Si se pasa del inicio, va a la última imagen
        posicion = imagenes.length-1; // se corrige la posición
    }
    slider.src = imagenes[posicion]; // Muestra la imagen correspondiente a la posición actual
});


