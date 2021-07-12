const user1 = {
  name: 'Jordan',
  age: 28,
};

// const user2 = user1;
const user2 = {
  name: 'Jordan',
  age: 28,
};

//! Objects are referenced by memory locations
console.log(user1 === user2); // false
console.log(JSON.stringify(user1) === JSON.stringify(user2)); // true
