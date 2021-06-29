function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('The result of converting minutes to seconds: ', convertMinutesToSecondsResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log('The area of the triangle:', getAreaResult);

function getFirstName(person) {
  var justFirstName = person.firstName;
  return justFirstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Elon', lastName: 'Musk' });
console.log('First name is:', getFirstNameResult);

function getLastElement(array) {
  var last = array[array.length - 1];
  return last;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accesories']);
console.log('The last element is:', getLastElementResult);
