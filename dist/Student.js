"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    display() {
        console.log(`Name:${this.name}`);
        console.log(`Age:${this.age}`);
        console.log(`Grade:${this.name}`);
    }
}
exports.Student = Student;
