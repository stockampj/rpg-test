import { Game} from './../src/rpg.js';

describe ('Game', function(){
  it('should check if new game creates an array', function(){
    var testGame = new Game()
      expect(testGame.row1).toEqual([5, 3, "", "", 7, "", "", "", ""])
  });
});
