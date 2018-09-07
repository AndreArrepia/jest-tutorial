const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// expect return "expectation" and toBe is the matcher function

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

// toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// test for the opposite of a matcher

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// ** Truthiness **

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("null", () => {
  const n = null;
  expect(n).toBeNull(); // true
  expect(n).toBeDefined(); // true
  expect(n).not.toBeUndefined(); // true
  expect(n).not.toBeTruthy(); // true
  expect(n).toBeFalsy(); // true
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull(); // true
  expect(z).toBeDefined(); // true
  expect(z).not.toBeUndefined(); // true
  expect(z).not.toBeTruthy(); // true
  expect(z).toBeFalsy(); // true
});

// ** Numbers - Intigers **

test("adds 2 + 2", () => {
  expect(sum(2, 2)).toBeGreaterThan(3);
  expect(sum(2, 2)).toBeGreaterThanOrEqual(4);
  expect(sum(2, 2)).toBeLessThan(5);
  expect(sum(2, 2)).toBeLessThanOrEqual(4);
  expect(sum(2, 2)).toBe(4);
  expect(sum(2, 2)).toEqual(4);
});

// ** Numbers - Floats **

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// ** Strings **

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// ** Arrays **

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer"
];

test("the shopping list has beer on it", () => {
  expect(shoppingList).toContain("beer");
});

// ** IMPORTANT NOTE -> Jest executes all describe handlers in a test file before it executes any of the actual tests.

// describe("outer", () => {
//   console.log("describe outer-a");

//   describe("describe inner 1", () => {
//     console.log("describe inner 1");
//     test("test 1", () => {
//       console.log("test for describe inner 1");
//       expect(true).toEqual(true);
//     });
//   });

//   console.log("describe outer-b");

//   test("test 1", () => {
//     console.log("test for describe outer");
//     expect(true).toEqual(true);
//   });

//   describe("describe inner 2", () => {
//     console.log("describe inner 2");
//     test("test for describe inner 2", () => {
//       console.log("test for describe inner 2");
//       expect(false).toEqual(false);
//     });
//   });

//   console.log("describe outer-c");
// });

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2

// ** TEST ONLY **

// test.only("this will be the only test that runs", () => {
//   expect(true).not.toBe(false);
// });

test("this test will not run", () => {
  expect("A").toBe("A");
});

// ** Mocks **

// Creating a mock function and alocating two values.

const myMock = jest.fn();
const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();

test("Number of functions allocated to jest.fn() are 2", () => {
  expect(myMock.mock.calls.length).toBe(2);
});

// Mock return values

const myMockReturnValues = jest.fn();

myMockReturnValues
  .mockReturnValueOnce(10)
  .mockReturnValueOnce("x")
  .mockReturnValue(true);

console.log(
  myMockReturnValues(),
  myMockReturnValues(),
  myMockReturnValues(),
  myMockReturnValues(),
  myMockReturnValues()
);
