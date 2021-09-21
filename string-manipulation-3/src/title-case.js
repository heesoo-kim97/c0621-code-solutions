/* exported titleCase */

function titleCase(string) {
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  string = string.split(' ');
  for (var i = 0; i < string.length; i++) {

    if (string[i] === 'api') {
      string[i] = string[i].toUpperCase();
    }
    if (string[i].toLowerCase().includes('javascript')) {
      if (string[i].includes(':')) {
        string[i] = 'JavaScript:';
      } else {
        string[i] = 'JavaScript';
      }
    }
    if (!minorWords.includes(string[i]) || string[i] === string[0]) {
      string[i] = string[i][0].toUpperCase() + string[i].substring(1);
    }
    if (string[i].includes(':')) {
      string[i + 1] = string[i + 1][0].toUpperCase() + string[i + 1].substring(1);
    }
    if (string[i].includes('-')) {
      var newString = string[i].split('-');
      newString[1] = newString[1][0].toUpperCase() + newString[1].substring(1);
      newString = newString.join('-');
      string[i] = newString;
    }
  }
  string = string.join(' ');
  return string;
}

// Define variables that has empty array and empty string
// I would need to capitalize each first letter of each word by looping through the parameter split string value
// I would need to filter "minor" words with if statement
// I would need loop throught the word and check for '-' using if statment and captalize the next character
// loop through the string parameter once again and filter using if statement to captailize 'api'
// While looping through the string, captialize the S and the next character after 'Javascript:'
// Returned the joined string value
