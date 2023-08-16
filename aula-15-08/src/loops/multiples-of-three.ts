export function printMultiplesOfThree(
  startsAt: number,
  endsAt: number
): number[] {
  const multiplesOfThree: number[] = [];

  for (let i = startsAt; i < endsAt; i++) {
    if (i % 3 === 0) {
      multiplesOfThree.push(i);
    }
  }

  return multiplesOfThree;
}