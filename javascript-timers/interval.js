var $heading1 = document.querySelector('h1');
var count = 4;
var timer = null;
function countDown() {
  count--;
  if (count > 0) {
    $heading1.textContent = count;
  } else {
    $heading1.textContent = '~Earth Beeeeeelooooowwwwwwww Us~';
    clearInterval(timer);
  }
}

timer = setInterval(countDown, 1000);
