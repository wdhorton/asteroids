(function (){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  Asteroids.COLOR = "grey";
  Asteroids.RADIUS = 5;

  var Asteroid = Asteroids.Asteroid = function (args) {
    args.color = Asteroids.COLOR;
    args.radius = Asteroids.RADIUS;
    args.vel = Asteroids.Util.randomVec(10);
    Asteroids.MovingObject.call(this,args);
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

})();
