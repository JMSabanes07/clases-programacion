import readline from 'readline'
import { games } from './data/games.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const mainMenu = async () => {
  console.log('')
  console.log('')
  console.log('Bienvenido a la aplicación de búsqueda de juegos')
  console.log('¿Qué te gustaría hacer?')
  console.log('1. Buscar un juego')
  console.log('2. Ver Todos los juegos')
  console.log('3. Salir')
  console.log('')

  rl.question('>> ', async respuesta => {
    /**
     * CODIGO DEL TRABAJO PRACTICO ACA
     */
  })
}

mainMenu()
