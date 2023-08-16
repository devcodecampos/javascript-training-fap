export function calculator(
  firstNumber: number,
  secondNumber: number,
  operator: string
): number {
  let result: number = 0;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) {
        result = 0;
      }
      result = firstNumber / secondNumber;
      break;
    default:
      break;
  }

  return result;
}
