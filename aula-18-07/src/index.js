const prompt = require('prompt-sync')()

const isEven = require('./utils/even-odd')
const isGreater = require('./utils/greater-number')
const mean = require('./utils/mean')

let option
do {
  console.log(`\nMATEMÁTICA \n(1) Par ou Ímpar \n(2) Comparar qual número é maior entre dois valores informados \n(4) Média Aritmética \n(0) Sair`)
  option = Number.parseInt(prompt('Escolha uma opção: '))

  switch (option) {
    case 1:
      let optionEvenOdd
      do {
        console.log(`\nPar ou Ímpar \n(1) Verificar número \n(0) Voltar`)

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
    case 2:
      let optionGreater
      do {
        console.log(`\nComparar qual número é maior entre dois valores informados \n(1) Informar números \n(0) Voltar`)
        optionGreater = Number.parseInt(prompt('Escolha uma opção: '))

        if (optionGreater === 1) {
          let firstNumber = Number.parseInt(prompt('Informe o primeiro número: '))
          let secondNumber = Number.parseInt(prompt('Informe o segundo número: '))
          
          if (firstNumber === secondNumber) {
            console.log(`Os números informados são iguais`)
          } else {
            console.log(`O número maior é: ${isGreater(firstNumber, secondNumber)}`)
          }
        } else if (optionGreater !== 0) {
          console.log('Informe uma opção disponível')
        }
      } while (optionGreater !== 0)
      break
    case 4:
      let arrayNumbers = []
      do {
        console.log(`\nMÉDIA ARITMÉTICA - Número escolhidos:[${arrayNumbers}] \n(1) Informar número \n(2) Calcular \n(0) Voltar`)
        optionMean = Number.parseInt(prompt('Escolha uma opção: '))

        if (optionMean === 1) {
          arrayNumbers.push(Number.parseFloat(prompt('Informe um número: ')))
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