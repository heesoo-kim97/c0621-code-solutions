var $heading1 = document.querySelector('h1');

function handleText() {
  $heading1.textContent = 'Hello There';
}

setTimeout(handleText, 2000);
