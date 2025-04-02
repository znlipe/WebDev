class Pessoa{
    constructor(nome, anoNascimento){
        this.nome = nome;
        //this.idade = idade;
        this.anoNascimento = anoNascimento;
    }
        falar = function(){
            console.log(`Olá, meu nome é ${this.nome} e tenho ` + this.idade() + ` anos`);
            }
        andar = function(){
            console.log(`${this.nome} está andando`);
            }
        relacionar = function(pessoa){
            console.log(`${this.nome} está se relacionando com ${pessoa.nome}`);
            }
        idade = function(){
            var idadeAtual = new Date().getFullYear() - this.anoNascimento;
            return idadeAtual;
        }
        }
        

var numeros = [1,2,3,4,5];
var listaPessoas = new Map();

console.log(numeros);

let pessoa1 = new Pessoa("Felipe", 1998);
let pessoa2 = new Pessoa("Diana", 2004);

listaPessoas.set(0, pessoa1);
listaPessoas.set(1, pessoa2);
listaPessoas.set(2, {nome: "Samuel", idade: 30});
console.log(listaPessoas.get(0).nome + " filho de " + listaPessoas.get(2).nome);

console.log(listaPessoas.get(1).idade())

console.log("Idade de "+ pessoa1.nome + " = "  + pessoa1.idade())
console.log(pessoa2.idade());

pessoa1["falar"]();
pessoa2["andar"]();

//consigo acessar o objeto como se fosse um dicionário
console.log(pessoa1["nome"], pessoa1.idade());
//consigo alterar o valor de uma propriedade
//pessoa1["nome"] = "Felipe Oliveira";
//pessoa1["idade"] = 27;

//console.log(`A idade de ${pessoa1.nome} agora é ${pessoa1.idade}`);


/*
Estudando herança em JS
    A classe Animal herda da classe Pessoa só para fins de estudo, pois não faz sentido, mas foi só para mostrar como funciona a herança em JS e nao ter que reescrever
    nome e ano de nascimento nos atributos
*/
class Animal extends Pessoa{
    constructor(nome,anoNascimento,especie){
        super(nome,anoNascimento);
        this.especie = especie;

        super.idade = function(){
            var idadeAtual = new Date().getFullYear() - this.anoNascimento;
            return idadeAtual * 2 + " anos";
        }
    }
}

let animal1 = new Animal("Rex", 2015, "Cachorro");
console.log("idade do " + animal1.nome + " é " + animal1.idade());