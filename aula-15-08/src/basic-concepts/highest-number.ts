export function findHighestNumber(
  firstNumber: number,
  secondNumber: number,
  thirdNumber: number
): number {
  let highestNumber: number = 0;

  if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    highestNumber = firstNumber;
  } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    highestNumber = secondNumber;
  } else {
    highestNumber = thirdNumber;
  }
  
  return highestNumber;
}
