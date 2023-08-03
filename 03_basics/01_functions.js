function sayMyName() {
  console.log("D");
  console.log("U");
  console.log("S");
  console.log("H");
  console.log("I");
}

// sayMyName; // This is reference
// sayMyName(); //This is execution

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const result = addTwoNumbers(3, 4);

// console.log("Result: ", result);

function loginUserMessage(username = "Hitesh") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in `;
}

// console.log(loginUserMessage("Dushyant"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "Dushyant",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondVaue(getArray) {
  return getArray[1];
}

// console.log(returnSecondVaue(myNewArray));
console.log(returnSecondVaue([200, 400, 100, 600]));
