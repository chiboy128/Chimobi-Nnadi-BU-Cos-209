// ES6 Class Example
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const student1 = new Student("Alice", 20);
student1.introduce();
