// const name = "dushyant";
const repoCount = 50;

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("dushyant-si-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf("t"));

const newStr = gameName.substring(0, 4);
// console.log(newStr);

const anotherStr = gameName.slice(-10, 4);
// console.log(anotherStr);

const strOne = "   Dushyant   ";
// console.log(strOne);
// console.log(strOne.trim());

const url = "http://dushyant.com/dushyant%20singh";
// console.log(url.replace("%20", "-"));

// console.log(url.includes("dushyant"));

// console.log(gameName.split("-", 2));
// console.log(gameName.anchor(url));
// console.log(gameName.at(1));

// Just for put tags on the statement
// console.log(gameName.big());
// console.log(gameName.small());
// console.log(gameName.blink());
// console.log(gameName.bold());
// console.log(gameName.italics());
// console.log(gameName.strike());

// console.log(gameName.charAt(2));

// console.log(strOne.trim().concat(", ", gameName));

// RESt and SPREAD operators
// Spread operator
const arr = [1, 2, 3];
console.log(...arr);

const str = "hello";
console.log(...str);

// Rest Operator
const func = (...data) => {
  console.log(data);
};

func(1, 2, 3, 4);

const data = {
  name: "asd",
  password: "asd",
  date: "asd",
};
const { name, ...rest } = data;
console.log(rest);
