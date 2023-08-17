export function findHighestNumberArray(numbers: number[]): number {
  let highestNumber: number = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }
  return highestNumber;
}