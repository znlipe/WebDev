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