// Lista encadeada:
    // • Uma lista encadeada é uma estrutura de dados linear onde cada elemento (nó) contém um ponteiro para o próximo nó na lista.

/*  
• Os seguintes métodos devem ser suportados:
    • add(e): insere um elemento no final da lista
    • add(index, e): insere um elemento em determinada posição (index) da lista
    • get(index)/set(index, e): get/set o elemento na posição index
    • remove(e): remove o elemento da lista
    • isEmpty(): retorna true se a lista está vazia
    • size(): retorna o número de elementos armazenados na lista
    • contains(e): retorna true se a lista contém o elemento
    • indexOf(e): retorna a posição onde o elemento está na lista
    • clear(): remove todos os elementos da lista
    • print(): imprime todos os elementos da lista
    • getFirst(): retorna o primeiro elemento da lista
    • getLast(): retorna o último elemento da lista

    *Posso pesquisar por Loiane Groner: https://github.com/loiane/javascript-datastructures-algorithms para ver mais metodos na lista encadeada.
*/


class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.count = 0;
        this.header = null;
        this.tail = null;
    }

    add(element){
        if(this.count == 0){
            this.header = this.tail = element;
        } 
        else
            this.tail.next = element;
            this.tail = element;
        this.count++;
    }  
    

    print(){
        var aux = this.header;
        while(aux != null){
            console.log(aux.element);
            aux = aux.next;
        }
    }

    size(){
        return this.count;
    }

    getFirst(){
        return this.header;
    }

    getLast(){
        return this.tail;
    }

    clear(){
        this.header = null;
        this.tail = null;
        this.count = 0;
        console.log("Passando pelo método clear()");
    }

    remove(element){
        if(this.count == 0) 
            return false;
        var aux = this.header;
        var prev = null;
        while(aux != null){
            if(aux.element == element){
                if(prev == null){
                    this.header = aux.next;
                } else {
                    prev.next = aux.next;
                }
                if(aux == this.tail){
                    this.tail = prev;
                }
                this.count--;
                return true;
            }
            prev = aux;
            aux = aux.next;
        }
        return false; // elemento não encontrado
    }
}

var myLL = new LinkedList();
    myLL.add(new Node(1));
    myLL.add(new Node(2));
    myLL.add(new Node(4));
    myLL.add(new Node(3));
    myLL.add(new Node(6));


    console.log("Tamanho da lista encadeada = " + myLL.size());
    myLL.print(); // mostra todos os elementos da lista.
    console.log("Primeiro elemento da lista encadeada = " + myLL.getFirst().element);
    myLL.remove(3);
    myLL.remove(4)
    myLL.print(); // mostra todos os elementos da lista.
    console.log("Último elemento da lista encadeada = " + myLL.getLast().element);
    myLL.clear(); // limpa a lista encadeada
    console.log("Tamanho da lista encadeada = " + myLL.size());

