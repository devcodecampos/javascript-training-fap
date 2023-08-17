export function countVowels(word: string): number {
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  let count: number = 0;

  for (let vowel of vowels) {
    for (let i = 0; i < word.length; i++) {
      if (vowel.toUpperCase() === word[i].toUpperCase()) {
        count++;
      }
    }
  }

  return count;
}