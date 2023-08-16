export function fibonacciSequence(): number[] {
  const sequence: number[] = [1, 1];
  const term: number = 10;

  for (let i = 2; i < term; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}