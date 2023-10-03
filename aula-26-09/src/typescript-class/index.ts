class Animal {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class Dog extends Animal {
  private dogBreed: string;

  constructor(name: string, age: number, dogBreed: string) {
    super(name, age);
    this.dogBreed = dogBreed;
  }
}