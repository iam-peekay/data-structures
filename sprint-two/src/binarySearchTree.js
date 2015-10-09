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

BinarySearchTreeMethods.contains = function(value) {

};

BinarySearchTreeMethods.depthFirstLog = function(cb) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
