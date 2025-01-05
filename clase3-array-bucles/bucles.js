/**
 * Bucles
 */

let array = ['caca', 'asdasd', 'pito', 4, 5, 5, 87987, 897987, 2453546354]

// // for
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

//while
// let i = 0
// while (i < array.length) {
//   console.log(arrayInvertido[i])
//   i++
// }

// // do while
// let j = 0
// do {
//   console.log(array[j])
//   j++
// } while (j < array.length)

// for in
// for (let asdasd in array) {
//   console.log(array[asdasd])
// }

// for of
let celular = [
  {
    modelo: 'xiaomi',
    tamañoPantalla: 5.7,
    precio: 20000,
  },
  {
    modelo: 'samsung',
    tamañoPantalla: 5.7,
    precio: 20000,
  },
]

for (let key in celular) {
  console.log(key, celular[key])
}
