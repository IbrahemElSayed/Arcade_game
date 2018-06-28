// Enemies our player must avoid
// The constructor function of the enemy bugs
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.width = 55;
    this.height = 30;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};


//add The Enemy prototype update methode
Enemy.prototype.update = function(dt) {

    this.x += this.speed*dt;

    if (this.x > 500){
       this.x = -50;
   }
   this.Collision();
    // Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//the Collision function added to the prototype
Enemy.prototype.Collision = function (){
  allEnemies.forEach(function (enemy){
    if(
      player.x < enemy.x + enemy.width &&
      player.x + player.width > enemy.x &&
      player.y < enemy.y + enemy.height &&
      player.y + player.height > enemy.y
    ){
      player.x = 200;
      player.y = 400;
      console.log('collision! Oops');
    }
  })
}

// Player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y){
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.sprite = 'images/char-boy.png';
};



// Instantiate  objects.
var enemy1 = new Enemy(-110, 60, 200);
var enemy2 = new Enemy(-110, 140, 100);
var enemy3 = new Enemy(-110, 220, 250);
var enemy4 = new Enemy(-110, 140, 300);
var enemy5 = new Enemy(-110, 300, 500);

// all enemy objects are added in an array called allEnemies
var allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);


// the Player object is placed in a variable called player
var player = new Player(200,400);

//the update function of the player
player.update = function(dt) {
  if (this.y === -12.5){
        this.x = 200;
        this.y = 400;
        alert('done!');
        //win condition below
    }

};
//rendering
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// the input keys
player.handleInput = function(direction){

          if(direction === 'left' && this.x >= 100){
         this.x -= 100;
         }
         if(direction === 'up' && this.y >= 30){
         this.y -= 82.5;
         }
         if(direction === 'right' && this.x <= 305){
         this.x += 100;
         }
         if(direction === 'down' && this.y <= 350){
         this.y += 82.5;
         }
};



// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
