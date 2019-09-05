// export class Game {
//   constructor() {
//
//   }
//
// }

export class Round {
  let jock = new Character('Chad Michael Michaelson', 1, 2, 2, new Loot('Chad\'s Fist', 'attack', 3), new Loot('Jock Strap', 'hp', 1), 1);
  let avClub = new Character('AV Club', 1, 2, 2 new Loot('16 mm Reel of Legend', 'attack', 1), new Loot('Ratty Hipster Sweatshirt', 'hp', 0), 3);
  let cheer = new Character('Marsha', 1, 20, 1, new Loot('Gossip and Insults', 'attack', 0), new Loot('Cheer Suit', 'hp', 0), 5);
  let enemyArray = [jock, avClub, cheer];
  constructor(player) {
    this.player = player;
    this.enemies = enemyArray[Math.floor(Math.random() * 3)];
    this.turn = whoStarts();
  }

  whoStarts() {
    if (Math.random() < 0.5) {
      return false;
    } else {
      return true;
    }
  }

  endRound(player, enemy) {
    if (this.turn) {
      const enemyLoot = [enemy.weapon, enemy.armor];
      const playerLoot = [player.weapon, player.armor];
      playerLoot.forEach(function(item, i) {
        if (item.stat > enemyLoot[i].stat) {
          item = enemyLoot[i];
        }
      });
      return "You Win!!!!"
    } else {
      return "You Lose"
    }
  }

  attack(player, enemy) {
    if (this.turn) {
      let totalAttack = player.baseAttack + player.weapon.stat - enemy.armor.stat;
      if (enemy.hp - totalAttack <= 0) {
        this.endRound(player, enemy);
      } else {
        enemy.hp = enemy.hp - totalAttack;
        this.turn = !(this.turn);
        setTimeout(function() {
          attack(player, enemy)
        }, 2000);
      }
    } else {
      let totalAttack = enemy.baseAttack + enemy.weapon.stat;
      if (player.hp - totalAttack <= 0) {
        this.endRound(player, enemy);
      } else {
        player.hp = player.hp - totalAttack;
        this.turn = !(this.turn);
        setTimeout(function() {
          attack(player, enemy)
        }, 2000);
      }

    }
  }

  export class Character {
    constructor(name, level, hp, attack, weapon, armor, brains) {
      this.name = name;
      this.level = level;
      this.brains = brains;
      this.hp = hp;
      this.baseAttack = attack;
      this.weapon = weapon;
      this.armor = armor;

      this.player = false;
    }

    selectCharacter() {
      this.player = true;
    }

    useStuff(loot) {
      this[loot.type] += loot.stat;
    }

  }

  export class Loot {
    constructor(name, type, stat) {
      this.name = name;
      this.type = type;
      this.stat = stat;
    }
  }
