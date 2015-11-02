(function (){
  var Asteroids = window.Asteroids = window.Asteroids || {}

  var GameView = Asteroids.GameView = function(ctx, game) {
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.start = function () {
    var gameView = this;

    window.setInterval(function () {
      gameView.game.draw(gameView.ctx);
      gameView.game.moveObjects();
    }, 20);
  };

})();
