import { arrOfWord } from "../consts/arry.const";

const getCharWeight = (char: string): number => {
  return arrOfWord.indexOf(char) + 1;
};

const weighetedString = (str: string, query: number[]): string[] => {
  const weights: number[] = [];
  const n = str.length;
  let i = 0;

  while (i < n) {
    const currentChar = str[i];
    let currentCharWeight = getCharWeight(currentChar);

    weights.push(currentCharWeight);

    let j = i + 1;
    // Check if next char is same as current char
    while (j < n && currentChar === str[j]) {
      currentCharWeight += getCharWeight(currentChar);

      weights.push(currentCharWeight);
      j++;
    }

    i = j;
  }

  const res = query.map((q) => (weights.includes(q) ? "Yes" : "No"));

  return res;
};

export default weighetedString;
