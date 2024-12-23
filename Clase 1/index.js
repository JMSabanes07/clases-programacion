const { performance } = require('perf_hooks')

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

const player = direction => {
  if (direction === 'up') {
    return '↑'
  }
  if (direction === 'down') {
    return '↓'
  }
  if (direction === 'left') {
    return '←'
  }
  if (direction === 'right') {
    return '→'
  }
}

// Función para generar y mostrar un grid
function renderGrid() {
  clearConsole()
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (y === 5 && x === 5) {
        grid[y][x] = player('right')
      }
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
