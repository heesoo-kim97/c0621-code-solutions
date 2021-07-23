/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  if (count > array.length) {
    newArray = array;
  }
  return newArray;
}

// Define a new variable with empty array
// using a for loop we go through the array
// initialize to the first necessary index of the array
// push the result to the empty array
// to prevent empty array returning undefined use if statement
