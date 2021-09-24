/* exported union */
function union(first, second) {
  const combined = first.slice();
  for (let i = 0; i < second.length; i++) {
    for (let j = 0; j < combined.length; j++) {
      if (second[i] === combined[j]) {
        break;
      } else if (j === combined.length - 1) {
        combined.push(second[i]);
      }
    }
  }
  return combined;
}

// define a new variable that holds sliced value of first array
// using loops we can set condition if values at same index is equal we can break
// set another condition to see when we get to the last index we push the last value
// return the variable
