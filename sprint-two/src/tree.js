var Tree = function(value) {
  //declare new tree as an empty object to be returned
  var newTree = {};
  //set the new tree's value to our value parameter
  newTree.value = value;
  //set the new tree's children to an empty array
  newTree.children = [];

  //use functional share to extend our methods to the new tree
  _.extend(newTree, treeMethods);

  //return the new tree class
  return newTree;
};
//declare our treeMethods
var treeMethods = {};

treeMethods.addChild = function(value) {
  //initialize a new tree with our Tree constructor, passing in it's value as value
  var newTree = Tree(value);
  //Push this this new tree into the tree's children array
  this.children.push(newTree);
};


treeMethods.contains = function(target) {
  // set a flag to indicate if the target can be found in the tree
  var isTarget = false;

  //helper function to walk the tree
  var walkTree = function(node) {
    //if the current node's value equals the target
    if (node.value === target) {
      //set our flag to true
      isTarget = true;
    } else {
      //otherwise loop through the node's children array
      for (var i = 0; i < node.children.length; i++) {
        //recursively call walkTree helper function on each child -- checking if their values
        //equal the target
        walkTree(node.children[i]);
      }
    }
  };

  //invoke walkTree helper function using this (this is the tree that calls contains)
  walkTree(this);
  return isTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

 //Contains: O(n) -- access each child in the worst case
 //AddChild: O(1) -- constant time