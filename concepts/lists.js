const list1 = [1, 2, 3, 4, 5];
// const list2 = list1 // editing list2 will change list1

//* COPY ARRAY SO THAT THE NEW ARRAY CAN BE MODIFIED WITHOUT EFFECTING LIST1
// const list2 = [...list1];
// const list2 = list1.slice();
const list2 = list1.concat([]);

list1.push(6, 7, 8);
console.log(list1);
console.log(list2);
