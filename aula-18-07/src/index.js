const prompt = require('prompt-sync')()

const isEven = require('./utils/even-odd')
const isGreater = require('./utils/greater-number')
const isPrime = require('./utils/prime-number')
const mean = require('./utils/mean')

let option
do {
  console.log(`\nMATEMÁTICA \n(1) Par ou Ímpar \n(2) Comparar qual número é maior entre dois valores informados \n(3) Lista de números primos até um valor informado \n(4) Média Aritmética \n(0) Sair`)
  option = Number.parseInt(prompt('Escolha uma opção: '))

  switch (option) {
    case 0:
      break
    case 1:
      let optionEvenOdd
      do {
        console.log(`\nPar ou Ímpar \n(1) Verificar número \n(0) Voltar`)
        optionEvenOdd = Number.parseInt(prompt('Escolha uma opção: '))

        if (optionEvenOdd === 1) {
          let num = Number.parseInt(prompt('Informe um número: '))

          if (isNaN(num)) {
            console.log('Informe um valor numérico')
            continue
          }

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

          if (isNaN(firstNumber) || isNaN(secondNumber)) {
            console.log('Informe valores numérico')
            continue
          }

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
    case 3:
      let optionPrime
      do {
        console.log(`\nLista de números primos até um valor informado \n(1) Informe um número \n(0) Voltar`)
        optionPrime = Number.parseInt(prompt('Escolha uma opção: '))

        if (optionPrime === 1) {
          let num = Number.parseInt(prompt('Informe um número: '))

          if (isNaN(num)) {
            console.log('Informe um valor numérico')
            continue
          }

          if (num < 0) {
            console.log('Informe um número positivo')
            continue
          } else if (num <= 2) {
            console.log('\nNenhum número primo encontrado até o valor digitado')
          } else {
            let primeNumbers = []
            for (i = 2; i < num; i++) {
              if (isPrime(i)) primeNumbers.push(i)
            }
            console.log(`\nLista de números primos encontrados: [${primeNumbers}]`)
          }
        } else if (optionPrime !== 0) {
          console.log('Informe uma opção disponível')
        }
      } while (optionPrime !== 0)
      break
    case 4:
      let arrayNumbers = []
      let optionMean

      do {
        console.log(`\nMÉDIA ARITMÉTICA - Número escolhidos:[${arrayNumbers}] \n(1) Informar número \n(2) Calcular \n(0) Voltar`)
        optionMean = Number.parseInt(prompt('Escolha uma opção: '))

        if (optionMean === 1) {
          let num = Number.parseFloat(prompt('Informe um número: '))

          if (isNaN(num)) {
            console.log('Informe um valor numérico')
            continue
          }

          arrayNumbers.push(num)
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