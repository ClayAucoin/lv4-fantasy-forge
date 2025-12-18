// src/models/Adventurer.js

class Adventurer {
  constructor(name, health, attackPower) {
    this.name = name
    this.health = health
    this.attackPower = attackPower
  }

  adventurerInfo() {
    console.log("name:", this.name)
    console.log("health:", this.health)
    console.log("attackPower:", this.attackPower)
  }

  scout() {
    console.log("a-1", `${this.name} is scouting...${this.health}`)
  }

  receiveDamage(amount) {
    this.health -= amount

    if (this.health < 0) {
      this.health = 0
      console.log("a-2", `${this.name} has collapsed!`)
    } else {
      console.log("a-3", `${this.name} takes ${amount} damage. (health: ${this.health})`)
    }
  }

  heal(amount) {
    this.health += amount
    console.log("a-4", `${this.name} heals for ${amount}. (health: ${this.health})`)
  }

  attack(target, action) {
    console.log("a-5", `${this.name} ${action} attacks ${target.name}!`)

    if (target.health >= 0) {
      const resultHealth = target.receiveDamage - this.attackPower
      target.receiveDamage(this.attackPower)

      if (resultHealth <= 0) {
        console.log("a-6", `${this.name} has slain ${target.name}!`)
      }
    } else {
      console.log("a-7", `${target.name} has already been defeated`)
    }
  }
}

export { Adventurer }