/* exported firstChars */
function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      newString += string[i];
    }
  }
  return newString;
}

// We can first define a variable with empty string
// we can use a for loop to circle through each letter of string
// set the condtion until the length so that the loop can stop when it is necessary
// when string at index is present we can add the string value to the variable
