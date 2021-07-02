/* exported getWords */
function getWords(string) {
  var words = [];
  if (string !== '') {
    words = string.split(' ');
  } else {
    string = words;
  }
  return words;
}

// assign an empty array to a variable and split the string value when there is a space. This will only be done when string value does not equal empty value.
