const prompt = require('prompt-sync')()

let option
do {
    console.log(`
    \Exercícios 
    \n(1) Escreva um programa que imprima "Olá, mundo!" na tela
    \n(2) Crie um programa que solicite o nome do usuário e, em seguida, imprima uma mensagem personalizada com o nome inserido 
    \n(3) Escriva um programa que calcule a soma de dois números inteiros e exiba o resultado
    \n(4) Crie um programa que receba a idade de uma pessoa e informe so ela é maior ou menor de idade
    \n(5) Faça um programa que verifique se um número é par ou impar
    \n(6) Escreva um programa que calcule a média de très números informados pelo usuário
    \n(7) Crie um programa que imprima os números de 1 a 10 em ordern crescente
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
            console.log('')
            break
        case 2:
            console.log('')
            break
        case 3:
            console.log('')
            break
        case 4:
            console.log('')
            break
        default:
            console.log('Informe uma opção disponível')
    }
} while (option !== 0)