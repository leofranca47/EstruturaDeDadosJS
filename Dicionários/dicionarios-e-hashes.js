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

var dic = new Dictionary()

dic.set('gandalf', 'gandalf@email.com')
dic.set('john', 'john@email.com')
dic.set('tyrion', 'tyrion@email.com')

console.log(dic.has('john'))