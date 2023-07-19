const prompt = require('prompt-sync')()
const mean = require('./utils/mean')
const isEven = require('./utils/even-odd')

let option
do {
  console.log(`\nMATEMÁTICA \n(1) Par ou Ímpar \n(4) Média Aritmética \n(0) Sair`)
  option = Number.parseInt(prompt('Escolha uma opção: '))

  switch (option) {
    case 1:
      let optionEvenOdd
      do {
        console.log(`\nPar ou Ímpar \n(1) Verificar número  \n(0) Voltar`)

        optionEvenOdd = Number.parseInt(prompt('Escolha uma opção: '))
        if (optionEvenOdd === 1) {
          let num = Number.parseInt(prompt('Informe um número: '))
          if (isEven(num)) {
            console.log(`O número ${num} é PAR`)
          } else {
            console.log(`O número ${num} é ÍMPAR`)
          }
        } else if (optionEvenOdd !== 0) {
          console.log('Informe uma opção disponível')
        }
      } while (optionEvenOdd !== 0)
      break
    case 4:
      let arrayNumbers = []
      do {
        console.log(`\nMÉDIA ARITMÉTICA - Número escolhidos:[${arrayNumbers}] \n(1) Informar número \n(2) Calcular \n(0) Voltar`)
        optionMean = Number.parseInt(prompt('Escolha uma opção: '))

        if (optionMean === 1) {
          arrayNumbers.push(Number.parseInt(prompt('Informe um número: ')))
        } else if (optionMean === 2) {
          if (!arrayNumbers.length) {
            console.log('Nenhum valor foi informado')
            continue
          }

          console.log('A média aritmética é: ' + mean(arrayNumbers))
          arrayNumbers = []
        } else if (option !== 0) {
          console.log('Informe uma opção disponível')
        }
      } while (optionMean !== 0)
      break
    default:
      console.log('Informe uma opção disponível')
  }
} while (option !== 0)