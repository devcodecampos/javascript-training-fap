import Person from "./person.mjs"

export default class Student extends Person {
  constructor(name, age, registrationId) {
    super(name, age)
    this.registrationId = registrationId
  }
}