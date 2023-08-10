const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const myNewObj = {
  name: "Dushyant",
  score: "200",
  isAvailable: true,

  orderObj: function () {
    console.log("Object is not available");
  },
};

console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"));

Object.defineProperty(myNewObj, "name", {
  //   writable: false,
  enumerable: false,
});
// console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"));

for (let [key, value] of Object.entries(myNewObj)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
