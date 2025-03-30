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
    console.log(i + " � par");
    }else
    {
    console.log(i + " � �mpar");
    }
}

//estudo de array utilizando fibonacci como exemplo
// Fibonacci � uma sequ�ncia de n�meros onde cada n�mero � a soma dos dois anteriores
const fibonacci = [];

fibonacci[0] = 1;
fibonacci[1] = 1;
// Calcula os pr�ximos n�meros de Fibonacci ate 20
for (let i = 2; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci); // Exibe a sequ�ncia de Fibonacci

for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
  }

/*M�todos padr�o para manipula��o de array
    ? concat: concatena dois ou mais arrays
    ? length: retorna o n�mero de elementos na lista
    ? push: Adiciona elemento na �ltima posi��o do array
    ? pop: remove o �ltimo elemento da lista
    ? shift: remove o primeiro elemento da lista
    ? unshift: adiciona elemento na primeira posi��o da lista
    ? splice: adiciona valor em posi��o espec�fica, permitindo remover outros
    ? slice: retorna uma c�pia do array
    ? at(pos) ou [pos]: retorna elemento de posi��o especificada por pos
*/


// Criacao de dicionarios (Maps) utilizando exemplo de contatos

const contatos = new Map(); // Cria um novo mapa

contatos.set(0, {nome: 'Felipe', cargo: 'Desenvolvedor', idade: 25}); // Adiciona elemento 0 ao mapa
contatos.set(1, {nome: 'Bruno', cargo: 'Desenvolvedor PL', idade: 29}); // Adiciona elemento 1 ao mapa
contatos.set("Desenvolvedor", {nome: 'Felipe', cargo: 'Desenvolvedor', idade: 25}); // Adiciona elemento 2 ao mapa com chave string
contatos.set("Desenvolvedor PL", {nome: 'Bruno', cargo: 'Desenvolvedor PL', idade: 29}); // Adiciona elemento 3 ao mapa com chave string

contatos.get(0); // Retorna o valor associado a chave 0
contatos.get(1); // Retorna o valor associado a chave 1 
contatos.get("Desenvolvedor"); // Retorna o valor associado a chave "Desenvolvedor"
contatos.get("Desenvolvedor PL"); // Retorna o valor associado a chave "Desenvolvedor PL"

console.log(contatos.get(0)); // Exibe o elemento 0 do mapa
console.log(contatos.get("Desenvolvedor PL")); // Exibe o elemento 3 do mapa 
contatos.get(0).nome; // Retorna o nome do elemento 0 do mapa
contatos.get(0).cargo; // Retorna o cargo do elemento 0 do mapa


for(i = 0; i < contatos.size; i++){
  console.log(contatos.get(i));
  } 
// laco para exibir os elementos do mapa, porem os elementos com chave string n�o s�o exibidos
// Notas: O correto � utilizar o forEach para percorrer o mapa, pois o for n�o funciona corretamente com o Map.

// Exemplo de forEach para percorrer o mapa
contatos.forEach((key, value) => {
  console.log(key, value);
  });