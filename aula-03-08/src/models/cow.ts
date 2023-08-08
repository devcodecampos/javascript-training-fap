import Animal from "./animal";

export default class Cow extends Animal {
  speak(): void {
    return console.log("Mooooo Moooooo");
  }
}