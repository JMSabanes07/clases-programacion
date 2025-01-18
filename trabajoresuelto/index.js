import readline from 'readline'
import { findGame } from './scripts/findGame.js'
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
    // Validar respuesta - si no es 1, 2, 3 vuelve a ejecutar el mainMenu para que se vuelva a iniciar
    if (respuesta != 1 && respuesta != 2 && respuesta != 3) {
      console.log('Opción no válida')
      mainMenu()
    }
    // Si es 1, pregunta al usuario por el nombre del juego y busca en el array de juegos
    if (respuesta === '1') {
      rl.question('¿Cual juego te gustaría ver? ', gameName => {
        const game = findGame(gameName, games)
        if (!game) {
          console.log('Juego no encontrado')
        } else {
          console.log(game)
        }
        mainMenu()
      })
    }
    // Si es 2, muestra todos los juegos y vuelve a ejecutar el mainMenu
    if (respuesta === '2') {
      console.log(games)
      mainMenu()
    }
    // Si es 3, cierra la interfaz
    if (respuesta === '3') {
      console.log('Saliendo...')
      rl.close()
    }
  })
}

mainMenu()
