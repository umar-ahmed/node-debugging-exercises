const mergeArrays = require(".");

test("it works", () => {
  const merged = mergeArrays(
    [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ],
    [{ id: 1, name: "c" }],
    "id"
  );

  expect(merged.length).toBe(2);
  expect(merged[0].id).toBe(1);
  expect(merged[0].name).toBe("c");
  expect(merged[1].id).toBe(2);
  expect(merged[1].name).toBe("b");
});

test("maybe it doesn't :(", () => {
  const merged = mergeArrays(
    [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
      { id: 3, name: "d" },
    ],
    [{ id: 1, name: "c" }],
    "id"
  );

  expect(merged.length).toBe(3);
  expect(merged[0].id).toBe(1);
  expect(merged[0].name).toBe("c");
  expect(merged[1].id).toBe(2);
  expect(merged[1].name).toBe("b");
  expect(merged[2].id).toBe(3);
  expect(merged[2].name).toBe("d");
});
