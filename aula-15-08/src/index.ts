import { listNumbers } from "./loops/list-numbers";
import { sum } from "./loops/calculate-sum-numbers";
import { evenNumbers } from "./loops/list-even-numbers";

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
