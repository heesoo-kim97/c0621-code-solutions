/* exported flatten */
function flatten(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// Define a new variable that can hold empty array that can be pushed onto
// using a loop we can set condition to check whether a value is an array
// when the value is an array we can loop through that specific array
// while looping the specific array, we can push both values to flatten the array by one level
// return the new array
