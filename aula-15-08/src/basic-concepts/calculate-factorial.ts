export function factorial(num: number): number {
  let result: number = 1;

  while (num > 0) {
    result *= num;
    num--;
  }

  return result;
}