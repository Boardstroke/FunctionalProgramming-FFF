// Um bom exemplo encontrasse nesse link
// https://codepen.io/Universalist/post/currying-functions-in-javascript

// Um jeito sem usar currying
let dragon = (name, size, element) =>
  name + ' é um ' +
  size + ' dragão que cospe ' +
  element + '!'

console.log(dragon('Alduin', "grande", 'fogo e gelo'));

// Usando currying
let dragonB =
  name =>
    size =>
      element =>
        name + ' é um ' +
        size + ' dragão que cospe ' +
        element + '!'

console.log(dragonB('Alduin')("grande")("fogo e gelo"));

// transforma Funções em currying
