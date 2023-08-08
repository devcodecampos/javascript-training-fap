import Person from "./models/person";
import Student from "./models/student";
import Animal from "./models/animal";
import Duck from "./models/duck";
import Cow from "./models/cow";

const person1 = new Person("matheus", 27);
console.log(person1);

person1.introduceSelf();

const student1 = new Student("devcodecampos", 27, "fap-20");
console.log(student1);

const person2 = new Person("carlos", 45);
console.log(person2.getAge());

person2.setAge(46);
console.log(person2.getAge());

const animal1 = new Animal();
animal1.speak();

const duck1 = new Duck();
duck1.speak();

const cow1 = new Cow();
cow1.speak();