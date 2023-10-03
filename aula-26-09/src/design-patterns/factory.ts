interface IGeometricShapes {
  typeOfShape: string;
  getTypeOfShape(): string;
}

class Shape implements IGeometricShapes {
  typeOfShape: string;

  constructor(shape: string) {
    this.typeOfShape = shape;
  }

  getTypeOfShape(): string {
    return this.typeOfShape;
  }
}

class Circle extends Shape {
  constructor() {
    super("circle");
  }
}

class Rectangle extends Shape {
  constructor() {
    super("rectangle");
  }
}

class Square extends Shape {
  constructor() {
    super("square");
  }
}

export class shapeFactory {
  static createShape(typeOfShape?: string): IGeometricShapes {
    if (typeOfShape === "circle") {
      return new Circle();
    } else if (typeOfShape === "rectangle") {
      return new Rectangle();
    } else {
      return new Square();
    }
  }
}