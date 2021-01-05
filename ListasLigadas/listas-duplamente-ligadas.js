function DoublyLinkedList(){
    var Node = function(element){
        this.element = element
        this.next = null
        this.prev = null
    }

    var length = 0
    var head = null
    var tail = null

    this.append = function(element){
        //adiciona um elemento no final da lista
        var node = new Node(element),
        current

        if(head === null){
            head = node
            tail = node
        } else{
            current = head

            while(current.next){
                current = current.next
            }

            current.next = node
            tail = node
        }
        length++
    }

    this.insert = function(position, element){
        //adiciona um elemento em uma posição específica
        if(position >= 0 && position <= length){
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position === 0){
                if(!head){
                    head = node
                    tail = node
                } else{
                    node.next = current
                    current.prev = node
                    head = node
                }
            }else if(position === length){
                current = tail
                current.next = node
                node.prev = current
                tail = node
            } else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            length++
            return true
        } else{
            return false
        }        
    }

    this.removeAt = function(position){
        //remove o elemento de uma posição específica
        if(position > -1 && position < length){
            var current = head,
            previous,
            index = 0

            if(position === 0){
                head = current.next

                if(length === 1){
                    tail = null
                } else{
                    head.prev = null
                }
            } else if(position === length -1){
                current = tail
                tail = current.prev
                tail.next = null
            } else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            length--
            return current.element
        } else {
            return null
        }
        
    }

    this.remove = function(element){
        //remove o elemento element
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element){
        //retorna a posição do elemento
        var current = head,
        index = 0

        while(current){
            if(element === current.element){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    this.isEmpty = function(){
        //retorna se está vazia ou não a instancia
        return length === 0
    }

    this.size = function(){
        //retorna o tamanho da instância
        return length
    }

    this.getHead = function(){
        //retorna o primeiro item da lista
        return head
    }

    this.toString = function(){
        //converte em string
        var current = head,
        string = ''

        while(current){
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function(){
        //imprime no console
        console.log(this.toString())
    }
}

var dll = new DoublyLinkedList()
dll.append('João')
dll.append('José')
dll.append('Maria')
dll.insert(0, 'Carlos')
dll.insert(4, 'Lucas')
dll.insert(2, 'Ana')
dll.print()
dll.removeAt(0)
dll.print()
dll.removeAt(2)
dll.print()
dll.removeAt(3)
dll.print()