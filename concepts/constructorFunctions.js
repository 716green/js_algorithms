//* Constructor Function
//? Create Params
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}
//? Create Methods
User.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};
User.prototype.getInfo = function () {
  return this.firstName + ' is a ' + this.age + ' year old ' + this.gender;
};

const user1 = new User('Bob', 'Bass', 30, 'male');
console.log(user1);

//? Run methods and save values
const fullName = user1.getFullName();
const userInfo = user1.getInfo();

//? Print Values to Code Section in HTML
function render(printValue) {
  const printData = printValue;

  let div = document.createElement('div');
  let br = document.createElement('br');
  div.innerHTML = printData;
  document.getElementById('body').appendChild(div);
  document.getElementById('body').appendChild(br);
}

//? Render to DOM
render('Hello World');
render(fullName);
render(userInfo);
