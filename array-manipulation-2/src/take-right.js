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
