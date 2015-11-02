(function (){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function (){
    this.addAsteroids()
  };

  Asteroids.DIM_X = window.innerWidth;
  Asteroids.DIM_Y = window.innerHeight;
  Asteroids.NUM_ASTEROIDS = 20;

  Game.prototype.addAsteroids = function () {
    this.asteroids = [];
    for (var i = 0; i < Asteroids.NUM_ASTEROIDS; i++) {
      var asteroid = new Asteroids.Asteroid({ pos: this.randomPosition() });
      this.asteroids.push(asteroid);
    }

    return this.asteroids;
  };

  Game.prototype.randomPosition = function() {
    var x = Math.floor(Math.random() * Asteroids.DIM_X);
    var y = Math.floor(Math.random() * Asteroids.DIM_Y);

    return [x, y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Asteroids.DIM_X, Asteroids.DIM_Y);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
    }
  };

  Game.prototype.moveObjects = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  }

})();
