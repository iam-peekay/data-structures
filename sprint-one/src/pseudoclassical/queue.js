var Queue = function() {
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function() {
  this.size() && this.front++;
  var result = this.storage[this.front];

  delete this.storage[this.front];

  return result;
};

Queue.prototype.size = function() {
  return this.back - this.front;
};
