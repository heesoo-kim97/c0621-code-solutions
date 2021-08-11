let currentCount = 3;
const newCount = setInterval(function () {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(newCount);
    return;
  }
  console.log(currentCount);
  currentCount--;
}, 1000);
