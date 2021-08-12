var $span = document.querySelectorAll('span');
document.addEventListener('keydown', keyHandler);
var i = 0;

function keyHandler(event) {
  $span[i].className = 'underline';
  if (i === ($span.length)) {
    return null;
  } else if (event.key === $span[i].textContent) {
    $span[i].className = 'right';
    $span[i + 1].className = 'underline';
    i++;
  } else {
    $span[i].className = 'wrong underline';
  }
}
