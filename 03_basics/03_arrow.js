// ES6 is released in 2015
// Arrow function introduced in ES6

const user = {
  username: "Dushyant",
  price: 999,

  welcomeMessage: function (params) {
    console.log(`${this.username}, welcome to website`); // This refers the current context.
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Dushyant";
//   console.log(this.username); //This can't be used other than objects
// }

// const chai = function () {
//   let username = "Dushyant";
//   console.log(this.username);
// };

const chai = () => {
  let username = "Dushyant";
  console.log(this);
};

// chai();

// Explicit Arrow function
const addTwo = (num1, num2) => {
  return num1 + num2;
};

// console.log(addTwo(3, 4));

// Implicit Arrow function
// const subTwo = (num1, num2) => num1 - num2;

const subTwo = (num1, num2) => ({ username: "Dushyant" }); // We can't return objects without parentheses in implicit functions

console.log(subTwo(7, 4));
