/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var newString1 = '';
  var newString2 = '';
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      newString1 += firstString[i];
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      newString2 += secondString[j];
    }
  }

  var anagram = newString2;

  for (var k = 0; k < newString1.length; k++) {
    for (var l = 0; l < newString2.length; l++) {
      if (newString1[k] === newString2[l]) {
        anagram = anagram.replace(newString1[k], '');
        break;
      }
    }
  }
  if (anagram === '') {
    return true;
  } else {
    return false;
  }
}

// 1. First define the function with two parameters
// 2. Define two variables that can carry empty string for each
// 3. using for loops, we can loop through firstString parameter while also
// cycling through secondString parameter.
// 4. If the letters match since anagrams have same letters with same order, we can report the match
// 5. To account for repeated characters, I assign the variable that holds previous character to new variable
// 6. We loop through both orginal two variables to check if specific letter was found in other word
// 7. We can 'cross off' when the characters match and see if it is truly an anagram
// 8. return boolean value to show whether the two parameters are indeed anagrams
