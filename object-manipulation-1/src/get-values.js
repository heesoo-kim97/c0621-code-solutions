/* exported getValues */
function getValues(object, key) {
  var array = [];
  for (key in object) {
    array.push(object[key]);
  }
  return array;
}

// define a variable with empty arrau within function
// use for in loop to execute each property once
// we push object parameter with index of key to the array
// return the array
