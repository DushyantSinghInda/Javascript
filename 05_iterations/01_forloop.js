//  for

for (let i = 0; i < 10; i++) {
  const element = i;
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArray = ["flash", "batman", "superman"];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //   console.log(element);
}

//  break and continue

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
  if (i % 5 == 0) {
    // console.log(`Detected 5`);
    continue;
  }
  console.log(`value of i is ${i}`);
}
