/* exported difference */
function difference(first, second) {
  const newArray = [];
  const secondValue = second.slice();
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        secondValue.splice(j, 1);
        break;
      } else if (j === second.length - 1) {
        newArray.push(first[i]);
      }
    }
  }
  for (var k = 0; k < secondValue.length; k++) {
    newArray.push(secondValue[k]);
  }
  return newArray;
}

// We need new variable that can hold empty array
// we need to loop through the first array and the second array
// we need condition where if index at first array and second array is equal, we take it out of array
// we need another condition where we check when index is at the end we push that value into new array
// using another loop we can check the newly stored values that are different from second array and pushed into new array
// return the new array
