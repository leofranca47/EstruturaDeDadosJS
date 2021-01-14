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

function Dictionary(){
    var items = {}

    this.set = function(key, value){
        // adiciona um novo item ao dicionário
        items[key] = value
    }

    this.delete = function(key){
        // remove o valor do dicionário usando a chave
        if(this.has(key)){
            delete items[key]
            return true
        }
        return false
    }

    this.has = function(key){
        // verifica se a chave existe e retorna um booleano
        return items.hasOwnProperty(key)
    }

    this.get = function(key){
        // devolve um valor específico a partir da chave
        return this.has(key) ? items[key] : undefined
    }

    this.clear = function(){
        // remove todos os itens do dicionário
        items = {}
    }

    this.size = function(){
        // retorna a quantidade de elementos contidos no dicionário
        return Object.keys(items).length
    }

    this.key = function(){
        // devolve um array com todas as chaves do dicionário
        return Object.keys(items)
    }

    this.values = function(){
        // devolve um array com todos os valores do dicionário
        var values = []
        keys = Object.keys(items)

        for(var i = 0; i < keys.length; i++){
            values.push(items[keys[i]])
        }
        return values
    }

    this.getItems = function(){
        return items
    }
}

// var dic = new Dictionary()

// dic.set('gandalf', 'gandalf@email.com')
// dic.set('john', 'john@email.com')
// dic.set('tyrion', 'tyrion@email.com')

// console.log(dic.has('john'))

function HashTable(){
    var table = []

    var ValuePair = function(key, value){
        this.key = key
        this.value = value
        this.toString = function(){
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function(key, value){
        // insere elemento
        var position = loseloseHashCode(key)
        
        if(table[position] === undefined){
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key, value))
    }

    // this.put = function(key, value){
    //     // insere elemento
    //     var position = loseloseHashCode(key)
    //     console.log(position + ' ' + key)
    //     table[position] = value
    // }

    this.remove = function(key){
        // remove elemento
        var position = loseloseHashCode(key)

        if(table[position] !== undefined){
            var current = table[position].getHead()

            while(current.next){
                if(current.element.key === key){
                    table[position].remove(current.element)
                    if(table[position].isEmpty()){
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
            if(current.element.key === key){
                table[position].remove(current.element)
                if(table[position].isEmpty()){
                    table[position] = undefined
                }
                return true
            }
        }
        return false
    }

    // this.remove = function(key){
    //     // remove elemento
    //     table[loseloseHashCode(key)] = undefined
    // }

    this.get = function(key){
        // retorna um valor
        var position = loseloseHashCode(key)

        if(table[position] !== undefined){
            var current = table[position].getHead()

            while(current.next){
                if(current.element.key === key){
                    return current.element.value
                }
                current = current.next
            }
            if(current.element.key === key){
                return current.element.value
            }
        }
        return undefined
    }

    // this.get = function(key){
    //     // retorna um valor
    //     return table[loseloseHashCode(key)]
    // }

    var loseloseHashCode = function(key){
        // retorna hash (valor numérico)
        var hash = 0
        for(var i = 0; i < key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    // this.size = function(){
    //     return table.length
    // }

    this.print = function(){
        for(var i = 0; i < table.length; i++){
            if(table[i] !== undefined){
                console.log(i + ' : ' + table[i])
            }
        }
    }
}

var hash = new HashTable()

hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('leo', 'leo@email.com')
hash.put('joao', 'joao@email.com')
hash.put('diego', 'diego@email.com')
hash.put('liliane', 'liliane@email.com')
hash.put('juliano', 'juliano@email.com')
hash.put('davi', 'davi@email.com')
hash.put('ana', 'ana@email.com')
hash.put('jane', 'jane@email.com')
console.log('............')
hash.print()
