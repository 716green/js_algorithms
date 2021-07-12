# JavaScript Data Structures and Algorithms

## Technical Interview Prep

---

## The Problem with Time

- Different machines will record different times
- The same machine will record different times
- Time consuming

### Time Alternative(s)

> Rather than counting seconds which are variable, focus on number of simple operations the computer needs to perform

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

**3 simple operations, regardless of the size of n**

- 1 Multiplication
- 1 Addition
- 1 Division

**Compared to the first solution**

```js
function addUpto(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

n additions
n assignments
n additions and n assignments
1 assignment
1 assignment
n comparisons

## Counting

- Depending on what we count, the numbers can be vastly different so we need a standardized method for counting complexity

# Big O

## Time Complexity

> Amount of time it takes to run

![](../js-interview/images/BigO.png)

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n) as n increases

> Count input size and time relative to that input
> We don't care about detail, we care about trends

Big O Notation is a way to formalize fuzzy counting.
It allows us to talk formally about how the runtime of an algorithm grows as inputs grow

f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n^2)
f(n) could be constant (f(n) = 1)
f(n) could be something entirely different

> Number of operations is (eventually) bounded by a multiple of n (ie: 10n)

```js
//* This is O(n)
function countUpAndDown(n) {
  console.log('Going up!');
  // O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top!\nGoing down...');
  // O(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
}

// O(n^2) - Exponential Curve
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

## Simplifying Big O Notations

```md
O(2n) => O(n)
O(500) => O(1)
O(13n^2) => O(n2)

O(n+10) => O(n)
O(1000n + 50) => O(n)
O(n^2 + 5n + 8) => O(n^2)
```

- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

```js
function logAtLeast5(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

## Space Complexity

> Amount of memory taken up

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

```js
// O(1) space
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

sum([1, 2, 3, 4, 5]); // 15
// 2 total vars

// O(n) space
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
// 2 total vars

double([1, 2, 3, 4, 5]); // [2, 4, 6, 8, 10]
```
