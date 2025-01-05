/**
 * Arrays
 */

let robot = 'Optimus prime'

//            0     1      2      3  4
let array = ['caca', robot, 'pito', 4, 5]

console.log(array[0]) // 1
console.log(array[1]) // 2
console.log(array[2]) // 3
console.log(array[3]) // 4
console.log(array[4]) // 5

console.log(array[0]) // 5
console.log(array[0].length) // 5

array[0] = 'poronga'
console.log(array[0]) // 10
console.log(array[0].length) // 10

array.push('agrega elmento al final')
console.log(array[5]) // 6

array.unshift('agrega elemento adelante')
console.log(array) // 0

array.pop()
console.log(array[5]) // 5

array.shift()
console.log(array[0]) // 1

// pa borrar a partir del indice 2, elimina 1 elemento
array.splice(2, 1)
console.log(array) // [ 1, 2, 4, 5 ]
