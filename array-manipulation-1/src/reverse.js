/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

//  Assign a variable to new empty array
// use a for loop to start from the last index to print first
// in the loop we set i equal to the last index
// in the condition i should be less than or equal to first index
// i decrement
// push the resulting array[index] in a new array so that it prints reversed
