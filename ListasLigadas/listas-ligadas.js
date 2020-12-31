function LinkedList(){
    var Node = function(element){
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element){
        //adiciona um elemento no final da lista
        var node = new Node(element),
        current

        if(head === null){
            head = node
        } else{
            current = head

            while(current.next){
                current = current.next
            }

            current.next = node
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
                node.next = current
                head = node
            } else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
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
            } else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else{
            return null
        }
    }

    this.remove = function(element){
        //remove o elemento element
    }

    this.indexOf = function(element){
        //retorna a posição do elemento
    }

    this.isEmpty = function(){
        //retorna se está vazia ou não a instancia
    }

    this.size = function(){
        //retorna o tamanho da instância
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

var ll = new LinkedList()
ll.append('joão')
ll.append('jose')
ll.append('maria')
ll.print()
ll.removeAt(1)
ll.print()
ll.insert(0, 'carlos')
ll.print()
ll.insert(2, 'ana')
ll.print()