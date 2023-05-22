// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // iterate through instance
  for (var i = 0; i < this.nodes.length; i++) {
    // if val matches node -> return true
    if (this.nodes[i] === node) {
      return true;
    }
  }

  // otherwise return false
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // iterate through nodes
  for (var i = 0; i < this.nodes.length; i++) {
    // if value matches node
    if (this.nodes[i] === node) {
      // splice
      this.nodes.splice(i, 1);
    }
  }

  // iterate through edges array
  // this.edges.forEach(function(edge) {
  //   for (var from in edge) {
  //     if (node === from || node === edge[from]) {
  //       this.edges.splice(i, 1);
  //     }
  //   }
  // });

  for (var j = 0; j < this.edges.length; j++) {
    for (var from in this.edges[j]) {
      // if the node we're trying to remove is in the key/ or value of edge object in edges array, then remove that obj
      if (node === from || node === this.edges[j][from]) {
        this.edges.splice(j, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // access edges prop on this
  // iterate through edges
  for (var i = 0; i < this.edges.length; i++) {
    // check if this.edges[i][fromNode] === toNode
    if (this.edges[i][fromNode] === toNode) {
      // if so -> return true
      return true;
    }
  }

  // otherwise return false
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // declare obj for current pair
  var currentEdge = {};
  var reverseEdge = {};

  // set key to fromNode & value to toNode
  currentEdge[fromNode] = toNode;
  reverseEdge[toNode] = fromNode;

  // push current object into array
  this.edges.push(currentEdge);
  this.edges.push(reverseEdge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  console.log('remove');

  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][fromNode] === toNode) {
      this.edges.splice(i, 2);
    }

    // for (var from in this.edges[i]) {
    //   if (from === fromNode && this.edges[i][from] === toNode) {
    //     this.edges.splice(i, 1);
    //     console.log('remove', this);
    //   }
    // }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // loop over nodes array
  this.nodes.forEach(function(node) {
    // invoke cb on each node
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
*/