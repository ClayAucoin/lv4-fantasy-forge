// src/games/game-3.js

import { Adventurer } from "../models/Adventurer.js"
import { HealPotion } from "../models/HealPotion.js"

const knight = new Adventurer("Sir Brave A Lot", 100, 20)
const orc = new Adventurer("Orc Warrior", 80, 15)
const potion = new HealPotion("Flask of Red Goo", 20, 3, "frog teeth")

console.log(`--- Game 3: Battle Start ---`)
console.log(`${knight.name} has a health of ${knight.health}.`)
console.log(`${orc.name} has a health of ${orc.health}.`)
console.log(`${potion.name} has ${potion.charges} charges left.`)

console.log(`\n--- Round 1 ---`)
orc.attack(knight)

console.log(`\n--- ${knight.name} is hurt. He drinks a potion (${potion.name}) ---`)
potion.use(knight)

console.log(`\n--- Round 2 ---`)
knight.attack(orc)

console.log(`\n--- ${orc.name} is hurt. He drinks a potion (${potion.name}) ---`)
potion.use(orc)

