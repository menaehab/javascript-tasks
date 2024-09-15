let mixin = {
  displayName() {
    return this.name;
  },
  displayAge() {
    return this.age;
  }
};
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
Object.assign(Person.prototype, mixin);
let person = new Person("john", 30);
document.write(
  `my name is ${person.displayName()} and my age is ${person.displayAge()}`
);
