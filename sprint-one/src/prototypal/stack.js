var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function (value) { // add string to top of stack
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function () { //remove and return string on top of stack
  if (this.count === 0) {
    return this.count = 0;
  }
  var copy = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return copy;
};

stackMethods.size = function () { //return number of items on stack
  return this.count;
};