console.log(900.9 === 300.3 * 3); // false - 900.9 === 900.90000000000001
console.log((900.9).toFixed(1) === (300.3 * 3).toFixed(1)); // true
console.log(Number((300.3 * 3).toPrecision(12)));
console.log((300.3 * 10 * 3) / 10);
