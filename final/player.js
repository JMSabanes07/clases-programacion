import readline from 'readline'
import { Bullet } from './bullet.js'
import { pawns } from './pawns.js'

export class Player {
  constructor(params) {
    this.position = params?.position || { x: 0, y: 0 }
    this.direction = params?.direction || 'right'
    this.icon = '→'
    pawns.push({ name: 'player', data: this })

    // Configurar el stdin para recibir eventos keypress
    readline.emitKeypressEvents(process.stdin)
    process.stdin.setRawMode(true)

    // Escuchar eventos keypress
    process.stdin.on('keypress', (str, key) => {
      if (key.ctrl && key.name === 'c') {
        console.log('Saliendo...')
        process.exit()
      }
      switch (key.name) {
        case 'up':
          this.moveUp()
          break
        case 'down':
          this.moveDown()
          break
        case 'left':
          this.moveLeft()
          break
        case 'right':
          this.moveRight()
          break
        case 'space':
          this.shoot()
          break
      }
    })
  }
  onMove() {
    if (this.direction === 'up') {
      this.position.y--
      this.icon = '↑'
    }
    if (this.direction === 'down') {
      this.position.y++
      this.icon = '↓'
    }
    if (this.direction === 'left') {
      this.position.x--
      this.icon = '←'
    }
    if (this.direction === 'right') {
      this.position.x++
      this.icon = '→'
    }
  }

  moveUp() {
    this.direction = 'up'
    this.onMove()
  }
  moveDown() {
    this.direction = 'down'
    this.onMove()
  }
  moveLeft() {
    this.direction = 'left'
    this.onMove()
  }
  moveRight() {
    this.direction = 'right'
    this.onMove()
  }

  shoot() {
    new Bullet(this.position, this.direction)
  }
}
