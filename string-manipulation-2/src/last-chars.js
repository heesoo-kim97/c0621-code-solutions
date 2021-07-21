/* exported lastChars */
function lastChars(length, string) {
  var newString = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (string[i]) {
      newString += string[i];
    }
  }
  return newString;
}

// We can first define a variable with empty string
// we can use a for loop to circle through each letter of string
// we can initiaize where the printing starts
// when string at index is present we can add the value to variable
