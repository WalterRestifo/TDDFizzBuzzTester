import fizzBuzz from "./index.js";

it("should return 1 if given 1", () => {
  expect(fizzBuzz(1)).toBe(1);
});

it("should return 2 if given 2", () => {
  expect(fizzBuzz(2)).toBe(2);
});

it("should return Fizz if given 3", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});

it("should return 4 if given 4", () => {
  expect(fizzBuzz(4)).toBe(4);
});
it("should return Buzz if given 5", () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});

it("should return Fizz if given 6", () => {
  expect(fizzBuzz(6)).toBe("Fizz");
});

it("should return 7 if given 7", () => {
  expect(fizzBuzz(7)).toBe(7);
});

it("should return 8 if given 8", () => {
  expect(fizzBuzz(8)).toBe(8);
});
it("should return Fizz if given 9", () => {
  expect(fizzBuzz(9)).toBe("Fizz");
});

it("should return Buzz if given 10", () => {
  expect(fizzBuzz(10)).toBe("Buzz");
});

it("should return 11 if given 11", () => {
  expect(fizzBuzz(11)).toBe(11);
});
it("should return Fizz if given 12", () => {
  expect(fizzBuzz(12)).toBe("Fizz");
});

it("should return FizzBuzz if given 15", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});

it("should return 16 if given 16", () => {
  expect(fizzBuzz(16)).toBe(16);
});

it("should return Fizz if given 18", () => {
  expect(fizzBuzz(18)).toBe("Fizz");
});

it("should return 19 if given 19", () => {
  expect(fizzBuzz(19)).toBe(19);
});
it("should return Buzz if given 20", () => {
  expect(fizzBuzz(20)).toBe("Buzz");
});
it("should return FizzBuzz if given 30", () => {
  expect(fizzBuzz(30)).toBe("FizzBuzz");
});

it("should return Buzz if given 40", () => {
  expect(fizzBuzz(40)).toBe("Buzz");
});

it("should retun FizzBuzz if given 45", () => {
  expect(fizzBuzz(45)).toBe("FizzBuzz");
});
