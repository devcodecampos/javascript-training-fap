import Animal from "./animal";

export default class Duck extends Animal {
  speak(): void {
    return console.log("Quack Quack Quack");
  }
}