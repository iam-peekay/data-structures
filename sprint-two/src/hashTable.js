

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._length = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // this._storage.set(index, v);
  //check if anything exists at this index
  if (this._storage.get(index)) {
    if () {
      
    }
    this._storage.each(function(value, i, storage) {
      if (i === index) {
        storage[i].push([k, v]);
      }
    });
  } else {
    this._storage.set(index, [[k, v]]);
  }

  this._length++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, i, storage) {
    if (i === index) {
      storage[i] = null;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


