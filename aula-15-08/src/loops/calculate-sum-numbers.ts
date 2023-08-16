export function sum(startsAt: number, endsAt: number): number {
  let soma: number = 0;
  let i: number = startsAt;

  while (i <= endsAt) {
    soma += i;
    i++;
  }

  return soma;
}