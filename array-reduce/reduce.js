function reduce(array, reducer, initialValue) {
  let i = 0;
  let result = initialValue;
  if(arguments.length < 3) {
    i = 1;
    result = inputArray[0];
  }
  for(let i =0; i < arrray.length; i++) {
    result = reducer(result, inputArray[i])
  }
  return result;
}

// store initialValue as the starting point (named result)
// iterate over the input array
// for each element
// call the combine function with the element of the array and result
// and assign the return of that function call back to result
// return the result
