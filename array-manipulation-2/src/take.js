/* exported take */
function take(array, count) {
  if (array.length === 0) {
    return [];
  }

  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a variable with empty array we can push into
// set the condition less than the count so it stops appropriately
// push the array at index into new array defined
