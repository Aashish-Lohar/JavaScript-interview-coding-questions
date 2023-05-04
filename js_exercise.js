//1. Create a function which stores inside a secret word which cannot be changed or accessed from
// outside

const someFunc = () => {
  const secret = "secret";
  return () => secret;
};

const getSecret = someFunc();
// console.log(getSecret());

// 2. How can I clone a object in javascript

const obj = { a: 1, b: 2 };
const clone = { ...obj }; //1st method
clone.c = 3;
const clone2 = Object.assign({}, obj); //2nd method
clone2.d = 4;
// console.log(obj, clone, clone2);

// 3. count vowels in string
const findVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);
};

// console.log(findVowels("aertyio"));

// 4. Reverse each word in sentence
const sentence = "Welcome to the javascript interview questions";
const reversed = sentence.split(" ").reverse().join(" ");
// console.log(reversed);

// 5. Define a function that takes an array of strings, and returns the most commonly
// occurring string in that array.
//sol.1 normal approach
const mostCommonString = (str) => {
  const commonStrings = {};

  str.forEach((string) => {
    if (commonStrings[string] === undefined) {
      commonStrings[string] = 1;
    } else {
      commonStrings[string]++;
    }
  });
  console.log(commonStrings);

  let maxEntry;
  let maxValue = 0;
  for (commonString in commonStrings) {
    if (commonStrings[commonString] > maxValue) {
      maxEntry = commonString;
      maxValue = commonStrings[commonString];
    }
  }
  return maxEntry;
};
// console.log(mostCommonString(['a','c','b','d','f','f','g']));

// sol.2 Advance approach
const mostFrequent = (arr) => {
  const mapping = arr.reduce((acc, str) => {
    acc[str] = acc[str] ? acc[str] + 1 : 1;
    return acc;
  }, {});
  console.log(mapping);

  return Object.entries(mapping).reduce(
    (acc, el) => (el[1] > acc[1] ? el : acc),
    [null, 0]
  );
};

// console.log(mostFrequent(["a", "c", "b", "d", "f", "f", "g"])[0]);

