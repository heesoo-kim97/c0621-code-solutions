/* exported reverseWord */
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}

// we return string value starting with last index of the string. This can be done by for loops with decrements.
