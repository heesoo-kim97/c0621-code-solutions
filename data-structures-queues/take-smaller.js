/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (second === undefined) {
    return first;
  }
  const maximum = Math.max(first, second);
  const minimum = Math.min(first, second);
  queue.enqueue(maximum);
  return minimum;
}
