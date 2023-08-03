export default class Person {
  #age

  constructor(name, age) {
    this.name = name
    this.#age = age
  }

  setAge(age) {
    this.#age = age
  }

  getAge() {
    return this.#age
  }

  introduceSelf() {
    return `name: ${this.name}, age: ${this.#age}`
  }
}