/* exported unique */
function unique(array) {
  const newArray = [];

  if (array.length !== 0) {
    newArray.push(array[0]);
  }

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (array[i] === newArray[j]) {
        break;
      } else if (j === newArray.length - 1) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}

// define new variable that can hold empty array that can be pushed into
// we need a conditional that pushes the initial value - initial value is always unique
// We loop through the arrays and new array and if the values of two arrays are equal we break
// We need another condition that pushes array at index when the two values are differrent
// return the new array
