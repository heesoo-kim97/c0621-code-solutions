/* exported capitalize */
function capitalize(word) {
  var result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return result;
}
// Select the first character to be capitalized while rest of the string to be lowercased
