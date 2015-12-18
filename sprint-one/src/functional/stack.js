var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  someInstance.push = function(value) {
    // Add new item to stack at the index value of stack's length
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    // If more than 1 item in stack
      // we return the last item put into the stack, which is the item at
    length && length--;
    var result = storage[length];

    delete storage[length];

    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
