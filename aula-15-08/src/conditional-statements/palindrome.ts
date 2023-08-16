export function isPalindrome(word: string): boolean {
  let reversedWord: string = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }

  if (word === reversedWord) return true;

  return false;
}