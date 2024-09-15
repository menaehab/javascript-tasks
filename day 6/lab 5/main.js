class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}
class Student extends Person {
  constructor(name, fac, uni, grade) {
    super(name);
    this.fac = fac;
    this.uni = uni;
    this.grade = grade;
  }
  display() {
    return `${this.name} is a student in faculty of ${this.fac} in university ${this.uni} And his final grade is ${this.grade}`;
  }
}
let student = new Student(
  "John",
  "Faculty of Computer Science",
  "University of SVNU",
  2
);
console.log(student.display());
document.write(student.display());
