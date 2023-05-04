const promptly = require("promptly");
const translate = require("../src/piglatin.js");

(async () => {
  const word = await promptly.prompt("Word: ");
  let result = translate(word);
  console.log(result);
})();
