import { listNumbers } from "./loops/list-numbers";
import { sum } from "./loops/calculate-sum-numbers";
import { evenNumbers } from "./loops/list-even-numbers";
import { productNumbers } from "./loops/calculate-product-numbers";
import { fibonacciSequence } from "./loops/fibonacci-sequence";
import { printMultiplesOfThree } from "./loops/multiples-of-three";
import { isPositiveNegativeOrZero } from "./conditional-statements/positive-negative-zero";
import { isEven } from "./conditional-statements/even-numbers";
import { isLeapYear } from "./conditional-statements/leap-year";
import { calculator } from "./conditional-statements/calculator";
import { isPalindrome } from "./conditional-statements/palindrome";
import { factorial } from "./basic-concepts/calculate-factorial";
import { findHighestNumber } from "./basic-concepts/highest-number";
import { celsiusToFahrenheit } from "./basic-concepts/celsius-fahrenheit";
import { average } from "./basic-concepts/average-numbers";
import { removeDuplicateElements } from "./basic-concepts/remove-duplicate-elements";
import { reverseString } from "./basic-concepts/reverse-string";
import { listNumbersMultiples } from "./combining-loops-conditional/list-numbers-multiples";
import { multiplicationTable } from "./combining-loops-conditional/multiplication-table";
import { collatzSequence } from "./combining-loops-conditional/collatz-sequence";
import { isPrime } from "./combining-loops-conditional/prime-number";
import { countVowels } from "./strings/count-vowels-string";
import { convertWordToUpperCase } from "./strings/string-upper-case";

console.log("\nEXERCÍCIOS");
console.log(
  `\nImprima os números de 1 a 10 utilizando um loop for: [${listNumbers(
    1,
    10
  )}]`
);

console.log(
  `Calcule a soma dos números de 1 a 100 utilizando um loop while: ${sum(
    1,
    100
  )}`
);

console.log(
  `Imprima os números pares de 0 a 20 utilizando um loop for: [${evenNumbers(
    0,
    20
  )}]`
);

console.log(
  `Calcule o produto dos números de 1 a 5 utilizando um loop do...while: ${productNumbers(
    1,
    5
  )}`
);

console.log(
  `Crie um loop que imprima a sequência de Fibonacci até o 10º termo: [${fibonacciSequence()}]`
);

console.log(
  `Imprima os múltiplos de 3 de 0 a 30 utilizando um loop for: [${printMultiplesOfThree(
    0,
    30
  )}]`
);

console.log(
  `Verifique se um número é positivo, negativo ou zero usando declarações if, else if e else: Exemplo, o número 5 é ${isPositiveNegativeOrZero(
    5
  )}`
);

console.log(
  `Determine se um número é ímpar ou par utilizando uma estrutura if e o operador %: Exemplo, o número 4 é ${isEven(
    4
  )}`
);

console.log(
  `Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400): Exemplo, o ano 2024 é bissexto? ${isLeapYear(
    2024
  )}`
);

console.log(
  `Crie uma calculadora simples que opera com dois números e um operador (+, -, *, /): Exemplo, a multiplicação de 5 por 2 é ${calculator(
    5,
    2,
    "*"
  )}`
);

console.log(
  `Verifique se uma string é um palíndromo: Exemplo, a palavra ovo é um palíndromo? ${isPalindrome(
    "ovo"
  )}`
);

console.log(
  `Crie uma função que calcule o fatorial de um número inteiro: Exemplo, o fatorial de 5 é ${factorial(
    5
  )}`
);

console.log(
  `Crie uma função que retorne o maior valor entre três números: Exemplo, qual o maior número nesse array [5, 8, 9]: ${findHighestNumber(
    [5, 8, 9]
  )}`
);

console.log(
  `Converta uma temperatura de Celsius para Fahrenheit usando funções: Exemplo, a conversção de 20 graus celsius é ${celsiusToFahrenheit(
    20
  )} em fahrenheit`
);

console.log(
  `Crie uma função que receba um array de números e retorne a média deles: Exemplo, a média do array [5, 4, 2, 1] é ${average(
    [5, 4, 2, 1]
  )}`
);

console.log(
  `Crie uma função que remova elementos duplicados de um array: Exemplo, a remoção de elementos duplicados do array [5, 8, 7, 5, 9, 3, 8] é [${removeDuplicateElements(
    [5, 8, 7, 5, 9, 3, 8]
  )}]`
);

console.log(
  `Escreva uma função que inverta uma string: Exemplo: "hello" =>  ${reverseString(
    "hello"
  )}`
);

console.log(
  `Imprima os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 5 imprima "Tex": ${listNumbersMultiples(
    1,
    50
  )}`
);

console.log(
  `Crie um programa que imprima a tabela de multiplicação de 1 a 10: ${multiplicationTable()}`
);

console.log(
  `Implemente a sequência de Collatz: comece com um número n e, se n for par, divida-o por 2; se for ímpar, multiplique por 3 e some 1. Repita o processo até n se tornar 1: Exemplo, sequência de Collatz começando em 20 é [${collatzSequence(
    20
  )}]`
);

console.log(
  `Verifique se um número é primo ou não: Exemplo, o número 3 é primo? ${isPrime(
    3
  )}`
);

console.log(
  `Conte quantas vogais há em uma string: Exemplo, quantas vogais possui a palavra abacate [${countVowels(
    "abacate"
  )}]`
);

console.log(
  `Converta uma string para maiúsculas: Exemplo, converter a palava vasco da gama = ${convertWordToUpperCase(
    "vasco da gama"
  )}`
);