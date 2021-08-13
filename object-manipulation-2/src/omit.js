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
      newObject[keyOfSource] = source[keyOfSource];
    }
    copyKey = true;
  }
  return newObject;
}

// 1. define function omit with two parameters
// 2. create new object to pass onto
// 3. create a variable with boolean value that can determine if keys should be copied or not
// 4. loop through the keys
// 5. if the key of the source is same as keys the boolean value is false
//    therefore not copying the source at that specific key
// 6. if true copy the source at key to new object
// 6. return the object
