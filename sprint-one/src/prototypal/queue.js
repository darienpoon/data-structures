var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function (value) {
  this.count++;
  this.storage[this.count] = value;

};

queueMethods.dequeue = function () {
  if (this.count === 0) {
    return this.count = 0;
  }

  var copy = this.storage['1'];
  delete this.storage['1'];
  this.count--;

  this.storage['1'] = this.storage['2'];
  delete this.storage['2'];
  return copy;

};

queueMethods.size = function () {
  return this.count;
};