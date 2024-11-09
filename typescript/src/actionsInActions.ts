import newStudent, { sayHello, person, type Student } from "./actions";

sayHello("typescrupt");
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: "bob",
  age: 24,
};

console.log(anotherStudent);
