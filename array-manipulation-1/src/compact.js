/* exported compact */
function compact(array) {
  var removeFalse = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      removeFalse.push(array[i]);
    }
  }
  return removeFalse;
}

// Assign a new variable with empty array
// Use Boolean to test if the array value is true or false
// test each index of array by using for loop
// all falsy values should be filtered by using if statement
// it is filtered by not pushing if the value is false
