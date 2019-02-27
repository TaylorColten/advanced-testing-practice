import {add, subtract, multiply,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 4 from 5 and return 1", () => {
    expect(subtract(5, 4)).toBe(1);
  });
});

describe("multiply", () => {
  it("should multiply 4 and 5 return 20", () => {
    expect(multiply(4, 5)).toBe(20);
  });
});