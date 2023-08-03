import Animal from "./animal.mjs";

export default class Duck extends Animal {
  constructor(name, age) {
    super(name, age)
  }

  speak() {
    return 'Quack Quack Quack'
  }
}
