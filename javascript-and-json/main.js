var library = [
  {
    isbn: '753-4553-22332',
    title: 'And Then There Were None',
    author: 'Agatha Christie'
  },
  {
    isbn: '523-5443-45443',
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '23-3443-234453',
    title: 'Alice in Wonderland',
    author: 'Lewis Carroll'
  }
];
console.log('book information:', library);
console.log('Type of newArray:', typeof library);

var libraryJSON = JSON.stringify(library);
console.log('library stringify:', libraryJSON);
console.log('library typeof:', typeof libraryJSON);

var studentJSON = '[{"id":10, "name":"Heesoo Kim"}]';
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

var obj = JSON.parse(studentJSON);
console.log('object value:', obj);
console.log('typeof object:', typeof obj);
