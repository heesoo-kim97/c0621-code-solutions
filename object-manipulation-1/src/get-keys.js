/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
}

// define a function with parameter of object
// we first need to assign empty array to a new variable
// use for in loop to execute once for each property
// push into the array and return the value
// return array
