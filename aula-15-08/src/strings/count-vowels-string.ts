export function countVowels(word: string): number {
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  let count: number = 0;

  for (let vowel of vowels) {
    for (let i = 0; i < word.length; i++) {
      if (vowel === word[i]) {
        count++;
      }
    }
  }

  return count;
}