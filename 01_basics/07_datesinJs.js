let myDate = new Date(); // Date is object type.
// console.log(myDate.toString()); // Mon Jul 31 2023 16:28:43 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Mon Jul 31 2023
// console.log(myDate.toISOString()); //2023-07-31T11:02:25.227Z
// console.log(myDate.toJSON()); // 2023-07-31T11:02:25.227Z
// console.log(myDate.toLocaleDateString()); // 7/31/2023
// console.log(myDate.toLocaleString()); // 7/31/2023, 4:32:25 PM
// console.log(myDate.toLocaleTimeString()); // 4:32:25 PM
// console.log(myDate.toTimeString()); // 16:32:25 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); // Mon, 31 Jul 2023 11:02:25 GMT

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023"); // Indians follow MM/DD/YY format

// console.log(myCreatedDate.toLocaleString());

// **********Important Concept ***********
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

newDate.toLocaleString("default", {
  weekday: "long",
});
