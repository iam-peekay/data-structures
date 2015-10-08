

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodeList = [];
};

var newNode = function(value) {
  this.edges = [];
  this.value = value;
}
// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var node = new newNode(node);
  this.nodeList.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // loop through node list to find current node to remove, remove it
  // hold the value of the removed node in temp
  // loop through the updated node list and for each node, check if it "hasEdge" with deleted node
    // if yes, removeEdge
  var temp = node;
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === node) {
      this.nodeList.splice(i, 1);
    }
  }

  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.hasEdge(this.nodeList[i].value, temp)) {
      this.removeEdge(this.nodeList[i].value, temp);
    }
   }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var containsFrom = false;
  var fromLoc;
  var containsTo = false;
  var toLoc;
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === fromNode) {
      containsFrom = true;
      fromLoc = this.nodeList[i].edges;
    }
    if (this.nodeList[i].value === toNode) {
      containsTo = true;
      toLoc = this.nodeList[i].edges;
    }
  }
    // debugger;
  if (fromLoc.indexOf(toNode) > -1 && toLoc.indexOf(fromNode) > -1) {

    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var containsFrom = false;
  var fromLoc;
  var containsTo = false;
  var toLoc;
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === fromNode) {
      containsFrom = true;
      fromLoc = this.nodeList[i].edges;
    }
    if (this.nodeList[i].value === toNode) {
      containsTo = true;
      toLoc = this.nodeList[i].edges;
    }
  }

  if (containsFrom && containsTo) {
    fromLoc.push(toNode);
    toLoc.push(fromNode);
  }

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var containsFrom = false;
  var fromLoc;
  var containsTo = false;
  var toLoc;
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === fromNode) {
      containsFrom = true;
      fromLoc = this.nodeList[i].edges;
    }
    if (this.nodeList[i].value === toNode) {
      containsTo = true;
      toLoc = this.nodeList[i].edges;
    }
  }
  debugger;
  if (containsFrom && containsTo) {
    fromLoc.splice(fromLoc.indexOf(toNode), 1);
    toLoc.splice(toLoc.indexOf(fromNode), 1);
  }

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodeList, function(node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


