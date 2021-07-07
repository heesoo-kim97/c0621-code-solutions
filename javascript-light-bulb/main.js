var $body = document.querySelector('body');
var $button = document.querySelector('button');

function handleButton(event) {
  if ($body.className === 'switchOff') {
    $body.className = 'switchOn';
    $button.className = 'switchOn';
  } else {
    $body.className = 'switchOff';
    $button.className = 'switchOff';
  }
}

$button.addEventListener('click', handleButton);
