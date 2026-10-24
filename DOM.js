// document object model (DOM)

// seleccionar un elemento por su id

let tituloHeader = document.getElementById("tituloHeader");
console.log(tituloHeader);
console.log(typeof tituloHeader);


// seleccionar un elemento por su etiquita

let parrafo = document.getElementsByTagName("p");
console.log(parrafo);
console.log(typeof parrafo);



// seleccionar un elemento por su clase

let descripcionParrafo = document.getElementsByClassName("descripcion");
console.log(descripcionParrafo);
console.log(typeof descripcionParrafo);



//seleccionar un elemeto por su selector css
//selecciona el primer elemento que cumpla con el selector
let parrafoSelector = document.querySelector(".descripcion"); //CLASE
let tituloSena = document.querySelector("#tituloSena"); //ID

console.log(parrafoSelector);
console.log(tituloSena);
console.log(typeof parrafoSelector);


//Selecionar todos los elementos con el queryselectorall

let allparrafos = document.querySelectorAll(".descripcion");
console.log(allparrafos);


// -----------modificar los atributos de los elementos del DOM------------

// cambiar el texto de un elemento 
let subtituloSena = document.getElementById("subtituloSena");
subtituloSena.textContent = "ADSO"; 


// Cambiar el estilo de un elemento

tituloHeader.style.color = "#39A900";
tituloHeader.style.fontSize = "50px";
tituloHeader.style.fontFamily = "Helvetica";


parrafo[0].style.color = "purple"


// agregar y quitar o alternar una clase de css a un html mediante js

let contactanos = document.getElementById("contactanos");
contactanos.classList.add("destacado");

let contactanos = document.getElementById("contactanos");
contactanos.classList.remove("destacado");
   
let contactanos = document.getElementById("contactanos");
contactanos.classList.toggle("destacado");


// cambiar el atributo src de una imagen del html

let logoSena = document.getElementById("logoSena");
logoSena.src = "Logo_configuracion.png"; 


// cmabiar la propiedad href de un enlace

let mylink = document.getElementById("mylink");
mylink.href = "https://betowa.sena.edu.co/";


// crear un elemento de lista y agregarlo en el DOM

let lista = document.getElementById("lista");

let tecnologias = document.createElement("li");

tecnologias.innerText = "javascript";

lista.appendChild(tecnologias);


// insertar nuevas etiquetas html con js

let div = document.createElement("div");

div.innerHTML = `

        <h1> mas codigo html </h1>
        <p> mucho mas codigo html </p>
        <img src="logo_sena2023.png" />

`;

document.body.appendChild(div); 


// eliminar un elemento del html

let divPadre = document.getElementById("divPadre");
let tituloHijo = document.getElementById("tituloHijo");

divPadre.removeChild(tituloHijo);


//reemplazar un elemento html

let nuevoTitulo = document.createElement("h1");
nuevoTitulo.innerText = "este es un titulo nuevo que reemplaza al viejo"

let tituloHijo2 = document.getElementById("tituloHijo2");

divPadre.replaceChild(nuevoTitulo, tituloHijo2);