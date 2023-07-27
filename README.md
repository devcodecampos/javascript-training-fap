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
