export function findMostFrequentValue(arr: number[]): number[] {
  const sortArray: number[] = arr.sort();
  const mostFrequentValue: number[] = [];
  let count: number;

  for (let i = 0; i < sortArray.length; i++) {
    count = 0;
    for (let j = 1; j < sortArray.length; j++) {
      if (sortArray[i] < sortArray[j]) {
        console.log(sortArray[i])
          count++;
      } else {

          count = 0
      }
    }
    mostFrequentValue.push(count);
  }
  return mostFrequentValue;
}