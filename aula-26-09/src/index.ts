// Design Patterns Imports
import { Customer, GeekEvent } from "./design-patterns/observer";
import { shapeFactory } from "./design-patterns/factory";

console.log("\nDESIGN PATTERNS");
const abnogg = new GeekEvent();
const customer = new Customer("Matheus");

console.log("\nOBSERVER");
abnogg.addObserver(customer);
abnogg.notify();
abnogg.removeObserver(customer);

console.log("\nFACTORY");
const circle = shapeFactory.createShape("circle");
console.log(circle.getTypeOfShape());

const rectangle = shapeFactory.createShape("rectangle");
console.log(rectangle.getTypeOfShape());

const square = shapeFactory.createShape();
console.log(square.getTypeOfShape());