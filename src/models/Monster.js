// src/models/Monster.js

class Monster {
  constructor(name, health, damage) {
    this.name = name
    this.health = health
    this.damage = damage
  }

  monsterInfo() {
    console.log("name:", this.name)
    console.log("health:", this.health)
    console.log("damage:", this.damage)
  }

  attack(target, action) {
    console.log("m-1", `${this.name} ${action} ${target.name} for ${this.damage} damage!`)
    target.receiveDamage(this.damage)
  }

  receiveDamage(amount) {
    this.health -= amount

    if (this.health < 0) {
      this.health = 0
      console.log("m-2", `${this.name} has collapsed!`)
    } else {
      console.log("m-3", `${this.name} takes ${amount} damage. (health: ${this.health})`)
    }
  }

  heal(amount) {
    this.health += amount
    console.log("m-4", `${this.name} heals for ${amount}. (health: ${this.health})`)
  }

  roar() {
    console.log("m-5", `${this.name} sends a scary message!`)
  }
}

export { Monster }