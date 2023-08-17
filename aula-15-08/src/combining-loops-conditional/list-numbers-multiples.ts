export function listNumbersMultiples(
  startsAt: number,
  endsAt: number
): string[] {
  const arr: string[] = [];

  for (let i = startsAt; i <= endsAt; i++) {
    if (i % 3 === 0) {
      arr.push(`(${i}) - Sof`);
    }

    if (i % 5 === 0) {
      arr.push(`${i} - Tex`);
    }
  }

  return arr;
}