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
    if (respuesta === '1') {
      rl.question('¿Cual juego te gustaría ver? ', gameName => {
        let game

        for (let i = 0; i < games.length; i++) {
          if (games[i].name.toLowerCase() === gameName.toLowerCase()) {
            game = games[i]
          }
        }

        if (!game) {
          console.log('Juego no encontrado')
        } else {
          console.log(game)
        }
        mainMenu()
      })
    }
    if (respuesta === '2') {
      console.log(games)
    }
    if (respuesta === '3') {
      console.log('Saliendo...')
      rl.close()
    }
    /**
     * CODIGO DEL TRABAJO PRACTICO ACA
     */
  })
}

mainMenu()
