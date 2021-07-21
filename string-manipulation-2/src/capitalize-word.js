/* exported capitalizeWord */
function capitalizeWord(word) {
  var captialize = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  var javaScript = 'JavaScript';
  if (word.toLowerCase() === 'javascript') {
    return javaScript;
  } else {
    return captialize;
  }
}

// define a variable that capitalized first letter only
// define a variable with value that prints JavaScript
// any kind of javascript word should return variable with JavaScript print
