// Objetivo: Pegar um arquivo de texto e transformar em um JSON

// A linha abaixo é a nova forma ES6 para var fs = require('fs');
import fs from 'fs';

// A linha abaixo lê um arquivo de forma Sincrona
let out = fs.readFileSync('data.txt', 'utf8')
  // Esse metodo tira os espaços entre o começo e fim de uma string
  .trim()
  // Divide a cada nova linha em um array
  .split('\n')
  // Cada espaço branco de cada linha se tranforma em um item de um novo array
  .map(line => line.trim().split(' '))
  // Objeto costumer é o objeto que reduce vai retornar
  // line é cada linha do array formado com map
  .reduce((costumer, line) => {
    // Aqui ele diz que o primeiro item da linha deverá ser igual a um array vazio se ele não tiver sido inicializado
    costumer[line[0]] = costumer[line[0]] || []

    costumer[line[0]].push({
      name: line[2],
      price: line[3],
      quantity: line[4]
    })
    return costumer
  }, {})

console.log(JSON.stringify(out, null, 2));

/* Resultado
{
  "matheus": [
    {
      "name": "pizza",
      "price": "80",
      "quantity": "2"
    },
    {
      "name": "xis",
      "price": "200",
      "quantity": "1"
    },
    {
      "name": "knife",
      "price": "10",
      "quantity": "4"
    }
  ],
  "Bruna": [
    {
      "name": "pizza",
      "price": "80",
      "quantity": "1"
    },
    {
      "name": "knife",
      "price": "10",
      "quantity": "2"
    },
    {
      "name": "pot",
      "price": "20",
      "quantity": "3"
    }
  ]
}
*/
