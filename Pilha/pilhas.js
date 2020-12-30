//estrutura da pilha
// function Stack(){
//     var items = [];

//     this.push = function(element){
//         //adiciona um novo item à pilha
//         items.push(element);
//     }

//     this.pop = function(){
//         //remover o item no topo da pilha
//         return items.pop()
//     }

//     this.peek = function(){
//         //devolve o elemento que está no topo da pilha
//         return items[items.length - 1];
//     }

//     this.isEmpty = function(){
//         //informa se a pilha está vazia ou não
//         return items.length === 0;
//     }

//     this.clear = function(){
//         //limpa a pilha
//         items = [];
//     }

//     this.size = function(){
//         //informa o tamanho da pilha
//         return items.length;
//     }

//     this.print = function(){
//         //imprime a pilha no console
//         console.log(items.toString())
//     }
// }

// var pilha = new Stack();
// console.log(pilha.isEmpty());
// pilha.print();
// pilha.push(2);
// pilha.print();
// pilha.push(4);
// pilha.print();
// pilha.push(6);
// pilha.print();
// pilha.push(8);
// pilha.print();
// pilha.push(10);

// pilha.print();

// pilha.pop();
// pilha.print();
// pilha.pop();
// pilha.print();
// pilha.pop();
// pilha.print();
// pilha.pop();
// pilha.print();
// pilha.pop();

// pilha.print();
// console.log(pilha.isEmpty());

//fim da estrutura de pilha

//algoritmo de exemplo, converte numero decimal para binario

// function dec2Bin(decNumber){
//     var restStack = [],
//     rest,
//     binaryString = '';

//     while(decNumber > 0){
//         rest = Math.floor(decNumber % 2); //resultado possivel 0 or 1
//         restStack.push(rest);
//         decNumber = Math.floor(decNumber / 2);
//     }

//     //ler de tras para frente o array restStack
//     while(restStack.length > 0){
//         binaryString += restStack.pop().toString();
//     }

//     return binaryString;
// }

// console.log(dec2Bin(30));

//converte para qualquer base utilizando pilha

// function baseConverter(decNumber, base){
//     var restStack = [],
//     rest,
//     baseString= '',
//     digits = '0123456789ABCDEF';

//     while(decNumber > 0){
//         rest = Math.floor(decNumber % base);
//         restStack.push(rest);
//         decNumber = Math.floor(decNumber / base);
//     }

//     while(restStack.length > 0){
//         baseString += digits[restStack.pop()];
//     }

//     return baseString;
// }

// console.log(baseConverter(45, 16));
