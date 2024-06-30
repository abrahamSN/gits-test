const highestPalindrome = (s: string, k: number): string => {
  const chars = s.split("");
  const n = chars.length;
  let changed = new Array(n).fill(false);

  function makePalindrome(i: number, j: number, k: number): number {
    if (i >= j) {
      return k;
    }

    if (chars[i] !== chars[j]) {
      const maxChar = chars[i] > chars[j] ? chars[i] : chars[j];
      chars[i] = maxChar;
      chars[j] = maxChar;
      changed[i] = true;
      changed[j] = true;
      k--;
    }

    return makePalindrome(i + 1, j - 1, k);
  }

  function maxPalindrome(i: number, j: number, k: number): void {
    if (i >= j || k <= 0) {
      return;
    }

    if (chars[i] === chars[j] && chars[i] !== "9") {
      if (changed[i] || changed[j]) {
        chars[i] = "9";
        chars[j] = "9";
        k--;
      } else if (k >= 2) {
        chars[i] = "9";
        chars[j] = "9";
        k -= 2;
      }
    } else if (chars[i] !== chars[j]) {
      // make sure if not a palindrome
      if (chars[i] !== "9") {
        chars[i] = "9";
        k--;
      }
      if (chars[j] !== "9") {
        chars[j] = "9";
        k--;
      }
    }
    maxPalindrome(i + 1, j - 1, k);
  }

  k = makePalindrome(0, n - 1, k);

  if (k < 0) {
    return "-1";
  }

  maxPalindrome(0, n - 1, k);

  return chars.join("");
};

export default highestPalindrome;
