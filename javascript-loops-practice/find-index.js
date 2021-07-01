/* exported findIndex */
function findIndex(array, value) {
  var finalValue = -1;
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      finalValue = i;
      return finalValue;
    }
  }
  return finalValue;
}
