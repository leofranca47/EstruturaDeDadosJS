function Set(){
    var items = {}

    this.add = function(value){
        // adiciona um novo item ao conjunto
        if(!this.has(value)){
            items[value] = value
            return true
        }
        return false
    }

    this.delete = function(value){
        // remove um valor do conjunto
        if(this.has(value)){
            delete items[value]
            return true
        }
        return false
    }

    this.has = function(value){
        // devolve se o valor existe ou não
        return items.hasOwnProperty(value)
    }

    this.clear = function(){
        // remove todos os itens do conjunto
        items = {}
    }

    this.size = function(){
        // retorna o tamanho do conjunto
        return Object.keys(items).length
    }

    this.values = function(){
        // retorna um array com todos os valores do conjunto
        var values = [],
        keys = Object.keys(items)
        for(var i = 0; i < keys.length; i++){
            values.push(items[keys[i]])
        }
        return values
    }

    this.union = function(otherSet){
        var unionSet = new Set(),
        values = this.values()

        for(var i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }

        values = otherSet.values()

        for(var i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }

        return unionSet
    }

    this.intersection = function(otherSet){
        var intersectionSet = new Set(),
        values = this.values()

        for(var i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    this.difference = function(otherSet){
        var differenceSet = new Set(),
        values = this.values()

        for(var i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }
        }

        otherValues = otherSet.values()

        for(var i = 0; i < otherValues.length; i++){
            if(!this.has(otherValues[i])){
                differenceSet.add(otherValues[i])
            }
        }
        return differenceSet
    }

    this.print = function(value){
        console.log(value)
    }
}

// var set = new Set()

// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)
// set.add(4)
// set.add(4)

// set.delete(4)
// // set.clear()

// set.print(set.values())
// set.print(set.size())

// usando o metodo union

// var setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)

// var setB = new Set()
// setB.add(3)
// setB.add(4)
// setB.add(5)
// setB.add(6)

// var unionAB = setA.union(setB)
// console.log(unionAB.values())

// var setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)

// var setB = new Set()
// setB.add(2)
// setB.add(3)
// setB.add(4)

// var intersectionAB = setA.intersection(setB)
// console.log(intersectionAB.values())

var setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

var setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
setB.add(8)

var differenceAB = setA.difference(setB)
console.log(differenceAB.values())