var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.front = 0;
  queue.back = 0;
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back++;
  },

  dequeue: function() {
    if (this.size()) {
      var result = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return result;
    }
  }, 

  size: function() {
    return this.back - this.front;
  }

};


