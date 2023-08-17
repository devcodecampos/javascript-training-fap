export function removeDuplicateElements(elements: number[]): number[] {
  const result: number[] = elements.filter((element, index) => {
    return elements.indexOf(element) === index;
  });

  return result;
}