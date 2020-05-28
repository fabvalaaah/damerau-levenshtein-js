const dljs = require("../app");

describe("distanceProm", () => {
  test("with correct values", async () => {
    const result = await dljs.distanceProm("hello here", "hello there");

    expect(result).toStrictEqual(1);
  });

  test("with correct values (inverts)", async () => {
    const result = await dljs.distanceProm("hello here", "ereh olleh");

    expect(result).toStrictEqual(8);
  });

  test("with correct values (equals)", async () => {
    const result = await dljs.distanceProm("hello here", "hello here");

    expect(result).toStrictEqual(0);
  });

  test("with empty 1", async () => {
    const result = await dljs.distanceProm("", "hello there");

    expect(result).toStrictEqual("hello there".length);
  });

  test("with empty 2", async () => {
    const result = await dljs.distanceProm("hello here", "");

    expect(result).toStrictEqual("hello here".length);
  });

  test("with empty 1 & 2", async () => {
    const result = await dljs.distanceProm("", "");

    expect(result).toStrictEqual(0);
  });

  test("with wrong type 1", async () => {
    try {
      const result = await dljs.distanceProm(8, "hello there");
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with wrong type 2", async () => {
    try {
      const result = await dljs.distanceProm("hello here", 8);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with wrong type 1 & 2", async () => {
    try {
      const result = await dljs.distanceProm(7, 8);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with null 1", async () => {
    try {
      const result = await dljs.distanceProm(null, "hello there");
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with null 2", async () => {
    try {
      const result = await dljs.distanceProm("hello here", null);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with null 1 & 2", async () => {
    try {
      const result = await dljs.distanceProm(null, null);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with undefined 1", async () => {
    try {
      const result = await dljs.distanceProm(undefined, "hello there");
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with undefined 2", async () => {
    try {
      const result = await dljs.distanceProm("hello here", undefined);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with undefined 1 & 2", async () => {
    try {
      const result = await dljs.distanceProm(undefined, undefined);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });
});
