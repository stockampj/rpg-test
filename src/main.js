import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Round, Character, Loot} from './rpg';

$(document).ready(function(){
  const starterWeapon = new Loot('Fist','attack',0);
  const starterArmor = new Loot('Moldy Clothes','hp',0);
  let zombie = new Character('Betty the Brain Eater', 1, 10,3,starterWeapon,starterArmor,0);
    zombie.selectCharacter();
  let fightRound = new Round(zombie);

  console.log(zombie,jock);
  console.log(fightRound);

});
// var myGame = new Game
