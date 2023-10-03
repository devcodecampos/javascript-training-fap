abstract class GeometricShape {
  private name: string;
  private area: number;

  constructor(name: string, area: number) {
    this.name = name;
    this.area = area;
  }
}

export class Square extends GeometricShape {
  constructor(name: string, area: number) {
    super(name, area);
  }
}

export class Circle extends GeometricShape {
  constructor(name: string, area: number) {
    super(name, area);
  }
}