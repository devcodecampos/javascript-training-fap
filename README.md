## 📗 Formação Acelerada em Programação - BACKEND (NODE.JS) 
- Programa realizado pela [Softex Pernambuco](https://softexpe.org.br/)
- Repositório criado para armazenar o conteúdo das aulas, como também dos desafios passados pelo professor
 ## 🚀 Desafios [Aula 25-07]
  - #### [Escreva um programa que imprima "Olá, mundo!" na tela](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function printHelloWorld() {
        let message = 'Hello World'
        console.log(message)
      }
    ```
  - #### [Crie um programa que solicite o nome do usuário e, em seguida, imprima uma mensagem personalizada com o nome inserido](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function customMessage(name) {
        console.log(`${name}, que a força esteja com você!`)
      }
    ```
- #### [Escreva um programa que calcule a soma de dois números inteiros e exiba o resultado](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function calculateSum(firstNumber, secondNumber) {
        let calculate = firstNumber + secondNumber
        return calculate
      }
    ```
- #### [Crie um programa que receba a idade de uma pessoa e informe se ela é maior ou menor de idade](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function isMinorAge(age) {
        if (age < 18) return true

        return false
      }
    ```
- #### [Faça um programa que verifique se um número é par ou impar](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function isEven(number) {
        if (number % 2 === 0) return true

        return false
      }
    ```
- #### [Escreva um programa que calcule a média de três números informados pelo usuário](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
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
- #### [Crie um programa que imprima os números de 1 a 10 em ordem crescente](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function printAscNumbers(initial, end) {
        for (let i = initial; i <= end; i++) {
          console.log(i)
        }
      }
    ```
- #### [Faça um programa que imprima os números pares de 1 a 20](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function evenNumbers(initial, end) {
        let even = []
        for (let i = initial; i <= end; i++) {
          if (i % 2 === 0) {
            even.push(i)
          }
        }
        return even
      }
    ```
- #### [Crie um programa que determine se um número é primo ou não](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function isPrime(number) {
        if (number < 2) return false

        for (let i = 2; i < number; i++) {
          if (number % i === 0) {
            return false
          }
        }
        return true
      }
    ```
- #### [Faça um programa que converta graus Celsius para Fahrenheit](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function celsiusToFahrenheit(celsius){
        let fahrenheit = celsius * 1.8 + 32
        return fahrenheit
      }
    ```
- #### [Escreva um programa que receba uma lista de números e imprima apenas os números pares](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function findEvenNumbers(numbers) {
        let even = []
        for (number of numbers) {
          if (number % 2 === 0) {
            even.push(number)
          }
        }
        return even
      }
    ```
- #### [Escreva um programa que receba uma lista de números e retorne o maior e o menor valor](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function findLargestAndSmallestNumber(numbers) {
        let largestNumber = numbers[0]
        let smallestNumber = numbers[0]
      
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > largestNumber) {
              largestNumber = numbers[i]     
            } else {
              smallestNumber = numbers[i]
            }
        }
        console.log(`O maior número é ${largestNumber} e o menor é ${smallestNumber}`)
      }
    ```
- #### [Faça um programa que verifique se uma palavra é um palindromo (se pode ser lida da mesma forma de trás para frente)](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function isPalindrome(word) {
        let reversedWord = ''
      
        for (let i = word.length - 1; i >= 0; i--) {
          reversedWord += word[i]
        }
      
        if (word === reversedWord) return true
      
        return false
      }
    ```
- #### [Crie um programa que inverta a ordem dos elementos em uma lista](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function reverseList(array) {
        let reverseList = []
      
        for (i = array.length - 1; i >= 0; i--) {
          reverseList.push(array[i])
        }
      
        return reverseList
      }
    ```
- #### [Faça um programa que simule um jogo de adivinhação, onde o computador escolhe um número e o usuário tenta adivinhar](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-25-07)
    ```js
      // Trecho do Código
      function numberGuessingGame(numberChosenByUser, numberChosenByComputer) {
        if (numberChosenByUser === numberChosenByComputer) return true
      
        return false
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
    (0) Sair)
   
    Escolha uma opção: 
    ```
 ## 🚀 Desafios [Aula 18-07]
  - #### [Criação de um programa em Javascript que solicite ao usuário um número inteiro e exiba na tela se o número é par ou ímpar](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-18-07)
  
    ```js
      // Trecho do Código
      function isEven(num) {
        if (num % 2 === 0) {
          return true
        } else {
          return false
        }
      }
    ```

  - #### [Criação de uma função em Javascript que receba dois números inteiros como parâmetros e retorne o maior número entre eles](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-18-07)
  
    ```js
      // Trecho do Código
      function isGreater(firstNumber, secondNumber) {
        if (firstNumber > secondNumber) {
          return firstNumber
        } else {
          return secondNumber
        }
      }
    ```
  
  - #### [Criação de um programa em Javascript que solicite ao usuário um número inteiro positivo e exiba na tela todos os números primos até esse número](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-18-07)
  
    ```js
      // Trecho do Código
      function isPrime(num) {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            return false
          }
        }
        return true
      }
    ```
  
  - #### [Criação de uma função em Javascript que receba um array de números e retorne a média aritmética desses números](https://github.com/devcodecampos/javascript-training-fap/tree/main/aula-18-07)
  
    ```js
      // Trecho do Código
      function mean(arrayNumbers) {
        let aux = 0
        for (num of arrayNumbers) {
          aux += num
        }

        let calc = aux / arrayNumbers.length
        return calc
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

    cd aula-18-07

    npm install

    npm start
    ```

  - ### Preview
    ```
    MATEMÁTICA
    (1) Par ou Ímpar
    (2) Comparar qual número é maior entre dois valores informados
    (3) Lista de números primos até um valor informado
    (4) Média Aritmética
    (0) Sair
    Escolha uma opção: 
    ```
  - ### Conceitos Utilizados
    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) 📝🔗
    ``` js
    let 
    ``` 

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) 📝🔗
    ``` js
    const
    ``` 

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) 📝🔗
    ``` js
    function
    ``` 

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) 📝🔗
    ``` js
    switch
    ``` 

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) 📝🔗
    ``` js
    if...else
    ```  

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) 📝🔗
    ``` js
    do...while
    ``` 

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) 📝🔗
    ``` js
    for
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) 📝🔗
    ``` js
    for...of
    ```  

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) 📝🔗
    ``` js
    break
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) 📝🔗
    ``` js
    continue
    ``` 

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 📝🔗
    ``` js
    isNaN()
    ```

    [doc](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) 📝🔗
    ``` js
    Number.parseInt()
    ```

     [doc](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) 📝🔗
    ``` js
    Number.parseFloat()
    ```

     [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 📝🔗
    ``` js
    // Array
    push()
    length
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 📝🔗
    ``` js
    Math.random()
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 📝🔗
    ``` js
    Math.floor()
    ```
