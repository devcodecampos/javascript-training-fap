function mean(arrayNumbers) {
  let aux = 0
  for (num of arrayNumbers) {
    aux += num
  }

  let calc = aux / arrayNumbers.length

  return calc
}

module.exports = mean