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

function Graph(){
    var vertices = []
    var adjList = new Dictionary()

    this.addVertex = function(v){
        vertices.push(v)
        adjList.set(v, [])
    }

    this.addEdge = function(v, w){
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

    this.toString = function(){
        var s = ''
        for(var i = 0; i < vertices.length; i++){
            s += vertices[i] + ' -> '
            var neighbors = adjList.get(vertices[i])
            for(var j = 0; j < neighbors.length; j++){
                s += neighbors[j] + ' '
            }
            s += '\n'
        }
        return s
    }
}

var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for(var i = 0; i < myVertices.length; i++){
    graph.addVertex(myVertices[i])
}

graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
graph.addEdge('C','D')
graph.addEdge('C','G')
graph.addEdge('D','G')
graph.addEdge('D','H')
graph.addEdge('B','E')
graph.addEdge('B','F')
graph.addEdge('E','I')

console.log(graph.toString())