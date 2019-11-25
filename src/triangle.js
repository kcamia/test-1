const readlineSync = require("readlineSync");

let base = Number(readlineSync.question("Enter base: "));
let height = Number(readlineSync.question("Enter height: "));
let hypo = Number(readlineSync.question("Enter hypotenuse: "));

let base2 = base ** 2;
let height2 = height ** 2;
let hypo2 = hypo ** 2;

let sum = base2 + height2;

if (sum == hypo2) {
  console.log("\nYes, that's a right triangle!");
} else {
  console.log("\nNope...not a right triangle.")
}
