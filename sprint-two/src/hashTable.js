

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._length = 0;
};

HashTable.prototype.insert = function(k, v) {
  // get hashed index
  var index = getIndexBelowMaxForKey(k, this._limit);
  // bucket is the array of tuples at the current index or empty array if index doesn't exist
  var bucket = this._storage.get(index) || [];
  // loop through the bucket
  for (var i = 0; i < bucket.length; i++) {
  // check if the current tuple key matches the new key to insert
    var tuple = bucket[i];
    if (tuple[0] === k) {
      // if it does, overwrite the value for the key with the new value
        // exit
      tuple[1] = v;
      return;
    }
  }

    // else, push the current key and value as a tuple into the bucket 
  bucket.push([k, v]);
    // set the current index to the new updated bucket
  this._storage.set(index, bucket);
    // increment size of hash table
  this._length++;
    // check if hash table need to be resized
  if (this._length > this._limit * 0.75) {
      // if yes. run the resizer function
    this._resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  // get hashed index
  var index = getIndexBelowMaxForKey(k, this._limit);
  // bucket is the array of tuples at the current index or empty array if index doesn't exist
  var bucket = this._storage.get(index) || [];
  // loop through the bucket
  for (var i = 0; i < bucket.length; i++) {
  // check if the current tuple key matches the new key to retrieve
    var tuple = bucket[i];
    if (tuple[0] === k) {
      // if it does, return the key's value
        // exit
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  // get hashed index
  var index = getIndexBelowMaxForKey(k, this._limit);
  // bucket is the array of tuples at the current index or empty array if index doesn't exist
  var bucket = this._storage.get(index) || [];
  // loop through the bucket
  for (var i = 0; i < bucket.length; i++) {
  // check if the current tuple key matches the new key to remove
    var tuple = bucket[i];
    if (tuple[0] === k) {
      // if it does, splice the tuple out of the current bucket
      bucket.splice(i, 1);
      // decrement
      this._length--;
      // check if current size is less than our threshold
      if (this._length < this._limit * 0.25) {
        // if it is, call resizer function
        this._resize(Math.floor(this._limit / 2))
      }
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype._resize = function(newLimit) {
  // store the copy of storage into a new variable
  var copyStorage = this._storage;
  // set the passed in limit to our this._limit
  this._limit = newLimit;
  // set the storage to a new limited array representing the new limit size
  this._storage = LimitedArray(this._limit);
  // reset length to 0
  this._length = 0;
  // iterate through each of the old storage buckets
  copyStorage.each(function(bucket) {
    // if there isn't a bucket
    if (!bucket) { return; }
      // return
    // else insert the current tuple's key and value into the new storage
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // Constant time, except for when you resize or when there is a chance that all of the tuples
 // end up in one bucket


