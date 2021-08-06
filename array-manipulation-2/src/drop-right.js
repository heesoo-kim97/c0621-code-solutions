/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// Define a new variable with empty array
// using a for loop we can cycle through until the last index to be printed
// push the value of array to the empty array
