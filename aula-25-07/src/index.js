const prompt = require('prompt-sync')()

const printHelloWorld = require('./utils/print-hello-world')
const customMessage = require('./utils/print-custom-message')
const calculateSum = require('./utils/calculate-sum')
const isMinorAge = require('./utils/minor-age')
const isEven = require('./utils/even-odd')
const average = require('./utils/average')
const printAscNumbers = require('./utils/print-asc-numbers')
const listEvenNumbers = require('./utils/list-even-numbers')

let option
do {
  console.log(`
  \Exercícios 
  \n(1) Escreva um programa que imprima "Olá, mundo!" na tela
  \n(2) Crie um programa que solicite o nome do usuário e, em seguida, imprima uma mensagem personalizada com o nome inserido 
  \n(3) Escreva um programa que calcule a soma de dois números inteiros e exiba o resultado
  \n(4) Crie um programa que receba a idade de uma pessoa e informe se ela é maior ou menor de idade
  \n(5) Faça um programa que verifique se um número é par ou impar
  \n(6) Escreva um programa que calcule a média de três números informados pelo usuário
  \n(7) Crie um programa que imprima os números de 1 a 10 em ordem crescente
  \n(8) Faça um programa que imprima os números pares de 1 a 20
  \n(9) Crie um programa que determine se um número é primo ou não
  \n(10) Faça um programa que converts graus Celsius para Fahrenheit
  \n(11) Escreva um programa que receba uma lista de números e imprima apenas os números pares
  \n(12) Escreva um programa que receba uma lista de números e retorne o maior e o menor valor
  \n(13) Faça um programa que verifique se uma palavra é um palindromo (se pode ser lide da mesma forma de trás para frente)
  \n(14) Crie um programa que inverta a ordem dos elementos em uma lista
  \n(15) Faça um programa que simule um jogo de adivinhação, onde o computador escolhe um número e o usuário tenta adivinhar
  \n(0) Sair`)

  option = Number.parseInt(prompt('Escolha uma opção: '))

  switch (option) {
    case 0:
      break
    case 1:
      printHelloWorld()
      break
    case 2:
      let name = prompt('Informe seu nome: ')
      customMessage(name)
      break
    case 3:
      let firstNumber = Number.parseInt(prompt('Informe o primeiro número: '))
      let secondNumber = Number.parseInt(prompt('Informe o segundo número: '))

      console.log('A soma é: ' + calculateSum(firstNumber, secondNumber))
      break
    case 4:
      let age = Number.parseInt(prompt('Informe sua idade: '))

      if (age < 0 || isNaN(age)) {
        console.log('Idade inválida')
        break
      }

      if (isMinorAge(age)) {
        console.log('Menor de idade')
      } else {
        console.log('Maior de idade')
      }
      break
    case 5:
      let number = Number.parseInt(prompt('Informe um número: '))

      if (isEven(number)) {
        console.log('O número informado é PAR')
      } else {
        console.log('O número informado é ÍMPAR')
      }
      break
    case 6:
      let firstNumberAverage = Number.parseFloat(prompt('Informe o primeiro valor: '))
      let secondNumberAverage = Number.parseFloat(prompt('Informe o segundo valor: '))
      let thirdNumberAverage = Number.parseFloat(prompt('Informe o terceiro valor: '))

      let numbers = []
      numbers.push(firstNumberAverage)
      numbers.push(secondNumberAverage)
      numbers.push(thirdNumberAverage)

      console.log('A média dos número informados foi de: ' + average(numbers))
      break
    case 7:
      let initialAsc = 1
      let endAsc = 10
      printAscNumbers(initialAsc, endAsc)
      break
    case 8:
      let initialEven = 1
      let endEven = 20
      
      console.log(`Os número pares entre ${initialEven} e ${endEven} são [${listEvenNumbers(initialEven, endEven)}]`)
      break
    default:
      console.log('Informe uma opção disponível')
  }
} while (option !== 0)