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

    this.insertionSort = function(){
        var j, temp
        for(var i = 1; i < array.length; i++){
            j = i
            temp = array[i]
            while(j > 0 && array[j - 1] > temp){
                array[j] = array[j - 1]
                j--
            }
            array[j] = temp
        }
    }

    this.mergeSort = function(){
        array = mergeSortRec(array)
    }

    var mergeSortRec = function(array){
        var length = array.length
        if(length === 1){
            return array
        }
        var mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        rigth = array.slice(mid, length)

        return merge(mergeSortRec(left), mergeSortRec(rigth))
    }

    var merge = function(left, rigth){
        var result = []
        il = 0,
        ir = 0

        while(il < left.length && ir < rigth.length){
            if(left[il] < rigth[ir]){
                result.push(left[il++])
            } else {
                result.push(rigth[ir++])
            }
        }

        while(il < left.length){
            result.push(left[il++])
        }

        while(ir < rigth.length){
            result.push(rigth[ir++])
        }

        return result
    }

    this.quickSort = function(){
        quick(array, 0, array.length -1)
    }

    var quick = function(array, left, rigth){
        var index
        if(array.length > 1){
            index = partition(array, left, rigth)
            if(left < index - 1){
                quick(array, left, index -1)
            }
            if(index < rigth){
                quick(array, index, rigth)
            }
        }
    }

    var partition = function(array, left, rigth){
        var pivot = array[Math.floor((rigth + left) /2)],
        i = left,
        j = rigth

        while(i <= j){
            while(array[i] < pivot){
                i++
            }
            while(array[j] > pivot){
                j--
            }
        }
        if(i <= j){
            swap(array, i, j)
            i++
            j--
        }
    }

    var swap = function(array, index1, index2){
        var aux = array[index1]
        array[index1] = array[index2]
        array[index2] = aux
    }
}

var al = new ArrayList()
al.insert(8)
al.insert(7)
al.insert(6)
al.insert(5)
al.insert(4)
al.insert(3)
al.insert(2)
al.insert(1)
// al.bubbleSort()
// al.selectionSort()
// al.insertionSort()
al.mergeSort()
console.log(al.toString())