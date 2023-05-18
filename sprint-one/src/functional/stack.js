var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) { // add string to top of stack
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() { //remove and return string on top of stack
    if (count === 0) {
      count = 0;
      return;
    }
    var copy = storage[count];
    delete storage[count];
    count--;
    return copy;
  };

  someInstance.size = function() { //return number of items on stack
    return count;
  };

  return someInstance;
};
