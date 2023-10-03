// Typescript Interface, Class, Abstract Class Imports
import { Client } from "./typescript-interface";
import { Dog } from "./typescript-class";
import { Circle, Square } from "./typescript-abstract-class";

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

console.log("\nTYPESCRIPT CLASS");
const dog1 = new Dog("Lua", 3, "pinscher");
console.log(dog1);

console.log("\nTYPESCRIPT INTERFACE");
const client1 = new Client("Matheus", 27);
console.log(client1);

console.log("\nTYPESCRIPT ABSTRACT CLASS");
const circle1 = new Circle("circle", 4.8);
console.log(circle1);

const square1 = new Square("square", 4.8);
console.log(square1);