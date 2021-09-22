/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  let second = queue.peek();
  if (second === undefined) {
    return first;
  }
  while (second < first) {
    queue.enqueue(first);
    first = queue.dequeue();
    second = queue.peek();
  }
  return first;
}
