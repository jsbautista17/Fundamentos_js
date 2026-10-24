//1. Crea un HTML con un título h1 (id titulo), un párrafo (id mensaje) y una lista vacía ul (idlista).

//2. Con JavaScript cambia el texto del título por el nombre de tu ficha.

let titulo = document.getElementById("titulo");
titulo.textContent = "Analisis Desarrollo de Software"; 


//3. Cambia el color del párrafo y su tamaño de fuente con style.

let mensaje = document.getElementById("mensaje");
mensaje.innerText = "estoy aprendiendo javascript";


mensaje.style.color = "#7700ff";
mensaje.style.fontSize = "50px";
mensaje.style.fontFamily = "Helvetica";



//4. Crea una clase .destacado en un archivo CSS y aplícala al título con classList.add.

titulo.classList.add("destacado");


// 5. Con un arreglo de cinco competencias, genera en la lista un <li> por cada una usando createElement y appendChild.

let tecnologia = ["HTML", "CSS", "JS", "JAVA", "PYTHON"];
let lista = document.getElementById("lista");

for (let tecnologias of tecnologia) {
  let li = document.createElement("li");
  li.innerText = tecnologias;
  lista.appendChild(li);
}


// Reto adicional: Muestra solo los números pares del 1 al 50 usando un for que avance de dos en dos.


let div = document.createElement("div");
div.innerHTML = "<h3>Números pares del 1 al 50:</h3>";

let lista = document.createElement("ul"); 

for (let i = 2; i <= 50; i += 2) {
  let li = document.createElement("li");
  li.innerText = i;          
  lista.appendChild(li);
}

div.appendChild(lista);    
document.body.appendChild(div);