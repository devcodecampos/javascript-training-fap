export function findMostFrequentValue(arr: number[]): {} {
  const frequency: { [key: number]: number } = {};

  for (let num of arr) {
    if (frequency[num] === undefined) {
      frequency[num] = 1;
    } else {
      frequency[num] += 1;
    }
  }

  return frequency;
}