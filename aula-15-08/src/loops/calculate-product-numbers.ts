export function productNumbers(startsAt: number, endsAt: number): number {
  let i: number = startsAt;
  let product: number = 1;

  do {
    product *= i;
    i++;
  } while (i <= endsAt);

  return product;
}