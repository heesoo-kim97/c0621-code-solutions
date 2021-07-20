/* exported ransomCase */

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if ((i % 2) === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}

// We can first define a variable with empty string
// we can use a for loop to circle through each letter of string
// We need to get even index numbers to be lowercased
// we can use remainder to find only even index numbers and lowercase them
