function ArrayList(){
    var array = []

    this.insert = function(item){
        array.push(item)
    }

    this.toString = function(){
        return array.join()
    }

    this.bubbleSort = function(){
        for(var i = 0; i < array.length - 1; i++){
            for(var j = 0; j < array.length - 1; j++){
                if(array[j] > array[j + 1]){
                    swap(array, j, j + 1)
                }
            }
        }
    }

    this.selectionSort = function(){
        var indexMin
        for(var i = 0; i < array.length - 1; i++){
            indexMin = i
            for(var j = i; j < array.length; j++){
                if(array[indexMin] > array[j]){
                    indexMin = j
                }
            }
            if(i !== indexMin){
                swap(array, i, indexMin)
            }
        }
    }

    var swap = function(array, index1, index2){
        var aux = array[index1]
        array[index1] = array[index2]
        array[index2] = aux
    }
}

var al = new ArrayList()
al.insert(5)
al.insert(4)
al.insert(3)
al.insert(2)
al.insert(1)
// al.bubbleSort()
al.selectionSort()
console.log(al.toString())