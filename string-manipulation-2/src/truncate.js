/* exported truncate */
function truncate(length, string) {
  var truncated = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      truncated += string[i];
    }
  }
  return truncated + '...';
}

// We can first define a variable with empty string
// we can use a for loop to circle through each letter of string
// when string at index exist we can add the string value at the index to the variable
