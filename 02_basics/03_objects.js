// singleton -> will create when we make it with constructor
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Dushyant",
  "full name": "Dushyant Singh Inda",
  [mySym]: "myKey1",
  age: 23,
  location: "Jodhpur",
  email: "dushyant@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "dushyant@example.com";
// Object.freeze(JsUser); //  freeze (Important concept)
JsUser.email = "dushyant@google.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
