## 🚀 Desafios POO - AULA 01/08/23
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

- ### Conceitos Utilizados
    [doc](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes) 📝
    ```js
    // class
    class Student {...}
    ```
    [doc](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/constructor) 📝
    ```js
    //constructor
    constructor(args){...}
    ```
    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) 📝
    ```js
    //getters in classes
    class Student {
      constructor(name){...}
      get name(){...}
    }
    ```
    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) 📝
    ```js
    //setters in classes
    class Student {
      constructor(name){...}
      set name(args){...}
    }
    ```
    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) 📝
    ```js
    //method definitions in classes
    class Animal {
      speak(args){...}
    }
    ```
    [doc](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/extends) 📝
    ```js
    // extends
    class Student extends Person { ... }
    ```
    [doc](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export) 📝
    ```js
    // export default
    export default class Student { ... }
    ```
    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 📝
    ```js
    // import
    import Student from './student.js'
    ```
    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) 📝
    ```js
    // private class fields
    class Student {
      #id
    }
    ```
    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) 📝
    ```js
    // super
    super()
    ```
    [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) 📝
    ```js
    // this
    this
    ```
