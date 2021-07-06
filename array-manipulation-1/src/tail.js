/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// Assign a new array first with empty array and
// use a for loop to add values to the new array.
// i should start at 1 since we are skipping first value.
