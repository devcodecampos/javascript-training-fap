## 🚀 Desafios POO - AULA 01/08/23
- ### Crie uma classe chamada "Pessoa" que tenha os atributos "nome" e "idade". Em seguida, crie um objeto chamado "pessoa1" e atribua a ele um nome e uma idade

- ### Na classe "Pessoa" criada anteriormente, adicione um método chamado "apresentar" que exiba no console uma mensagem com o nome e a idade da pessoa.

- ### Crie uma classe chamada "Aluno" que herde da classe "Pessoa" (do exercício 1). A classe "Aluno" deve ter um atributo adicional chamado "matricula". Crie um objeto chamado "aluno1" que seja um aluno e imprima no console.

- ### Modifique a classe "Pessoa" para que o atributo "idade" seja privado. Crie métodos getters e setters para acessar e alterar o valor da idade, respeitando o encapsulamento.

- ### Crie uma classe chamada "Animal" com um método chamado "falar". Crie classes específicas que herdem de "Animal" (por exemplo: "Cachorro", "Gato", etc.) e sobrescrevam o método "falar" para exibir o som característico de cada animal.


- ### Estrutura do Projeto
  ```
  src      
  └───models             
      └───animal.mjs
      └───cow.mjs
      └───duck.mjs
      └───person.mjs
      └───student.mjs
  └───index.js
  ```

- ### Dependencias
  
  [nodemon](https://www.npmjs.com/package/nodemon) 📝🔗
   ```
  npm install --save-dev nodemon
   ```

  [ESLint](https://eslint.org/docs/latest/use/getting-started) 📝🔗
   ```
  npm init @eslint/config
   ```

- ### Execução do Projeto
    ```
    git clone https://github.com/devcodecampos/javascript-training-fap

    cd javascript-training-fap/aula-01-08

    npm install

    npm run dev
    ```

  
- ### Preview
   ```js
    Person { name: 'matheus' }
    name: matheus, age: 27


    Student { name: 'devcodecampos', registrationId: 'fap-20' }

    //private attribute
    undefined


    Duck { name: 'Donald', age: 5 }
    Quack Quack Quack


    Cow { name: 'Cowzilla', age: 7 }
    Mooooo Moooooo 
    ```
