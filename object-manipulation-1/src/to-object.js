/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}

// make empty object so that the result can be pushed into it
// first value of object key
