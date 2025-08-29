"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./bai1/Person");
const Student_1 = require("./bai2/Student");
const Car_1 = require("./bai3/Car");
const Rectangle_1 = require("./bai4/Rectangle");
const BankAccount_1 = require("./bai5/BankAccount");
const Book_1 = require("./bai6/Book");
const User_1 = require("./bai7/User");
//bai 1
var person = new Person_1.Person('Nguyen Van A', 10);
//bai 2
var student = new Student_1.Student('Nguyen Van B', 20, 10);
// bai3
var car = new Car_1.Car("Toyta", "Sport", 2025);
// bai 4
var rectangle = new Rectangle_1.Rectangle(10, 10);
var chuVi = rectangle.chuVi();
var dienTich = rectangle.dienTich();
// bai 5
var bankAccount = new BankAccount_1.BankAccount(100);
bankAccount.withDraw(50);
bankAccount.display;
// bai 6
var book = new Book_1.Book("Bai Ca", "Nguyen A", 40);
//bai 7
var user = new User_1.User("Nguyen Van A");
