// ##### Recursividade ##### Arvores Binarias #####
/* A recursividade é uma técnica de programação onde uma função chama a si mesma para resolver um problema.
Isso é útil para resolver problemas que podem ser divididos em subproblemas menores e semelhantes.

Fonte a ser utilizada nesse estudo: 
• https://github.com/loiane/javascript-datastructures-algorithms/blob/main/src/js/data-structures/binary-search-tree.js
• https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/trees/binary-tree-node.js

*/

// Exemplo de recursão: calcular o fatorial de um número
function fatorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1; // Caso base: o fatorial de 0 ou 1 é 1
    }
    return n * fatorialRecursivo(n - 1); // Chamada recursiva: n * fatorial de (n-1)
}

console.log(fatorialRecursivo(5)); // Saída: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

// Exemplo de recursão: calcular a soma dos números de 1 a n
function somaRecursiva(n) {
    if (n === 1) {
        return 1; // Caso base: a soma de 1 é 1
    }
    return n + somaRecursiva(n - 1); // Chamada recursiva: n + soma de (n-1)
}

console.log(somaRecursiva(5)); // Saída: 15 (1 + 2 + 3 + 4 + 5 = 15)

// Exemplo de recursão: calcular a sequência de Fibonacci
function fibonacciRecursivo(n) {
    if (n === 0) {
        return 0; // Caso base: o 0º número de Fibonacci é 0
    }
    if (n === 1) {
        return 1; // Caso base: o 1º número de Fibonacci é 1
    }
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2); // Chamada recursiva: soma dos dois números anteriores
}
console.log(fibonacciRecursivo(5)); // Saída: 5 (0, 1, 1, 2, 3, 5)