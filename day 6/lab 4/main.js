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
let person = new Person("John", 30);
document.getElementById(
  "person"
).innerHTML += `my names is ${person.getName()} <br> my age is ${person.getAge()}`;
