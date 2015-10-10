var binaryNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTreeMethods);
  bst.root = new binaryNode(value);
  return bst;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value, child) {
  //var node = new binaryNode(value)
  var node = new binaryNode(value);

  if (this.root === undefined) {
    this.root = value;
    return;
  }

  //current = the recursively called node or root
  var current = child || this.root;

  //check if value is less or equal to current
  if (value <= current.value) {
    //check if left child is null
    if (!current.left) {
      //if it is, set to node
      current.left = node;
      return;
    } else {
      this.insert(value, current.left);
    }
  } else {
    //check if left child is null
    if (!current.right) {
      //if it is, set to node
      current.right = node;
      return;
    } else {
      this.insert(value, current.right);
    }
  }
  
};

BinarySearchTreeMethods.contains = function(value, child) {
  var contains = false;
  var root = this.root;

  if (root === undefined) {
    return false;
  }
  // //current = the recursively called node or root
  // var current = child || this.root;

  // //check if value is less or equal to current
  // if (value <= current.value) {
  //   if (current.value === value) {
  //     contains = true;
  //   } else {
  //     this.contains(value, current.left);
  //   }
  // } else {
  //   if (current.value === value) {
  //     contains = true;
  //   } else {
  //     this.contains(value, current.right);
  //   }
  // }

  var searchChildren = function(value, child) {

    //current = the recursively called node or root
    var current = child;

    //check if value is less or equal to current
    if (value <= current.value) {
      if (current.value === value) {
        contains = true;
      } else {
        if (current.left === null) {
          return;
        }
        searchChildren(value, current.left);
      }
    } else {
      if (current.value === value) {
        contains = true;
      } else {
        if (current.right === null) {
          return;
        }
        searchChildren(value, current.right);
      }
    }    
  }

  searchChildren(value, root)

  return contains;
};

BinarySearchTreeMethods.depthFirstLog = function(cb, child) {
  if (this.root === undefined) {
    return;
  }

  var current = child || this.root;

  if (current === this.root) {
    cb(this.root.value);
  }

  if (current.left) {
    cb(current.left.value);
    this.depthFirstLog(cb, current.left);
  } 
  if (current.right) {
    cb(current.right.value);
    this.depthFirstLog(cb, current.right);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
