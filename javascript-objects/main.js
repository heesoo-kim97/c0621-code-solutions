var student = {
  firstName: 'Heesoo',
  lastName: 'Kim',
  age: '24'
};

var fullName = student.firstName + student.lastName;
console.log('the value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';

console.log('the value of student.livesInIrvine:', student.livesInIrvine);
console.log('the value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Tesla',
  model: 'Model S',
  year: '2021'
};

vehicle['color'] = 'white';
vehicle['isCovertible'] = false;

console.log('the value of vehicle["color"]:', vehicle['color']);
console.log('the value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('the value of vehicle:', vehicle);

var pet = {
  name: 'Fighter',
  type: 'German Shepherd'
};

delete pet.name;
delete pet.type;

console.log('the value of pet:', pet);
