var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function() {
  if(this.size()) {
    var result = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.back - this.front;
};