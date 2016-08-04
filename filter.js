// O objeivo desse programa é fazer um filtro em array em um dado especifíco

var Animals = [
  {name: "Flufy", species:"dog"},
  {name: "Donna", species:"cat"},
  {name: "Samanta", species:"cat"},
  {name:"Rex", species:"dog"},
  {name:"Herold", species:"fish"},
  {name:"Jimmy", species:"bird"}
];


var names = ['Matheus', 'Bruna', 'Pietro', 'Catussa', 'Alisson'];

var myName = names.filter( (nome) => nome === 'Matheus');

var cats = Animals.filter( (animal) => animal.species === 'cat' )


// Metodo convencional de encontrar alguma coisa dentro de um array
/*
  var cats = [];
  for (var i = 0; i < Animals.length; i++) {
    if(Animals[i].species === 'cat')
      cats.push(Animals[i]);
  }
*/

console.log(cats);
console.log(myName);

// O metodo unfilter faz o oposto de filter
