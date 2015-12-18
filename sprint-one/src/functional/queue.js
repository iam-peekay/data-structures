var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;

  someInstance.enqueue = function(value) {
    storage[back++] = value;
  };

  someInstance.dequeue = function() {
    // If there are items in the queue
      // Increment front index
    someInstance.size() && front++;
    // Store the first item in a temp result variable
    var result = storage[front];
    // Delete the first item in Queue
    delete storage[front];
    return result;
  };

  someInstance.size = function() {
    return back - front;
  };

  return someInstance;
};
