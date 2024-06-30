import { describe, it, expect } from "bun:test";

import highestPalindrome from "../../src/tasks/three.task";

describe("weigheted string", () => {
  it("Test no 1: should return 3993", () => {
    // assign
    const s = "3943";
    const k = 1;
    const resExpect = "3993";

    // act
    const result = highestPalindrome(s, k);

    // assert
    expect(result).toEqual(resExpect);
  });

  it("Test no 2: should return 992299", () => {
    // assign
    const s = "932239";
    const k = 2;
    const resExpect = "992299";

    // act
    const result = highestPalindrome(s, k);

    // assert
    expect(result).toEqual(resExpect);
  });

  it("Test no 3: should return -1", () => {
    // assign
    const s = "12345";
    const k = 1;
    const resExpect = "-1";

    // act
    const result = highestPalindrome(s, k);

    // assert
    expect(result).toEqual(resExpect);
  });
});
