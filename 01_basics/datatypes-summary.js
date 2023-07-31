// JavaScript is dynamic type language
// # Primitive

//  7types : String, Number, Boolean, null, undefined, Symbol, bigInt

const score = false;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id);
// console.log(anotherId);

const bigNumber = 32563565476767853754657856n; //for bigInt

// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Dushyant",
  age: 23,
};

const myFunction = function () {
  console.log("Hello world");
};

// console.log(typeof anotherId);

// **************************************************

// Stack Memory (Primitive), Heap memory (Non-primitive)

let myYoutubename = "Dushyantdotcom";

let anotherName = myYoutubename;
anotherName = "secondchannel";

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "dushyant@ybl",
};

let userTwo = userOne;

userTwo.email = "dushyant@example.com";

console.log(userOne.email);
console.log(userTwo.email);
