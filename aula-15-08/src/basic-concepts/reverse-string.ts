export function reverseString(word: string): string {
  let reversedWord: string = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }

  return reversedWord;
}