export function average(numbers: number[]): number {
  let sum: number = 0;
  for (const num of numbers) {
    sum += num;
  }

  const calculate: number = sum / numbers.length;
  return calculate;
}