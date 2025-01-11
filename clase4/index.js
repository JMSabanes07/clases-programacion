const readline = require('readline')

// Crear una interfaz para leer la entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Preguntar al usuario y manejar la respuesta
rl.question('¿Cuál es tu nombre? ', name => {
  console.log(`Hola, ${name}!`)

  // Cerrar la interfaz después de recibir la respuesta
  rl.close()
})
