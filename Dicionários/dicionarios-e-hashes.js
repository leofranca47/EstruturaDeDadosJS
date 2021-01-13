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

    this.put = function(key, value){
        // insere elemento
        var position = loseloseHashCode(key)
        console.log(position + ' ' + key)
        table[position] = value
    }

    this.remove = function(key){
        // remove elemento
        table[loseloseHashCode(key)] = undefined
    }

    this.get = function(key){
        // retorna um valor
        return table[loseloseHashCode(key)]
    }

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
console.log('............')
hash.print()
