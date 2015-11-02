function sum() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
};

Function.prototype.myBind = function (obj) {
  var fn = this;
  var args = Array.prototype.slice.call(arguments,1);
  return function() {
    fn.apply(obj, args);
  };
};

function curriedSum(numArgs) {
  numbers = [];
  return function _curriedSum (num){
    numbers.push(num);

    if(numbers.length === numArgs) {
      return numbers.reduce(function (a, b){
        return a + b;
      });
    } else {
      return _curriedSum;
    }
  }
};

Function.prototype.curry = function (numArgs) {
  args = [];
  var fn = this;

  return function _curry (arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn.apply(fn, args);
    } else {
      return _curry;
    }
  }
};
