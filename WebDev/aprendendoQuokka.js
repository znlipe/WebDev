var novoMapa = new Map(); // Cria um novo mapa
var novoSet = new Set(); // Cria um novo set

novoMapa.set('17/03/2025 - 20:21 - URL', {title: 'Titulo do site', url: 'url'}); // Adiciona um novo elemento ao mapa

var resultado = novoMapa;
novoMapa.get('17/03/2025 - 20:21 - URL'); // Retorna o valor associado a chave passada como argumento
console.log(resultado)

for (i = 0; i <=8; i++) {
  novoSet.add(i);
  console.log(i);
   if(i % 2 == 0)
    {
    console.log(i + " é par");
    }else
    {
    console.log(i + " é ímpar");
    }
}

//estudo de array utilizando fibonacci como exemplo
// Fibonacci é uma sequência de números onde cada número é a soma dos dois anteriores
const fibonacci = [];

fibonacci[0] = 1;
fibonacci[1] = 1;
// Calcula os próximos números de Fibonacci ate 20
for (let i = 2; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci); // Exibe a sequência de Fibonacci

for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
  }

/*Métodos padrão para manipulação de array
    ? concat: concatena dois ou mais arrays
    ? length: retorna o número de elementos na lista
    ? push: Adiciona elemento na última posição do array
    ? pop: remove o último elemento da lista
    ? shift: remove o primeiro elemento da lista
    ? unshift: adiciona elemento na primeira posição da lista
    ? splice: adiciona valor em posição específica, permitindo remover outros
    ? slice: retorna uma cópia do array
    ? at(pos) ou [pos]: retorna elemento de posição especificada por pos
*/
