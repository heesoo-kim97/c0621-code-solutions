/* exported reverseWords */
function reverseWords(string) {
  var wordArr = string.split(' ');
  var reverseArr = [];
  var reverseStr = '';
  var newString = '';
  for (var i = 0; i < wordArr.length; i++) {
    for (var j = wordArr[i].length - 1; j >= 0; j--) {
      newString += wordArr[i][j];
    }
    reverseArr.push(newString);
    newString = '';
  }

  for (var x = 0; x < reverseArr.length; x++) {
    reverseStr += reverseArr[x] + ' ';
  }

  reverseStr = reverseStr.slice(0, reverseStr.length - 1);
  return reverseStr;
}

// 1. Define variables that holds empty array, empty strings
// 2. also define varaible that can hold string parameter when there is space in between letters
// 3. we need to reverse each letter but keep the order of the word
// 4. we can loop through length of the first word from the parameter using split
// 5. Assign the reversed letters of a word to a newString
// 6. push the newString into empty array that holds reversed value
// 7. newString becomes empty string once again and loops again
// 8. Re-add spaces in between reversed words and return the reversed string
