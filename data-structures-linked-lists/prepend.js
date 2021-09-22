/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const beginning = new LinkedList(value);
  beginning.next = list;
  return beginning;
}
