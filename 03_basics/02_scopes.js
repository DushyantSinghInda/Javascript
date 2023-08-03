// var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   c = 30;
  //   console.log("INNER A: ", a);
}

// console.log("OUTER A: ", a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Dushyant";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}
// CLosure -> Mota moti it means that when we access the outer variable in the in function

// one();

if (true) {
  const username = "Dushyant";
  if (username === "Dushyant") {
    const website = " Youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// +++++++++++++++++ Intersting +++++++++++++++++

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

console.log(addTwo(5));

const addTwo = function (num) {
  //Sometime we call it as expression
  return num + 2;
};
