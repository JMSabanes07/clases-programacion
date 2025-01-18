// Función que busca un juego en el array de juegos
export const findGame = (gameName, games) => {
  let game

  // Recorrer el array de juegos y buscar el juego con el nombre dado
  for (let i = 0; i < games.length; i++) {
    // Si el nombre del juego coincide con el que se ha dado, se devuelve el juego. toLowerCase() convierte el nombre a minúsculas para que la búsqueda sea más eficiente
    if (games[i].name.toLowerCase() === gameName.toLowerCase()) {
      game = games[i]
    }
  }

  // retorna el juego si se encuentra, sino undefined
  return game
}
