/* exported chunk */
function chunk(array, size) {
  var mainArray = [];
  var newArray = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < array.length; i++) {
    if (newArray.length === size) {
      mainArray.push(newArray);
      newArray = [];
    }
    newArray.push(array[i]);
  }
  mainArray.push(newArray);
  return mainArray;
}

// Define two variables with empty array
// use a for loop to go through the each values in the array
// push array at index to one of the empty array
// using if statement to see when the length of the array with stored information is equal to size
// push the array that stores array[i] until the size value to new array
// make the array that stored array[i] empty again
// push the rest into the new array as separate array
