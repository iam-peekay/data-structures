var Stack = function() {

  var stack = {};
  stack.storage = {};
  stack.length = 0;

  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length++] = value;
  },

  pop: function() {
    this.length && this.length--;
    var result = this.storage[this.length];

    delete this.storage[this.length];

    return result;
  },

  size: function() {
    return this.length;
  }

};
