/* exported getValues */
function getValues(object, key) {
  var array = [];
  for (key in object) {
    array.push(object[key]);
  }
  return array;
}
