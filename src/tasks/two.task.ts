const isBalanced = (input: string): string => {
  const stack: string[] = [];
  const matchingBrackets: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of input) {
    if (char === " " || char === "\t" || char === "\n") {
      continue; // Skip whitespace
    }
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
};

export default isBalanced;
