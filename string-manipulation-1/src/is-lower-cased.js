/* exported isLowerCased */
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

// we can use if statement to have a condition comparing string value to
// its lowercased value to see if they are strictly equal to each other and return true
