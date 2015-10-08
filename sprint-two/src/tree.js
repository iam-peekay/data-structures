var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  //if the node.value === target
  var isTarget = false;

  var walkTree = function(node) {
    if (node.value === target) {
      isTarget = true;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        walkTree(node.children[i]);
      }
    }
  };
  walkTree(this);
  return isTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */