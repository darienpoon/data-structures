var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // declare new variable
  var count = 0;

  //time.complexity: O(1)- Constant
  list.addToTail = function(value) {
    // increment count
    count++;

    // add value to list at key count
    list[count] = value;

    // if count === 1
    if (count === 1) {
      list.head = {value: list[count] }; ///// head assigned to object.value (STEP1)
    }

    // assign list.tail to list[count]
    list.tail = { value: list[count] };

  };
  //time.complexity: O(1)- Constant
  list.removeHead = function() {
    var copy = list.head.value; ///// copy head value (STEP3)

    delete list.head;
    count--;

    list.head = {value: list[2] }; ///// reassign head to next item (STEP2)
    delete list[2];
    delete list[count]; ////// remove value in list as whole  (STEP4)
    console.log(list);

    return copy;
  };
  //time.complexity: O(n)- Linear
  list.contains = function(target) {
    var hasTarget = false;
    // loop over list
    for (var key in list) {
      // check if current value matches target
      if (list[key] === target) {
        hasTarget = true;
      }
    }
    return hasTarget;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
*/