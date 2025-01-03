import { performance } from 'perf_hooks'
import { pawns } from './pawns.js'
import { Player } from './player.js'
import { Bullet } from './bullet.js'

new Player()

const fps = 30
const frameTime = 1000 / fps

let lastTime = performance.now()

// Función para mover el cursor al inicio y limpiar la consola
function clearConsole() {
  process.stdout.write('\x1b[H\x1b[2J') // Mueve el cursor al inicio y limpia la consola
}

const grid = [
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
  ['─', '─', '─', '─', '─', '─', '─', '─', '─', '─', '─'],
] // Grid inicial

// Función para generar y mostrar un grid
function renderGrid() {
  clearConsole()
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      grid[y][x] = '─'
      pawns.forEach(pawn => {
        if (y === pawn.data.position.y && x === pawn.data.position.x) {
          grid[y][x] = pawn.data.icon
        }
      })
    }
  }

  grid.forEach(row => {
    console.log(row.join(' ')) // Imprime cada fila del grid
  })
}

// Función que se ejecutará en cada frame
function update(deltaTime) {
  clearConsole()
  // Lógica para actualizar el grid (ejemplo: alternar entre valores)

  renderGrid()
}

// Bucle principal
function start(updateCallback) {
  function loop() {
    const currentTime = performance.now()
    const deltaTime = currentTime - lastTime

    if (deltaTime >= frameTime) {
      lastTime = currentTime - (deltaTime % frameTime)
      updateCallback(deltaTime) // Llamamos a la lógica personalizada
    }

    setImmediate(loop)
  }

  loop()
}

// Llamar a la función 'start' después de declararla
start(deltaTime => {
  // Tu lógica personalizada
  update(deltaTime) // Llamamos al método de actualización principal
})
