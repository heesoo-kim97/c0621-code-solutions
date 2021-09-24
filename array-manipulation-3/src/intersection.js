/* exported intersection */
function intersection(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        newArray.push(first[i]);
        break;
      }
    }
  }
  return newArray;
}

// define new variable to hold new array to be pushed onto
// using a loop we can set condition where if the value at index of each array is equal we push the value
// we can break after we push value into new array
// return the new array
