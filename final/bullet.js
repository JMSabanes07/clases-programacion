import { pawns } from './pawns.js'

export class Bullet {
  constructor(position, direction) {
    this.position = { ...position } || { x: 1, y: 1 }
    this.direction = direction || 'right'
    this.icon = '•'
    pawns.push({ name: 'bullet', data: this })

    this.movement = setInterval(() => {
      if (!this.direction) throw (new Error('Direction is required'), clearInterval(this.movement))
      if (this.position.y < 0 || this.position.y > 10) return clearInterval(this.movement)
      if (this.position.x < 0 || this.position.x > 10) return clearInterval(this.movement)

      this.onMove()
    }, 100)
  }

  onMove() {
    if (this.direction === 'up') {
      this.position.y--
    }
    if (this.direction === 'down') {
      this.position.y++
    }
    if (this.direction === 'left') {
      this.position.x--
    }
    if (this.direction === 'right') {
      this.position.x++
    }
  }
}
