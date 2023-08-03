import Person from "./models/person.mjs"
import Student from "./models/student.mjs"
import Duck from "./models/duck.mjs"
import Cow from "./models/cow.mjs"

const person1 = new Person('matheus', 27)
console.log(person1)
console.log(person1.introduceSelf())

console.log('\n')

const student1 = new Student('devcodecampos', 27, 'fap-20')
console.log(student1)

console.log('\n')

// private attribute
console.log(person1.age)

console.log('\n')

const duck1 = new Duck('Donald', 5)
console.log(duck1)
console.log(duck1.speak())

console.log('\n')

const cow1 = new Cow('Cowzilla', 7)
console.log(cow1)
console.log(cow1.speak())