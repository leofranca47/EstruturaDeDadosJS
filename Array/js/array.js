// var avgTemp = []

// avgTemp[0] = 31.9
// avgTemp[1] = 35.3
// avgTemp[2] = 42
// avgTemp[3] = 38
// avgTemp[4] = 25.5

// //console.log(avgTemp[3])

// var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thurday', 'Friday', 'Saturday']


// for(var i = 0; i < daysOfWeek.length; i++){
//     //console.log(daysOfWeek[i])
// }

// var fibonacci = []
// fibonacci[0] = 0
// fibonacci[1] = 1
// fibonacci[2] = 1

// for(var i = 3; i < 20; i++){
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
// }

// for(var i = 0; i < fibonacci.length; i++){
//     console.log(fibonacci[i])
// }

// var numbers = [0,1,2,3,4,5,6,7,8,9]
// //não é a melhor pratica de inserir info no array
// numbers[numbers.length] = 10
// numbers[numbers.length] = 11
// //melhor pratica
// numbers.push(12)
// numbers.push(13)
// numbers.push(14)
// numbers.push(15)
// numbers.push(16)

// numbers.unshift(-1)
// numbers.unshift(-2)
// numbers.unshift(-3)
// numbers.unshift(-4)

// //remover fim do array
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()

// //remover do inicio do array
// numbers.shift()
// numbers.shift()
// numbers.shift()
// numbers.shift()

// //splice seleciona a posição e exclui a quantidade indicada
// numbers.splice(3, 3)
// console.log(numbers)

// //inserindo elementos com splice apartir da posição selecionada
// numbers.splice(3, 0, 3,4,5)
// console.log(numbers)

// //arrays bidimensionais
// var avgTempWeek = []

// var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
// var avgTempWeek2 = [41, 29, 21.2, 19.5, 17, 33.8, 58]

// avgTempWeek[0] = avgTempWeek1
// avgTempWeek[1] = avgTempWeek2

// for(var i = 0; i < avgTempWeek.length; i++){
//     for(var a = 0; a < avgTempWeek[i].length; a++){
//         console.log(avgTempWeek[i][a])
//     }
// }

//arrays tridimensionais
var month = []

var firstWeeks = []
var lastWeeks = []

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
var avgTempWeek2 = [41, 29, 21.2, 19.5, 17, 33.8, 58]

var avgTempWeek3 = [78, 56.2, 10, 24, 19.4, 8, 30]
var avgTempWeek4 = [12, 13, 15.2, 14.5, 17, 27.8, 41]

firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [firstWeeks, lastWeeks]

for(var i = 0 ; i < month.length; i++){
    for(var a = 0; a < month[i].length; a++){
        for(var b = 0; b < month[i][a].length; b++){
            console.log(month[i][a][b])
        }
        
    }
}