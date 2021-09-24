/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// We are comparing two arrays and see if there are equal to each other
// To be equal, the length of the two arrays should be the same
// return false if the arrays don't have the same length
// While looping through first array, we need to compare index values of both arrays
// if index values of first array is not equal to second array, return false
