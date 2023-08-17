export function multiplicationTable(): string[] {
  const table: string[] = [];
  let i: number = 1;

  while (i <= 10) {
    table.push(`[1 x ${i}] = ${1 * i}`);
    i++;
  }

  return table;
}