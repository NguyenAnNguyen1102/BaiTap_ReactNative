import { Person } from "./bai1/Person";
import { Student } from "./bai2/Student";
import { Car } from "./bai3/Car";
import { Rectangle } from "./bai4/Rectangle";
import { BankAccount } from "./bai5/BankAccount";
import { Book } from "./bai6/Book";
import { User } from "./bai7/User";
//bai 1
var person = new Person('Nguyen Van A',10);
//bai 2
var student = new Student('Nguyen Van B',20,10)
// bai3
var car = new Car("Toyta","Sport",2025);
// bai 4
var rectangle = new Rectangle(10,10)
var chuVi = rectangle.chuVi();
var dienTich = rectangle.dienTich();

// bai 5
var bankAccount = new BankAccount(100);
bankAccount.withDraw(50);
bankAccount.display

// bai 6
var book = new Book("Bai Ca","Nguyen A",40);

//bai 7
var  user = new  User("Nguyen Van A");