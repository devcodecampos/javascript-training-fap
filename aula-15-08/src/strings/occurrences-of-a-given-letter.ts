export function countOccurrencesOfAGivenLetter(
  letter: string,
  word: string
): number {
  let countOccurrences: number = 0;

  for (let i = 0; i < word.length; i++) {
    if (letter.toUpperCase() === word[i].toUpperCase()) {
      countOccurrences++;
    }
  }

  return countOccurrences;
}