import promptSync from "prompt-sync";

// Loops
import {
  listNumbers,
  sum,
  evenNumbers,
  productNumbers,
  fibonacciSequence,
  printMultiplesOfThree,
} from "./loops/index";

// Conditional Statements
import {
  isPositiveNegativeOrZero,
  isEven,
  isLeapYear,
  calculator,
  isPalindrome,
} from "./conditional-statements/index";

// Basic Concepts
import {
  factorial,
  findHighestNumber,
  celsiusToFahrenheit,
  average,
  removeDuplicateElements,
  reverseString,
} from "./basic-concepts/index";

// Combining Loops and Conditional
import {
  listNumbersMultiples,
  multiplicationTable,
  collatzSequence,
  isPrime,
} from "./combining-loops-conditional/index";

// Strings
import {
  countVowels,
  convertWordToUpperCase,
  removeWhitespace,
  countOccurrencesOfAGivenLetter,
} from "./strings/index";

// Arrays
import {
  sortArrayAscOrder,
  findHighestNumberArray,
  sortArrayNamesAscOrder,
  sumArrayElements,
} from "./arrays/index";

const prompt = promptSync();
let option: string;

do {
  console.log(`\n
EXERCÍCIOS

(1) Imprima os números de 1 a 10 utilizando um loop for
(2) Calcule a soma dos números de 1 a 100 utilizando um loop while
(3) Imprima os números pares de 0 a 20 utilizando um loop for
(4) Calcule o produto dos números de 1 a 5 utilizando um loop do...while
(5) Crie um loop que imprima a sequência de Fibonacci até o 10º termo
(6) Imprima os múltiplos de 3 de 0 a 30 utilizando um loop for
(7) Verifique se um número é positivo, negativo ou zero usando declarações if, else if e else: Exemplo, o número 5 é =>
(8) Determine se um número é ímpar ou par utilizando uma estrutura if e o operador %: Exemplo, o número 4 é =>
(9) Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400): Exemplo, o ano 2024 é bissexto?
(10) Crie uma calculadora simples que opera com dois números e um operador (+, -, *, /): Exemplo, a multiplicação de 5 por 2 é =>
(11) Verifique se uma string é um palíndromo: Exemplo, a palavra ovo é um palíndromo?
(12) Crie uma função que calcule o fatorial de um número inteiro: Exemplo, o fatorial de 5 é =>
(13) Crie uma função que retorne o maior valor entre três números: Exemplo, qual o maior entre esses três "5, 8, 9"
(14) Converta uma temperatura de Celsius para Fahrenheit usando funções: Exemplo, a conversão de 20 graus celsius é =>
(15) Crie uma função que receba um array de números e retorne a média deles: Exemplo, a média do array [5, 4, 2, 1] é =>
(16) Crie uma função que remova elementos duplicados de um array: Exemplo, a remoção de elementos duplicados do array [5, 8, 7, 5, 9, 3, 8] é =>
(17) Escreva uma função que inverta uma string: Exemplo: a palavra "hello" ficaria igual a =>
(18) Imprima os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 5 imprima "Tex"
(19) Crie um programa que imprima a tabela de multiplicação de 1 a 10
(20) Implemente a sequência de Collatz: comece com um número n e, se n for par, divida-o por 2; se for ímpar, multiplique por 3 e some 1. Repita o processo até n se tornar 1: Exemplo, sequência de Collatz começando em 20 é =>
(21) Verifique se um número é primo ou não: Exemplo, o número 3 é primo?
(22) Conte quantas vogais há em uma string: Exemplo, quantas vogais possui a palavra abacate
(23) Converta uma string para maiúsculas: Exemplo, a palava "vasco da gama" ficaria igual a =>
(24) Remova os espaços em branco de uma string: Exemplo, a palavra " são januario " ficaria igual a =>
(25) Conte quantas ocorrências de uma determinada letra existem em uma string: Exemplo, quantas letras "t" tem a palavra typescript?
(26) Crie um array de números e ordene-o em ordem crescente: Exemplo, a ordenação do array [5,8,1,2,7] é =>
(27) Encontre o maior valor em um array de números: Exemplo, qual o maior valor deste array [25, 18, 9]?
(28) Crie um array de nomes e ordene-o em ordem alfabética: Exemplo, a ordenação do array ["slash", "red hot chili peppers", "alter brige"] é =>
(29) Crie um programa que some os elementos de dois arrays de mesma dimensão, criando um terceiro array com os resultados: Exemplo, a soma dos elementos dos arrays [1, 2, 3] e [4, 5, 6] é =>
\n(0) SAIR
`);

  option = prompt("Escolha um exercício: ");

  switch (+option) {
    case 1:
      console.log(listNumbers(1, 10));
      break;
    case 2:
      console.log(sum(1, 100));
      break;
    case 3:
      console.log(evenNumbers(0, 20));
      break;
    case 4:
      console.log(productNumbers(1, 5));
      break;
    case 5:
      console.log(fibonacciSequence());
      break;
    case 6:
      console.log(printMultiplesOfThree(0, 30));
      break;
    case 7:
      console.log(isPositiveNegativeOrZero(5));
      break;
    case 8:
      console.log(isEven(4));
      break;
    case 9:
      console.log(isLeapYear(2024));
      break;
    case 10:
      console.log(calculator(5, 2, "*"));
      break;
    case 11:
      console.log(isPalindrome("ovo"));
      break;
    case 12:
      console.log(factorial(5));
      break;
    case 13:
      console.log(findHighestNumber(5, 8, 9));
      break;
    case 14:
      console.log(celsiusToFahrenheit(20));
      break;
    case 15:
      console.log(average([5, 4, 2, 1]));
      break;
    case 16:
      console.log(removeDuplicateElements([5, 8, 7, 5, 9, 3, 8]));
      break;
    case 17:
      console.log(reverseString("hello"));
      break;
    case 18:
      console.log(listNumbersMultiples(1, 50));
      break;
    case 19:
      console.log(multiplicationTable());
      break;
    case 20:
      console.log(collatzSequence(20));
      break;
    case 21:
      console.log(isPrime(3));
      break;
    case 22:
      console.log(countVowels("abacate"));
      break;
    case 23:
      console.log(convertWordToUpperCase("vasco da gama"));
      break;
    case 24:
      console.log(removeWhitespace(" são januario "));
      break;
    case 25:
      console.log(countOccurrencesOfAGivenLetter("t", "typescript"));
      break;
    case 26:
      console.log(sortArrayAscOrder([5, 8, 1, 2, 7]));
      break;
    case 27:
      console.log(findHighestNumberArray([25, 18, 9]));
      break;
    case 28:
      console.log(
        sortArrayNamesAscOrder([
          "slash",
          "red hot chili peppers",
          "alter brige",
        ])
      );
      break;
    case 29:
      console.log(sumArrayElements([1, 2, 3], [4, 5, 6]));
      break;
    case 0:
      break;
    default:
      console.log("Opção inválida!");
      break;
  }
} while (+option !== 0);