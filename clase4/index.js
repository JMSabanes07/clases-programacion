// import readline from 'readline'

// const readline = require('readline')

// // Crear una interfaz para leer la entrada y salida
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// // Preguntar al usuario y manejar la respuesta
// rl.question('¿Cuál es tu nombre? ', parametro => {
//   console.log(`Hola, ${parametro}!`)

//   if (parametro === 'tetaz') {
//     console.log('Sos un enano de mierda')
//   }

//   // Cerrar la interfaz después de recibir la respuesta
//   rl.close()
// })

/**
 * FUNCIONES
 */

// let array = ['caca', 'asdasd', 'pito', 4, 5]

// function recorrerArray() {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
//   }
// }

// recorrerArray()

// var suma = function () {
//   console.log(5 + 5)
// }

// suma()

// var resta = () => {
//   console.log(8 - 7)
// }

// resta()

// const sum = (numero1, numero2) => {
//   console.log(numero1 + numero2)
// }

// sum(15, 5)
// sum(30, 51)
// sum(75, 47)

const print = result => {
  console.log(result)
}

const suma = (num1, num2, devuelveResultado) => {
  const result = num1 + num2
  devuelveResultado(result)
}

suma(15, 15, print)
