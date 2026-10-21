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
    return("hola!!!")
  }

};

console.log(person);
console.log(person.age);
console.log(person.Program.ficha);
console.log(person.saludar())


//constructores de funciones con objetos

//modelo de objeto constructor
function personComun(name, age, city, program){
  this.name = name;
  this.age = age;
  this.city = city;
  this.Program = program;
  this.saludar = function(name){
    return("Hola" + name)
  }
}

let person1 = new personComun("sebastian", 27, "paris", "sst");
console.log(person1);
console.log(typeof person1);
console.log(person1.saludar(" sebastian"));