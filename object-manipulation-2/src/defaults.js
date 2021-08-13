/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
  return target;
}

// 1. Define function defaults with parameter target and source
// 2. Use for in loop to identify keys of source object
// 3. If value of target object's property is undefined then source is equal to target object
