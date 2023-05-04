// const translate = (englishWord) => {
//   englishWord = englishWord.toLowerCase();
//   // takes a string
//   // returns a string
//   const vowels = "aeiou";
//   //   is the first letter a vowel
//   if (vowels.includes(englishWord[0])) {
//     // first letter is a vowel
//     return englishWord + "way";
//   } else {
//     // the first letter was a consonant
//     // now check second letter
//     if (!vowels.includes(englishWord[1])) {
//       // first two letters are both consonants
//       // move first 2 letters to the end
//       // add "ay"
//       if (!vowels.includes(englishWord[2])) {
//         let firstThreeLetters = englishWord.slice(0, 3);
//         let restOfString = englishWord.slice(3);
//         return restOfString + firstThreeLetters + "ay";
//       }
//       let firstTwoLetters = englishWord.slice(0, 2);
//       let restOfString = englishWord.slice(2);
//       return restOfString + firstTwoLetters + "ay";
//     } else {
//       // first letter was a consonant but the second letter was a vowel
//       // move that consonant to end of word
//       // add "ay" to end
//       let firstLetter = englishWord[0];
//       // index 1 with slice starts at the second character
//       const restOfString = englishWord.slice(1);
//       return restOfString + firstLetter + "ay";
//     }
//   }
// };

const translate = (englishWord) => {
  englishWord = englishWord.toLowerCase();
  const vowels = "aeiou";
  for (let i = 0; i < englishWord.length; i++) {
    if (!vowels.includes(englishWord[i])) {
      if (!vowels.includes(englishWord[i + 1])) {
        if (!vowels.includes(englishWord[i + 2])) {
          let letter = englishWord.slice(0, i + 3);
          let restOfString = englishWord.slice(i + 3);
          return restOfString + letter + "ay";
        }
        let letter = englishWord.slice(0, i + 2);
        let restOfString = englishWord.slice(i + 2);
        return restOfString + letter + "ay";
      }
      let letter = englishWord.slice(0, i + 1);
      let restOfString = englishWord.slice(i + 1);
      return restOfString + letter + "ay";
    } else {
      return englishWord + "way";
    }
  }
};

module.exports = translate;
