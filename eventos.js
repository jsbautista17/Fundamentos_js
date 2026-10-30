// eventos del mouse

function saludar(){
    alert ("holaaa");
}


boton3.onclick = function (){
    alert("Baby hello ");
}

boton3.onclick = function(event) {
    console.log(event);
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.type);
    console.log(event.currentTarget);
}


// la forma mas adecuada

let boton4 = document.getElementById("boton4");

boton4.addEventListener ("click", function (){
    console.log(" sena !! ");
});

boton4.addEventListener ("mouseover", function (){
    console.log(" ADSO !! ");
});


// fecha actual 

let botonfecha = document.getElementById("botonFecha");
let fecha = document.getElementById("fecha");

botonfecha.addEventListener ("click", function(){
    fecha.innerText = Date();
})


let box = document.getElementById("box");

box.addEventListener("mouseover", function(){
    box.innerText = "mouse encima";
    box.style.background = "green";
})

box.addEventListener("mouseout", function(){
    box.innerText = "mouse afuera";
    box.style.background = "blue";
})

box.addEventListener("mousemove", function(){
    box.innerText = "mouse afuera";
    box.style.background = "blue";
})


// mousemove

let cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(event){
    cursor.innerText = "coordenada x: " + event.clientX + " coordenada y: " + event.clientY;
})


// eventos del teclado

let tecla = document.getElementById("tecla");
let mostrarTecla = document.getElementById("mostrarTecla");

    tecla.addEventListener("keydown", function(event){
        mostrarTecla.innerText = "Tu presionaste la tecla: " + event.key;
    });


// eventos de carga

// function cargarPagina(){
//     alert("ha cargado la pagina completa")
// }


// propagacion de evento: orden de ejeccion

let miDiv = document.getElementById("miDiv");
let miP = document.getElementById("miP");

// miP.addEventListener("click", function(){
//     alert("hiciste clcik en el parrafo");
// })

// miDiv.addEventListener("click", function(){
//     alert("click en el contenedor div");
// }) // bubbling: evento interno al externo

miP.addEventListener("click", function(){
    alert("hiciste clcik en el parrafo");
},true)

miDiv.addEventListener("click", function(){
    alert("click en el contenedor div");
},true) // bubbling: evento externo al interno