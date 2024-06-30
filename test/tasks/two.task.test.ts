import { describe, it, expect } from "bun:test";

import isBalanced from "../../src/tasks/two.task";

describe("balanced bracket", () => {
  it("Test no 1: should return YES", () => {
    // assign
    const input = "{ [ ( ) ] }";
    const resExpect = "YES";

    // act
    const result = isBalanced(input);

    // assert
    expect(result).toEqual(resExpect);
  });

  it("Test no 2: should return NO", () => {
    // assign
    const input = "{ [ ( ] ) }";
    const resExpect = "NO";

    // act
    const result = isBalanced(input);

    // assert
    expect(result).toEqual(resExpect);
  });

  it("Test no 3: should return YES", () => {
    // assign
    const input = "{ ( ( [ ] ) [ ] ) [ ] }";
    const resExpect = "YES";

    // act
    const result = isBalanced(input);

    // assert
    expect(result).toEqual(resExpect);
  });
});
