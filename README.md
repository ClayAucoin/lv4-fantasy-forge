# Fantasy Forge

A small JavaScript fantasy combat playground built with ES modules. This project models adventurers, monsters, and healing potions, then wires them together through a set of simple game scenarios. It is designed as a learning exercise to practice classes, methods, imports, and basic game logic.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Core Concepts](#core-concepts)

  - [Adventurer](#adventurer)
  - [Monster](#monster)
  - [HealPotion](#healpotion)

- [Game Scenarios](#game-scenarios)

  - [Game 1: Basic Combat](#game-1-basic-combat)
  - [Game 2: Potion Usage](#game-2-potion-usage)
  - [Game 3: Battle With Healing](#game-3-battle-with-healing)
  - [Game 4: Full Interaction Demo](#game-4-full-interaction-demo)

- [How to Run](#how-to-run)
- [Example Output](#example-output)
- [Notes and Limitations](#notes-and-limitations)
- [Future Ideas](#future-ideas)

---

## Overview

Fantasy Forge is a console based mini game engine written in modern JavaScript. It focuses on:

- Object oriented design with classes
- Interaction between multiple entity types
- Method calls that mutate shared state
- Console logging for simple game feedback

There is no UI, database, or external dependency. Everything runs directly in Node using ES modules.

---

## Project Structure

```
src/
  main-game.js

  games/
    game-1.js
    game-2.js
    game-3.js
    game-4.js

  models/
    Adventurer.js
    HealPotion.js
    Monster.js
```

- `models/` contains reusable game entities
- `games/` contains small scripted scenarios
- `main-game.js` is the entry point that chooses which game to run

---

## Core Concepts

### Adventurer

Represents a playable character or humanoid combatant.

Key features:

- Name, health, and attack power
- Can attack other entities
- Can receive damage and heal
- Can print its own stats

Primary methods:

- `attack(target, action)`
- `receiveDamage(amount)`
- `heal(amount)`
- `adventurerInfo()`

---

### Monster

Represents an enemy creature.

Key features:

- Name, health, and damage value
- Can attack adventurers
- Can roar for flavor text
- Tracks damage and defeat

Primary methods:

- `attack(target, action)`
- `receiveDamage(amount)`
- `monsterInfo()`
- `roar()`

---

### HealPotion

Represents a consumable healing item.

Key features:

- Heals a fixed amount
- Has limited charges
- Optional flavor text
- Can be recharged

Primary methods:

- `use(target)`
- `recharge(amount)`
- `healPotionInfo()`

---

## Game Scenarios

Each game file demonstrates a different concept.

### Game 1: Basic Combat

- One adventurer vs one goblin
- Demonstrates attacking until health reaches zero
- Shows basic combat logging

Focus: core combat flow

---

### Game 2: Potion Usage

- Adventurer uses multiple healing potions
- Demonstrates charge limits
- Shows potion recharging

Focus: item usage and state tracking

---

### Game 3: Battle With Healing

- Two combatants take turns attacking
- Both sides use the same potion

Focus: shared resources and turn based flow

---

### Game 4: Full Interaction Demo

- Uses Adventurer, Monster, and HealPotion together
- Shows info methods for each entity
- Demonstrates varied attack actions
- Includes monster flavor actions like roaring

Focus: full system interaction

---

## How to Run

1. Make sure you are using Node 18 or newer
2. Ensure your project is using ES modules (`type: module` in `package.json`)
3. From the project root, run:

```
node src/main-game.js
```

4. Uncomment the desired game import inside `main-game.js`

---

## Example Output

Console output includes:

- Entity stats
- Combat actions
- Damage and healing logs
- Flavor text for attacks and potions

This makes it easy to follow the flow of each scenario step by step.

---

## Notes and Limitations

- No input handling or player choices
- No win or loss state tracking beyond health reaching zero
- Some combat logic is intentionally simple for learning purposes
- Logging prefixes (`a-1`, `m-3`, etc.) are for debugging and tracing

---

## Future Ideas

Possible improvements:

- Turn manager or battle loop
- Inventory system for adventurers
- Different monster types with abilities
- Maximum health limits
- Status effects like poison or stun
- Simple text UI or browser UI

---

This project is intentionally small and readable, making it a good foundation for experimenting with game logic, object oriented JavaScript, and incremental feature growth.
