var $imageList = document.querySelectorAll('.portrait');
var $dotBar = document.querySelector('.dot-bar');
var $dot = document.querySelectorAll('.dot');

var $leftButton = document.querySelector('.move-left');
var $rightButton = document.querySelector('.move-right');

var autoScroll = setInterval(transitionRight, 3000);

$leftButton.addEventListener('click', transitionLeft);
$rightButton.addEventListener('click', transitionRight);
$dotBar.addEventListener('click', handleNav);

function handleImage(index) {
  for (var i = 0; i < $imageList.length; i++) {
    if (i !== index) {
      $imageList[i].classList.add('hidden');
      $dot[i].classList.remove('fas');
      $dot[i].classList.add('far');
    } else {
      $imageList[i].classList.remove('hidden');
      $dot[i].classList.add('fas');
      $dot[i].classList.remove('far');
    }
  }
  clearInterval(autoScroll);
  autoScroll = setInterval(transitionRight, 3000);
}

var currentIndex = 0;

function transitionLeft(event) {
  currentIndex--;
  if (currentIndex === -1) {
    currentIndex = 4;
  }

  handleImage(currentIndex);
}

function transitionRight(event) {
  currentIndex++;
  if (currentIndex === 5) {
    currentIndex = 0;
  }

  handleImage(currentIndex);
}

function handleNav(event) {
  for (var i = 0; i < $dot.length; i++) {
    if (event.target === $dot[i]) {
      currentIndex = i;
      handleImage(currentIndex);
      break;
    }
  }
}
