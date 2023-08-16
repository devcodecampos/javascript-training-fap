import { listNumbers } from "./loops/list-numbers";
import { sum } from "./loops/calculate-sum-numbers";

console.log(
  `Imprima os números de 1 a 10 utilizando um loop for: [${listNumbers(1, 10)}]`
);

console.log(
  `Calcule a soma dos números de 1 a 100 utilizando um loop while: ${sum(
    1,
    100
  )}`
);