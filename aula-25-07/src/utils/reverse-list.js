function reverseList(array) {
  let reverseList = []

  for (i = array.length - 1; i >= 0; i--) {
    reverseList.push(array[i])
  }

  return reverseList
}

module.exports = reverseList