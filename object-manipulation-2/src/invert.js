/* exported invert */
function invert(source) {
  const newObject = {};
  for (const keys in source) {
    newObject[source[keys]] = keys;
  }
  return newObject;
}

// 1. Define function invert with one parameter source
// 2. define a new object we can push onto
// 3. use if statement to return empty object if no source is given
// 4. use for in loop to identify the keys of the source
// 5. assign values as the source keys into the new object
// 6. return new object
