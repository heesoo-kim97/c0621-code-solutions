/* exported capitalizeWords */
function capitalizeWords(string) {

  var newString = '';
  var capitalize = true;
  for (var i = 0; i < string.length; i++) {
    if (capitalize) {
      newString += string[i].toUpperCase();
      capitalize = false;
    } else if (string[i] === ' ') {
      newString += string[i];
      capitalize = true;
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}

// We can first define a variable with empty string
// we also need a variable with boolean vlaue
// we can use a for loop to circle through each letter of string
// when captialization is needed we will add uppercased value to the variable
// when we don't need captialization we can add lowercased value
// when there is empty space we define boolean value as true since next character needs to be capitalized
