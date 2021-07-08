var $blueButton = document.querySelector('.blue-button');
var $surveyContainer = document.querySelector('.survey-container');
var $redButton = document.querySelector('.red-button');

function handleBlueButton(event) {
  $surveyContainer.className = 'survey-container';
}

function handleRedButton(event) {
  $surveyContainer.className = 'survey-container hide';
}

$blueButton.addEventListener('click', handleBlueButton);
$redButton.addEventListener('click', handleRedButton);
