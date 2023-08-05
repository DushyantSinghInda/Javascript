// for each

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe); //We have to execute the function here

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "Ruby",
    languageFileName: "rb",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageName);
});

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });
// console.log(values);
