/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a new variable with empty array
// using for loop go through array values
// initiaize with count to start at that specified index.
// push and return the result
