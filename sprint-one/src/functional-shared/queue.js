var Queue = function() {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function (someInstance, queueMethods) {
  for (var key in queueMethods) {
    someInstance[key] = queueMethods[key];
  }
};

var queueMethods = {};
queueMethods.enqueue = function (value) { //add string to back of queue
  this.count++;
  this.storage[this.count] = value;
};

queueMethods.dequeue = function (value) { ///remove, return string at front of queue
  if (this.count === 0) {
    return this.count === 0;
  }

  var copy = this.storage['1'];
  delete this.storage['1'];
  this.count--;
  this.storage['1'] = this.storage['2'];
  delete this.storage['2'];
  return copy;
};

queueMethods.size = function () { //return number of items in queue
  return this.count;
};
