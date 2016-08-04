// Bom closure são complicados então o melhor a fazer é ler sobre em:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

var me = 'Bruce Wayne'
function greetMe() {
  console.log('Hello, ' + me + '!')
}
greetMe() // Hello, Bruce Wayne!
