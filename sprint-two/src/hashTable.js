

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._length = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // bucket is the tuple at the current index
  var bucket = this._storage.get(index);
  // if bucket, then check if the current key matches any keys in the bucket
  if (bucket) {
    // loop through bucket's arrays
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i] = [k, v];
        break;
      }
    }
    bucket.push([k, v]);
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
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = null;
    }
  }
};

HashTable.prototype.resize= function() {
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


