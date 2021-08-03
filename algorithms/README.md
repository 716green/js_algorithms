# JavaScript Algorithms and Data Structures

## Big O Notation

- O(1) = Constant Time
- O(log n) = Logarithmic Time
- O(N) = Linear Time
- O(Nlog n) = Linearithmic Time
- O(n^2) = Quadratic Time

![](./assets/big_O_logarithm_complexity.png)

- To analyze the performance of an algorithm, we use Big O Notations
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not hardware used to run the algorithm

## Performance of Arrays and Objects

## Arrays

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

## Big O of Arrays

> Push and Pop are always better to use than shift/unshift
> Searching an array increases in a linear manner for unsorted data

```
Insertion - It depends...
Removal - It depends...
Searching - O(N)
Access - O(1)
```

## Big O of Array Operations

```
push - O(1)
pop - O(1)
shift - O(N)
unshift - O(N)
concat - O(N)
slice - O(N)
splice - O(N)
sort - O(N \* log N)
forEach/map/filter/reduce/etc. - O(N)
```
