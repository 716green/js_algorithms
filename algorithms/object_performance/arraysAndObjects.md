# Arrays and Objects

- Understand how objects and arrays work through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects as well as built-in methods

## Objects

> Reference Hash Tables and Hash Maps for more info
> Objects are fast, but unordered and can slow things down

```js
let instructor = {
  firstName: 'Sam',
  isInstructor: false,
  favoriteNumbers: [1, 2, 5, 7],
};
```

When you don't need any ordering, objects are an excellent choice

### Big O of Objects

```
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)

```

### Big O of Object Methods

```
Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)

```

## Arrays

```
Insertion - It depends...
Removal - It depends...
Searching - O(N)
Access - O(1)
```

> Arrays are Ordered Lists
> Use (mostly) when you need order
> Linked lists can be better in some ordered list solutions
> If you have a 10,000 item array, and you need item 9,000, the array will use the index to jump right to the data instead of looping through all items

```js
let names = ['Michael', 'Melissa', 'Andrea'];
let values = [true, {}, [], 'Awesome'];
// O(1)
names.push('Raj');

// Indexes all shift - this can take quite some time
names.unshift('Raj');
```
