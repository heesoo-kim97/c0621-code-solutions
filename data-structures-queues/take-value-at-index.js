/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = index;
  let first = queue.dequeue();
  while (count > 0) {
    first = queue.dequeue(queue.enqueue(first));
    count--;
  }
  return first;
}
