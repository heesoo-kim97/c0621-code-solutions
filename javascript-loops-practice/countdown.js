/* exported countdown */
function countdown(number) {
  var down = [];
  while (number >= 0) {
    down.push(number);
    number--;
  }
  return down;
}
