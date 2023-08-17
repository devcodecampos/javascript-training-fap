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