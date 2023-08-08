import Person from "./person";

export default class Student extends Person {
  registrationId: string;

  constructor(name: string, age: number, registrationId: string) {
    super(name, age);
    this.registrationId = registrationId;
  }
}