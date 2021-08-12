/* exported omit */
function omit(source, keys) {
  var newObject = {};
  var copyKey = true;
  for (var keyOfSource in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keyOfSource === keys[i]) {
        copyKey = false;
      }
    }
    if (copyKey === true) {
      newObject[i] = source[i];
    }
    copyKey = true;
  }
  return newObject;

}

// 1. define function omit  with two parameters
// 2. create new object to pass onto
// 3. loop through the keys
// 4. If duplicate object has the same keys delete them
// 5. return the object
