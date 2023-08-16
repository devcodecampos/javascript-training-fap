import { listNumbers } from "./loops/list-numbers";
import { sum } from "./loops/calculate-sum-numbers";
import { evenNumbers } from "./loops/list-even-numbers";
import { productNumbers } from "./loops/calculate-product-numbers";
import { fibonacciSequence } from "./loops/fibonacci-sequence";
import { printMultiplesOfThree } from "./loops/multiples-of-three";
import { isPositiveNegativeOrZero } from "./conditional-statements/positive-negative-zero";

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