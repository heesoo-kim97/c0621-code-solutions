/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }
  const secondToFirst = list.next;
  list.next = list.next.next;
  secondToFirst.next = list;
  return secondToFirst;
}
