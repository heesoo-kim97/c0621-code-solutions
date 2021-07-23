/* exported includes */
function includes(array, value) {
  var boolean = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return boolean;
}

// To return a boolean value set new variable to a boolean value.
// use for loop to go through the array
// using if statement check wheather each index of array is strictly equal to value
// return the results with boolean values
