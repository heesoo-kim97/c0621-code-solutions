/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// We first define a empty string to a new variable
// using for loop we can look through each letters of the string
// when index is equal to the firstIndex we can add string at secondIndex to variable
// We repeat the same statement for when index equals secondIndex
// when index is either we can simply add string at i to the variable
