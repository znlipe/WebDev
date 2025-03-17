var novoMapa = new Map(); // Cria um novo mapa


novoMapa.set('17/03/2025 - 20:21 - URL', {title: 'Titulo do site', url: 'url'}); // Adiciona um novo elemento ao mapa

var resultado = novoMapa;
novoMapa.get('17/03/2025 - 20:21 - URL'); // Retorna o valor associado a chave passada como argumento
console.log(resultado)