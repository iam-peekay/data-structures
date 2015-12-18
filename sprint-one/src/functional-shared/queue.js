var Queue = function() {

  var queue = {};
  queue.storage = {};
  queue.front = 0;
  queue.back = 0;
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back++] = value;
  },

  dequeue: function() {
    this.size() && this.front++;
    var result = this.storage[this.front];

    delete this.storage[this.front];

    return result;
  },

  size: function() {
    return this.back - this.front;
  }

};
