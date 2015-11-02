(function () {
var Asteroids = window.Asteroids = window.Asteroids || {};

Asteroids.MovingObject = function (args) {
  this.pos = args["pos"];
  this.vel = args["vel"];
  this.radius = args["radius"];
  this.color = args["color"];
};

Asteroids.MovingObject.prototype.draw = function (ctx) {
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = this.color;
  ctx.fill();
};

Asteroids.MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};
})();
