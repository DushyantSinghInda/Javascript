// Object literal
const user = {
  username: "Dushyant",
  loginCount: 2,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(this.username);
    // return this;
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}
const userOne = new User("Dushyant", 2, true);
const userTwo = new User("Hitesh", 8, false);
console.log(userOne.constructor);
// console.log(userTwo);
