

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
  if (this._limit * 0.75 < this._length) {
    this.resize();
  }
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
  this._length--;
  if (this._limit * 0.25 > this._length) {
    this.resize();
  }
};

HashTable.prototype.resize= function() {
  // inner helper function to resize the hash table and reposition elements

  // if 75% capacity (limit * .75 < length)
  if (this._limit * 0.75 < this._length) {
    this._limit *= 2;
    this._storage.each(function() {
      return function(bucket, i, storage) {
        // save the current bucket in temp variable
      var temp = bucket;
      // rehash
      var index = getIndexBelowMaxForKey(bucket[0][0], this._limit);
      // add new hash to hashtable and push temp items into new has
      this._storage.set(index, temp);
    };
    });
  } else {
    // if 25% capacity (limit * .25 > length)
    this._limit *= 0.5;
    this._storage.each(function() {
      return function(bucket, i, storage) {
      console.log(bucket, i, storage);
        // save the current bucket in temp variable
      var temp = bucket;
      // rehash
      var index = getIndexBelowMaxForKey(bucket[0][0], this._limit);
      // add new hash to hashtable and push temp items into new has
      this._storage.set(index, temp);
    };
    });
  }
};

  // var resizer = function(that) {
  //   console.log(that._storage);
  //   // loop through all the indexes
  //   that._storage.each(function(bucket, i, storage) {
  //       // save the current bucket in temp variable
  //     var temp = bucket;
  //     // rehash
  //     var index = getIndexBelowMaxForKey(bucket[0][0], that._limit);
  //     // add new hash to hashtable and push temp items into new has
  //     that._storage.set(index, temp);
  //   });
  // };


/*
 * Complexity: What is the time complexity of the above functions?
 */


