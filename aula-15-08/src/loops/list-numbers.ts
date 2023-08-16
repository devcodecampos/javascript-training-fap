export function listNumbers(startsAt: number, endsAt: number): number[] {
  const numbers: number[] = [];

  for (let i = startsAt; i <= endsAt; i++) {
    numbers.push(i);
  }

  return numbers;
}