function handleFocus(event) {
  console.log("focus' event fired");
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log("blur' event fired");
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name, ':', event.target.value);
}

var $userName = document.forms[0].querySelector('#user-name');
var $userEmail = document.forms[0].querySelector('#user-email');
var $text = document.querySelector('textarea');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$text.addEventListener('focus', handleFocus);
$text.addEventListener('blur', handleBlur);
$text.addEventListener('input', handleInput);
