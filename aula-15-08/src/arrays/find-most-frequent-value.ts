interface Frequency {
  value: number;
  repetitions: number;
}

export function findMostFrequentValue(arr: number[]): Frequency[] {
  const frequencyNumbers: Frequency[] = [];
  const uniqueArr: number[] = [...new Set(arr)];

  for (const num of uniqueArr) {
    frequencyNumbers.push({
      value: num,
      repetitions: 0,
    });
  }

  frequencyNumbers.map((element) => {
    for (const num of arr) {
      if (num === element.value) {
        element.repetitions += 1;
      }
    }

    return element;
  });

  const highestNumberOfRepetitions: number = frequencyNumbers.reduce(
    (acc, cur) => {
      return Math.max(acc, cur.repetitions);
    },
    0
  );

  const highestNumber: Frequency[] = frequencyNumbers.filter(
    (element) => element.repetitions === highestNumberOfRepetitions
  );

  return highestNumber;
}
