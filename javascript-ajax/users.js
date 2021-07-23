var $user = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', loadHandler);

function loadHandler() {
  console.log('xhr status:', xhr.status);
  console.log('xhr response', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var $listItems = document.createElement('li');
    $listItems.textContent = xhr.response[i].name;
    $user.append($listItems);
  }
}

xhr.send();
