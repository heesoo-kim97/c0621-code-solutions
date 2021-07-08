var $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var formObj = {};
  for (var i = 0; i < $contactForm.elements.length; i++) {
    formObj[$contactForm.elements[i].name] = $contactForm.elements[i].value;
  }
  console.log(formObj);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
