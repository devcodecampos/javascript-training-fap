export function evenNumbers(startsAt: number, endsAt: number): number[] {
  let even: number[] = [];

  for (let i = startsAt; i <= endsAt; i++) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }

  return even;
}