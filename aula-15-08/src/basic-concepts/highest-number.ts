export function findHighestNumber(numbers: number[]): number {
  let highestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }
  return highestNumber;
}