// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce - Artigo sobre Reduce no MDN

let orders = [
  {amount: 100},
  {amount: 250},
  {amount: 350},
  {amount: 300},
  {amount: 410},
];

// O valor 0 após é funcão é um inicializador do parametro sum e order é o item dado ao array
var total = orders.reduce( (sum, order) => sum + order.amount, 0)

/* Jeito antigo de se fazer
let total = 0;
for (let i = 0; i < orders.length; i++) {
  total += orders[i].amount;
}
*/
console.log(total);
