// objetos en js - json

//declarar un objeto

let person = {
  name: "John",
  age: 30,
  city: "New York",
  Program: {
    name: "adso",
    duration: 21,
    code: 2222,
    ficha: "21212"
  },
  saludar: function(){
    console.log("hola !!!");
  }

};


// acceder a las propiedades del objeto

console.log(person);
console.log(person.age);
console.log(person.Program.ficha);


// acceder a los metodos del objeto

person.saludar();


// modificar las propiedades del objeto

person.name = "Sebastian";
console.log(person.name);


// agregar una nueva propiedad al objeto

person.telephone = "31311313";
console.log(person);


// delete una propiedad del objeto

delete person.telephone;
console.log(person);


// imprimir un solo valor

console.log("este es el nombre de " + person["name"]);


//iteracion o recorrer cada propiedad del elemento - for in

for (let propiedad in person){
    console.log(propiedad);
    console.log(person[propiedad])
}

// //modelo de objeto constructor

//constructores de funciones con objetos

// function personComun(name, age, city, program){
//   this.name = name;
//   this.age = age;
//   this.city = city;
//   this.Program = program;
//   this.saludar = function(name){
//     return("Hola" + name)
//   }
// }

// let person1 = new personComun("sebastian", 27, "paris", "sst");
// console.log(person1);
// console.log(typeof person1);
// console.log(person1.saludar(" sebastian"));