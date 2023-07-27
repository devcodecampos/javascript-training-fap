function evenNumbers(initial, end) {
  let even = []
  for (let i = initial; i <= end; i++) {
    if (i % 2 === 0) {
      even.push(i)
    }
  }
  return even
}

module.exports = evenNumbers