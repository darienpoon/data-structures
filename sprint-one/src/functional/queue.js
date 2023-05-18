var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) { // add string to back of queue
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() { //remove and return string at front of queue
    if (count === 0) {
      count = 0;
      return;
    }

    var copy = storage['1'];
    delete storage['1'];
    count--;

    storage['1'] = storage['2']; //make 2nd to 1st place
    delete storage['2']; // remove/reset space of 2nd place
    return copy;
  };

  someInstance.size = function() { // return number of items in queue
    return count;
  };

  return someInstance;
};
