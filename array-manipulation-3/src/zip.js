/* exported zip */
function zip(first, second) {
  const newArray = [];
  let i = 0;
  while (i < first.length && i < second.length) {
    newArray.push([first[i], second[i]]);
    i++;
  }
  return newArray;
}

// Define new variable that holds empty array
// use a while loop to loop through the array
// push the values at each index to empty array
// return the array
