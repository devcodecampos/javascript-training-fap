## 🚀 Desafios - Aula 26/09/23 - TypeScript

## Exercícios (classes, classes abstratas e interfaces)

1. **Crie uma classe chamada `Animal` com as propriedades `nome` e `idade`. Crie uma classe chamada `Cachorro` que herda da classe `Animal` e adiciona uma propriedade chamada `raca`.**

1. Escreva o código TypeScript que declare uma interface chamada **`Pessoa`** com duas propriedades: **`nome`** do tipo string e **`idade`** do tipo number. Em seguida, crie uma classe chamada **`Cliente`** que implementa a interface **`Pessoa`** com as mesmas propriedades. Por fim, declare uma constante chamada **`cliente1`** que cria uma instância da classe **`Cliente`**  e exiba o objeto **`cliente1`** no console.

1. **Crie uma classe abstrata chamada `FiguraGeometrica` com as propriedades `nome` e `area`. Crie duas classes concretas que herdam da classe `FiguraGeometrica`: `Quadrado` e `Circulo`.**

## Exercícios (Padrões de projeto)

1. **Crie uma fábrica de objetos Shape**: Crie uma fábrica chamada **`ShapeFactory`** que pode criar diferentes formas geométricas, como círculos e retângulos. Crie interfaces para as formas e implemente classes concretas para cada forma. **Use uma fábrica para criar objetos**: Use a **`ShapeFactory`** para criar instâncias de diferentes formas geométricas e imprima suas características.

1. **Implemente o padrão Observer**: Crie um sistema de notificação simples usando o padrão Observer. Crie uma classe **`Subject`** que mantém uma lista de observadores e uma classe **`Observer`** que registra-se no **`Subject`**. O **`Subject`** deve ser capaz de notificar todos os observadores quando ocorrerem mudanças.


## 🎮 Techs <a name="techs"></a>
Este projeto foi desenvolvido utilizando as seguintes tecnologias:
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/pt-br)
- [Git](https://git-scm.com/)

## 🧱 Estrutura do Projeto <a name="estrutura"></a>
```
src      
└───design-patterns
      └───factory.ts
      └───observer.ts
└───typescript-abstract-class
      └───index.ts
└───typescript-class
      └───index.ts
└───typescript-interface
      └───index.ts              
└───index.ts
.eslintrc.json
package.json
README.md
tsconfig.json
yarn.lock
```

## 🕹️ Execução do Projeto <a name="execucao"></a>
``` 
git clone https://github.com/devcodecampos/javascript-training-fap.git

cd javascript-training-fap/aula-26-09

yarn install

yarn dev
```

## 📚 Dependencias <a name="dependencias"></a>
[Typescript](https://www.typescriptlang.org/download)
```
yarn add -D typescript
```
[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
```
yarn add -D ts-node-dev
```
[ESLint](https://eslint.org/docs/latest/use/getting-started)
```
yarn add -D eslint
yarn run eslint --init
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)