// let myName = "Dushyant    ";
// let mychannel = "chai    "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman", "Ironman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  Ironman: "jarvis",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// Factory function

Object.prototype.dushyant = function () {
  console.log(`Dushyant is present in all objects`);
};

Array.prototype.heyDushyant = function () {
  console.log(`Dushyant says hello`);
};

// heroPower.dushyant();
// myHeros.dushyant();
// myHeros.heyDushyant();
// heroPower.heyDushyant();

// inheritance

const User = {
  name: "chai",
  email: "chai@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // Prototypal inheritance
};

Teacher.__proto__ = User; // Prototypal inheritance

// modern syntax of Prototypal inheritance
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Chaiaurcode       ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

"hitesh".trueLength();
"iceTea".trueLength();

anotherUsername.trueLength();
