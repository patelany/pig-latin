const process = require("process");
const translate = require("../src/piglatin.js");

// Printing process.argv property value
const args = process.argv;
for (let i = 2; i < args.length; i++) {
  let word = translate(args[i]);
  console.log(word);
}
