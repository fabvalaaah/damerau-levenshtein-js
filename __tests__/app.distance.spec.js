const dljs = require("../app");

describe("distance", () => {
  test("with correct values", () => {
    const result = dljs.distance("hello here", "hello there");

    expect(result).toStrictEqual(1);
  });

  test("with correct values (inverts)", () => {
    const result = dljs.distance("hello here", "ereh olleh");

    expect(result).toStrictEqual(8);
  });

  test("with correct values (equals)", () => {
    const result = dljs.distance("hello here", "hello here");

    expect(result).toStrictEqual(0);
  });

  test("with empty 1", () => {
    const result = dljs.distance("", "hello there");

    expect(result).toStrictEqual("hello there".length);
  });

  test("with empty 2", () => {
    const result = dljs.distance("hello here", "");

    expect(result).toStrictEqual("hello here".length);
  });

  test("with empty 1 & 2", () => {
    const result = dljs.distance("", "");

    expect(result).toStrictEqual(0);
  });

  test("with wrong type 1", () => {
    const result = dljs.distance(8, "hello there");

    expect(result).toStrictEqual(-1);
  });

  test("with wrong type 2", () => {
    const result = dljs.distance("hello here", 8);

    expect(result).toStrictEqual(-1);
  });

  test("with wrong type 1 & 2", () => {
    const result = dljs.distance(7, 8);

    expect(result).toStrictEqual(-1);
  });

  test("with null 1", () => {
    const result = dljs.distance(null, "hello there");

    expect(result).toStrictEqual(-1);
  });

  test("with null 2", () => {
    const result = dljs.distance("hello here", null);

    expect(result).toStrictEqual(-1);
  });

  test("with null 1 & 2", () => {
    const result = dljs.distance(null, null);

    expect(result).toStrictEqual(-1);
  });

  test("with undefined 1", () => {
    const result = dljs.distance(undefined, "hello there");

    expect(result).toStrictEqual(-1);
  });

  test("with undefined 2", () => {
    const result = dljs.distance("hello here", undefined);

    expect(result).toStrictEqual(-1);
  });

  test("with undefined 1 & 2", () => {
    const result = dljs.distance(undefined, undefined);

    expect(result).toStrictEqual(-1);
  });
});
