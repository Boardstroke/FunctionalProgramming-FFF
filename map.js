// Objetivo: Criar um novo array apartir do array Animals, porém apenas com o nome dos animais

var Animals = [
  {name: "Flufy", species:"dog"},
  {name: "Donna", species:"cat"},
  {name: "Samanta", species:"cat"},
  {name:"Rex", species:"dog"},
  {name:"Herold", species:"fish"},
  {name:"Jimmy", species:"bird"}
];

var name = Animals.map( (animal) => animal.name);


Old style de fazer isso
// var name = [];
// for (var i = 0; i < Animals.length; i++)
// name.push(Animals[i].name);

console.log(name);


// Objetivo: Obter a raiz quadrada do numero no array

var n = [1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400];

var sqrt = n.map((number) => Math.sqrt(number));
console.log(sqrt);
