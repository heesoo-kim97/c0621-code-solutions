/* exported numVowels */
function numVowels(string) {
  var total = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === 'A' || string[i].toUpperCase() === 'E' || string[i].toUpperCase() === 'I' || string[i].toUpperCase() === 'O' || string[i].toUpperCase() === 'U') {
      total += 1;
    }
  }
  return total;
}

// We can first define a variable with zero that we can add total to
// we can use a for loop to circle through each letter of string
// we can use if statements to check if a string value is a vowel
// make it into single capitalization and add number
