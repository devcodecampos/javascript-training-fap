import Animal from "./animal.mjs"

export default class Cow extends Animal {
  constructor(name, age) {
    super(name, age)
  }

  speak(){
    return 'Mooooo Moooooo'
  }
}