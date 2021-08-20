function filter(array, predicate) {
  const newArray = [];
  for (const instance of array) {
    if (predicate(instance)) {
      newArray.push(instance);
    }
  }
  return newArray;
}
