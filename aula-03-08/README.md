## 🚀 Desafios POO - AULA 03/08/23 - TypeScript
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
  
  [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) 📝🔗
   ```
  npm install --save-dev ts-node-dev
   ```
  
  [typescript](https://www.typescriptlang.org/download) 📝🔗
   ```
  npm install --save-dev typescript
   ```

  [ESLint](https://eslint.org/docs/latest/use/getting-started) 📝🔗
   ```
  npm init @eslint/config
   ```

- ### Execução do Projeto
    ```
    git clone https://github.com/devcodecampos/javascript-training-fap

    cd javascript-training-fap/aula-03-08

    npm install

    npm run dev
    ```

  
- ### Preview
   ```js
    Person { name: 'matheus' }
    name: matheus, age: 27


    Student { name: 'devcodecampos', registrationId: 'fap-20' }

    Animal sounds

    Quack Quack Quack

    Mooooo Moooooo 
    ```

- ### Conceitos Utilizados
    [doc](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes) 📝
    ```ts
    // class
    class Student {...}
    ```

    [doc](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/constructor) 📝
    ```ts
    //constructor
    constructor(args){...}
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) 📝
    ```ts
    //getters in classes
    class Student {
      constructor(name){...}
      getName(){...}
    }
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) 📝
    ```ts
    //setters in classes
    class Student {
      constructor(name){...}
      set name(args){...}
    }
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) 📝
    ```ts
    //method definitions in classes
    class Animal {
      speak(args){...}
    }
    ```

    [doc](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/extends) 📝
    ```ts
    // extends
    class Student extends Person { ... }
    ```

    [doc](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export) 📝
    ```ts
    // export default
    export default class Student { ... }
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 📝
    ```ts
    // import
    import Student from './student'
    ```

    [doc](https://www.typescriptlang.org/docs/handbook/2/classes.html#private) 📝
    ```ts
    // private class fields
    class Student {
      private id: number; 
    }
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) 📝
    ```ts
    // super
    super()
    ```

    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) 📝
    ```ts
    // this
    this
    ```