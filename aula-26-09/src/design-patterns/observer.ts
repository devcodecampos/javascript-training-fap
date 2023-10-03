interface IObserver {
  update(subject: ISubject): void;
}

interface ISubject {
  addObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notify(): void;
}

export class Customer implements IObserver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(subject: ISubject): void {
    console.log(`${this.name}, We confirm your registration for the event!`);
  }
}

export class GeekEvent implements ISubject {
  private observers: IObserver[] = [];

  addObserver(observer: IObserver): void {
    const filteredObserver = this.observers.includes(observer);

    if (filteredObserver) {
      return console.log(`GeekEvent: Observer has been attached already.`);
    }

    this.observers.push(observer);
  }

  removeObserver(observer: IObserver): void {
    const filteredObserver = this.observers.includes(observer);

    if (!filteredObserver) {
      return console.log(`GeekEvent: Nonexistent observer.`);
    }

    const filteredObservers = this.observers.filter((obs) => obs !== observer);
    this.observers = filteredObservers;
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}