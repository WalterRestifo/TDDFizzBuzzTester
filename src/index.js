console.clear();
export default function fizzBuzz(num) {
  const isFizz = num % 3 === 0;
  const isBuzz = num % 5 === 0;

  if (isFizz && isBuzz) {
    return "FizzBuzz";
  } else if (isFizz) {
    return "Fizz";
  } else if (isBuzz) {
    return "Buzz";
  } else {
    return num;
  }
}
