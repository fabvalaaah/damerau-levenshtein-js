const dljs = require("../app");

describe("minDistanceProm", () => {
  const list = ["hello here", "hello there", "world", "world hello"];

  test("with correct values", async () => {
    const result = await dljs.minDistanceProm("hello world", list);

    expect(result).toStrictEqual(4);
  });

  test("with correct values (inverts)", async () => {
    const result = await dljs.minDistanceProm("ereh olleh", list);

    expect(result).toStrictEqual(8);
  });

  test("with correct values (equals)", async () => {
    const result = await dljs.minDistanceProm("hello here", list);

    expect(result).toStrictEqual(0);
  });

  test("with empty 1", async () => {
    const result = await dljs.minDistanceProm("", list);

    expect(result).toStrictEqual("world".length);
  });

  test("with empty 2", async () => {
    const result = await dljs.minDistanceProm("hello here", []);

    expect(result).toStrictEqual(await dljs.distanceProm("hello here", ""));
  });

  test("with empty 1 & 2", async () => {
    const result = await dljs.minDistanceProm("", []);

    expect(result).toStrictEqual(0);
  });

  test("with wrong type 1", async () => {
    try {
      await dljs.minDistanceProm(8, list);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with wrong type 2", async () => {
    try {
      await dljs.minDistanceProm("hello here", 8);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with wrong type 1 & 2", async () => {
    try {
      await dljs.minDistanceProm(7, 8);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with list containing wrong types", async () => {
    try {
      await dljs.minDistanceProm("hello here", ["world", 1, true]);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with null 1", async () => {
    try {
      await dljs.minDistanceProm(null, list);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with null 2", async () => {
    try {
      await dljs.minDistanceProm("hello here", null);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with null 1 & 2", async () => {
    try {
      await dljs.minDistanceProm(null, null);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with undefined 1", async () => {
    try {
      await dljs.minDistanceProm(undefined, list);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with undefined 2", async () => {
    try {
      await dljs.minDistanceProm("hello here", undefined);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });

  test("with undefined 1 & 2", async () => {
    try {
      await dljs.minDistanceProm(undefined, undefined);
      fail("should not end up here");
    } catch (result) {
      expect(result).toStrictEqual(-1);
    }
  });
});
