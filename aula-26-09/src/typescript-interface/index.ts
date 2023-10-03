interface IPerson {
  name: string;
  age: number;
}

export class Client implements IPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}