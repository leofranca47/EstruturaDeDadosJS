function Queue(){
    var items = [];

    this.enqueue = function(element){
        //adiciona um novo item
        items.push(element);
    }

    this.dequeue = function(){
        //remove um item
        return items.shift();
    }

    this.front = function(){
        //retorna o primeiro elemento da fila
        return items [0];
    }

    this.isEmpty = function(){
        //verifica se a fila está vazia
        return items.length === 0;
    }

    this.size = function(){
        //retorna o tamanho da fila
        return items.length;
    }

    this.print = function(){
        //imprimir a fila no console
        console.log(items.toString());
    }
}

// // var fila = new Queue();

// // fila.enqueue('Carlos');
// // fila.enqueue('Ana');
// // fila.enqueue('Lucas');

// // fila.print();

// function PriorityQueue(){
//     var items = [];

//     function QueueElemant(element, priority){
//         this.element = element;
//         this.priority = priority;
//     }

//     this.enqueue = function(element, priority){
//         var queueElemant = new QueueElemant(element, priority);
//         var added = false;

//         for(var i = 0; i < items.length; i++){
//             if(queueElemant.priority < items[i].priority){
//                 items.splice(i, 0, queueElemant);
//                 added = true;
//                 break
//             }
//         }
//         if(!added){
//             items.push(queueElemant);
//         }

//     }

//     this.dequeue = function(){
//         return items.shift();
//     }

//     this.print = function(){
//         for(var i = 0; i < items.length; i++){
//             console.log(items[i].element + ' '+ items.priority);
//         }
//     }

// }

// var pqueue = new PriorityQueue();

// pqueue.enqueue('Carlos', 2);
// pqueue.enqueue('Ana', 1);
// pqueue.enqueue('Lucas', 1);
// pqueue.print();

function hotPotato(nameList, num){
    var queue = new Queue();

    for(var i =0; i < nameList.length; i++){
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';

    while(queue.size() > 1){
        for(var i = 0; i < num; i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' was eliminated from the Hot Potato game');
    }
    return queue.dequeue();
}

var names = ['joão', 'josé', 'maria', 'ana', 'lucas'];
var winner = hotPotato(names, 7);
console.log('The winner is: '+ winner);