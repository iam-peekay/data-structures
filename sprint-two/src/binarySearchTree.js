// node values at each point in the tree
var binaryNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// creates BinarySearchTree, starting with the root node
var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTreeMethods);
  bst.root = new binaryNode(value);
  return bst;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value, child) {
  // generate a new node
  var node = new binaryNode(value);

  // check if the current root is undefined
  if (this.root === undefined) {
    // if yes, add new node to the root node
    this.root = value;
    // exit
    return;
  }

  //else, set the current variable to the root node OR the child node passed into
  // the recursive function
  var current = child || this.root;

  //check if value of the node to insert is less or equal to current node's value
  if (value <= current.value) {
    //check if left child is null
    if (!current.left) {
      //if it is, set it to node
      current.left = node;
      // exit
      return;
    } else {
      // else, recursively insert on the current.left
      this.insert(value, current.left);
    }
  } else {
    //if not left, check if right child is null
    if (!current.right) {
      //if it is, set to node
      current.right = node;
      // exit
      return;
    } else {
      // else, recursively insert on the current.right
      this.insert(value, current.right);
    }
  }
};

BinarySearchTreeMethods.contains = function(value, child) {
  // variable to represent whether node contains or not
  var contains = false;
  // start at the tree's root
  var root = this.root;

  // if tree is empty, return false
  if (root === undefined) {
    return false;
  }

  // inner recursive helper function to check if value exists in the tree
  var searchChildren = function(value, child) {

    //current = the recursively called node or root
    var current = child;

    //check if value is less or equal to current
    if (value <= current.value) {
      // check if the current node's value is equal to the value passed in
      if (current.value === value) {
        // if yes, set our "contains" variable to true
        contains = true;
      } else {
        // else, check if the current's left node is null
        if (current.left === null) {
          // if yes, exit
          return;
        }
        // since we know the value is less than the current's value, recurse on current.value
        searchChildren(value, current.left);
      }
    } else {
      // if not on current.left, then do the same thing on the right side
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

  // invoke inner function with the value passed in and tree's root
  searchChildren(value, root)

  return contains;
};

BinarySearchTreeMethods.depthFirstLog = function(cb, child) {
  // check if root is undefined, if yes, exit
  if (this.root === undefined) {
    return;
  }

  // set our current node to the root or the recursive child
  var current = child || this.root;

  // check if the current node is the root
  if (current === this.root) {
    // call back on the root's value
    cb(this.root.value);
  }

  // if current node has a left child
    // execute the call back on the left child's value
  if (current.left) {
    cb(current.left.value);
    // then recurse on the current's left child
    this.depthFirstLog(cb, current.left);
  } 
  // if current node has a right child
    // execute the call back on the right child's value
  if (current.right) {
    cb(current.right.value);
    // then recurse on the curent's right child
    this.depthFirstLog(cb, current.right);
  }

  // if none of the above, do nothing
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// insertion: O(log n) - because we divide the tree in half each time we look for a place to insert
// contains: O(log n) - because we divide the tree in half of each search iteration
// depthFirstLog: O(n) - because we have to visit each node
// so overall, it's O(n)
