## 🚀 Desafios Lógica de Programação [Aula 25-07]
- ### Escreva um programa que imprima "Olá, mundo!" na tela
    ```js
      // Trecho do Código
      function printHelloWorld() {
        let message = 'Hello World'
        console.log(message)
      }
    ```
- ### Crie um programa que solicite o nome do usuário e, em seguida, imprima uma mensagem personalizada com o nome inserido
    ```js
      // Trecho do Código
      function customMessage(name) {
        console.log(`${name}, que a força esteja com você!`)
      }
    ```
- ### Escreva um programa que calcule a soma de dois números inteiros e exiba o resultado
    ```js
      // Trecho do Código
      function calculateSum(firstNumber, secondNumber) {
        let calculate = firstNumber + secondNumber
        return calculate
      }
    ```
- ### Crie um programa que receba a idade de uma pessoa e informe se ela é maior ou menor de idade
    ```js
      // Trecho do Código
      function isMinorAge(age) {
        if (age < 18) return true

        return false
      }
    ```
- ### Faça um programa que verifique se um número é par ou impar
    ```js
      // Trecho do Código
      function isEven(number) {
        if (number % 2 === 0) return true

        return false
      }
    ```
- ### Escreva um programa que calcule a média de três números informados pelo usuário
    ```js
      // Trecho do Código
      function average(numbers) {
        let sum = 0
        for (number of numbers) {
          sum += number
        }

        let calculate = sum / numbers.length
        return calculate
      }
    ```
- ### Dependencias
  [prompt-sync](https://www.npmjs.com/package/prompt-sync) 📝🔗
   ```
   npm install prompt-sync
   ```
- ### Execução do Projeto
    ```
    git clone https://github.com/devcodecampos/javascript-training-fap.git
    cd javascript-training-fap
    cd aula-25-07
    npm install
    npm start
    ```
- ### Preview
   ```
    Exercícios 
    (1) Escreva um programa que imprima "Olá, mundo!" na tela
    (2) Crie um programa que solicite o nome do usuário e, em seguida, imprima uma mensagem personalizada com o nome inserido 
    (3) Escreva um programa que calcule a soma de dois números inteiros e exiba o resultado
    (4) Crie um programa que receba a idade de uma pessoa e informe se ela é maior ou menor de idade
    (5) Faça um programa que verifique se um número é par ou impar
    (6) Escreva um programa que calcule a média de três números informados pelo usuário
    (7) Crie um programa que imprima os números de 1 a 10 em ordem crescente
    (8) Faça um programa que imprima os números pares de 1 a 20
    (9) Crie um programa que determine se um número é primo ou não
    (10) Faça um programa que converta graus Celsius para Fahrenheit
    (11) Escreva um programa que receba uma lista de números e imprima apenas os números pares
    (12) Escreva um programa que receba uma lista de números e retorne o maior e o menor valor
    (13) Faça um programa que verifique se uma palavra é um palindromo (se pode ser lida da mesma forma de trás para frente)
    (14) Crie um programa que inverta a ordem dos elementos em uma lista
    (15) Faça um programa que simule um jogo de adivinhação, onde o computador escolhe um número e o usuário tenta adivinhar
    (0) Sair

    Escolha uma opção: 
    ```

- ### Conceitos Utilizados
    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 📝🔗
    ``` js
    Math.random()
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 📝🔗
    ``` js
    Math.floor()
    ```