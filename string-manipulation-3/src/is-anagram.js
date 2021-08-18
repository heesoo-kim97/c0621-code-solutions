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
