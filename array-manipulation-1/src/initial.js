/* exported initial */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// Assign a new array first with empty array and
// use a for loop to add values to the new array.
// i should start at 0 while the condition should be that i runs
//  until it is less than array.length - 1(less than the last index)
