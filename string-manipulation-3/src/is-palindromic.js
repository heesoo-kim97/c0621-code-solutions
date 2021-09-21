/* exported isPalindromic */
function isPalindromic(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString += string[i];
    }
  }

  var count = newString.length - 1;
  for (let j = 0; j < newString.length; j++) {
    if (j >= count) {
      return true;
    }
    if (newString[j] !== newString[count]) {
      return false;
    }
    count--;
  }
}

// 1. Define function named isPalindromic with 1 parameter string
// 2. define a empty string we can push onto
// 3. loop through the string letters
// 4. if each string at specific index is not an empty space, push to the variable with empty string
// 5. define variable that can keep track of string index from last letter
// 6. loop through the word
// 7. if counting up index is equal to or greater than counting down index, then return boolean value of true
// 8. if the value at counting down index does not match the value at counting up index then return false
