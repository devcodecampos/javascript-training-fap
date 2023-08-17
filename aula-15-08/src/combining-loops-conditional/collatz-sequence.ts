export function collatzSequence(num: number): number[] {
  const sequence: number[] = [];
  let numSequence: number = num;

  while (numSequence !== 1) {
    if (numSequence % 2 === 0) {
      numSequence = numSequence / 2;
    } else {
      numSequence = numSequence * 3 + 1;
    }

    sequence.push(numSequence);
  }

  return sequence;
}