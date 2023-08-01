// array

const myArr = [0, 1, 2, 3, 4, 5];

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// Slice, splice

console.log("A ", myArr);

const newArr = myArr.slice(1, 3);

console.log(newArr);
console.log("B ", myArr);

const newArr1 = myArr.splice(1, 3);
console.log(newArr1);
console.log("C ", myArr);
