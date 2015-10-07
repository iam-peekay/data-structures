var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);

  stack.storage = {};
  stack.length = 0;

  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function() {
    if (this.size()) {
      var result = this.storage[this.length - 1];
      delete this.storage[this.length];
      this.length--;
      return result;
    }
  },
  size: function() {
    return this.length;
  }
};
