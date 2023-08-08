export default class Person {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduceSelf(): void {
    return console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number) {
    this.age = age;
  }
}