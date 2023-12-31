var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }

  for (var i = 0; i < this._storage[index].length; i ++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1] = v;
      return;
    }
  }

  var tuple = [k, v];
  this._storage[index].push(tuple);

  /*
  if (this._storage[index] !== undefined) {
    this._storage[index] = [k, v];
  } else {
    index = index++;
    this._storage[index] = [k, v];
  }
  */
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);


  for (var i = 0; i < this._storage[index].length; i++) {


    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
  // return this._storage[index][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i ++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i].splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
*/

































/*
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tuple = [k, v];

  this._storage[index] = tuple;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  return this._storage[index][1];
};
*/