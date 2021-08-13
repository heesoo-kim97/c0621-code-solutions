/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}

// 1. Define the function pick with two parameters
// 2. create empty object we can push into
// 3. Loop through the keys
// 4. If source has the keys push into the empty object
// 5. return the empty object
