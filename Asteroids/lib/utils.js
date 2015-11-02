(function (){
  var Asteroids = window.Asteroids = window.Asteroids || {}

  var Util = Asteroids.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function() {};

    Surrogate.prototype = ParentClass.prototype;

    ChildClass.prototype = new Surrogate();

    ChildClass.prototype.constructor = ChildClass;
  };

  Util.randomVec = function (length) {
    var randomNum = Math.random() * length;
    var remainder = length * length - randomNum * randomNum;
    return [randomNum, Math.sqrt(remainder)];
  };
})();
