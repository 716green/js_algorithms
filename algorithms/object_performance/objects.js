let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// O(N)
console.log(Object.keys(instructor));
console.log(Object.entries(instructor));

// O(1)
instructor.hasOwnProperty('firstName');
