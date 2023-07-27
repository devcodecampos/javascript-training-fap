function findLargestAndSmallestNumber(numbers) {
  let largestNumber = numbers[0]
  let smallestNumber = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i]     
      } else {
        smallestNumber = numbers[i]
      }
  }
  console.log(`O maior número é ${largestNumber} e o menor é ${smallestNumber}`)
}

module.exports = findLargestAndSmallestNumber