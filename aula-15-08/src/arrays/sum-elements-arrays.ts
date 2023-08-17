export function sumArrayElements(
  firstArray: number[],
  secondArray: number[]
): number[] {
  const arr: number[] = [];
  const lengthArray: number = firstArray.length;
  let calculate: number = 0;
  let i: number = 0;

  while (i < lengthArray) {
    calculate = firstArray[i] + secondArray[i];
    arr.push(calculate);
    i++;
  }

  return arr;
}