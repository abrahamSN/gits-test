import { describe, it, expect } from "bun:test";

import weighetedString from "../../src/tasks/one.task";

describe("weigheted string", () => {
  it("Test no 1: should return an array of YesNo", () => {
    // assign
    const str = "abbcccd";
    const query = [1, 3, 9, 8];
    const resExpect = ["Yes", "Yes", "Yes", "No"];

    // act
    const result = weighetedString(str, query);

    // assert
    expect(result).toEqual(resExpect);
  });

  it("Test no 2: should return an array of YesNo", () => {
    // assign
    const str = "ggbbcccd";
    const query = [11, 3, 9, 4];
    const resExpect = ["No", "Yes", "Yes", "Yes"];

    // act
    const result = weighetedString(str, query);

    // assert
    expect(result).toEqual(resExpect);
  });

  it("Test no 3: should return an array of YesNo", () => {
    // assign
    const str = "fsbbcccd";
    const query = [24, 5, 9, 4];
    const resExpect = ["No", "No", "Yes", "Yes"];

    // act
    const result = weighetedString(str, query);

    // assert
    expect(result).toEqual(resExpect);
  });
});
