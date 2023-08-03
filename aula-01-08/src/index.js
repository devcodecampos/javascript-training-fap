import Person from "./models/person.mjs"
import Student from "./models/student.mjs"

const person1 = new Person('matheus', 27)
console.log(person1)

console.log(person1.introduceSelf())

const student1 = new Student('devcodecampos', 27, 'fap-20')
console.log(student1)