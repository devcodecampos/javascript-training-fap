import Person from "./models/person";
import Student from "./models/student";

const person1 = new Person("matheus", 27);
console.log(person1);

person1.introduceSelf();

const student1 = new Student("devcodecampos", 27, "fap-20");
console.log(student1);

const person2 = new Person("carlos", 45);
console.log(person2.getAge());

person2.setAge(46);
console.log(person2.getAge());