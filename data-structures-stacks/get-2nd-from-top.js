/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const top = stack.pop();
  const next = stack.peek();
  if (top !== undefined) {
    stack.push(top);
  }
  return next;
}
