console.log("typescript helper");

// BASICS

let awesomeName: string = "wakeAndBake";
awesomeName = "onlyStrings";
awesomeName = awesomeName.repeat(3);
console.log(awesomeName);
//awesomeName = 30 would fail

let amount: number = 20;
amount = 12 - 1;
console.log(amount);
//amount = "string" would fail

let isAwesome: boolean = true;
isAwesome = false;
console.log(isAwesome);

//isAwesome = "string" would fail

let testString: string = "STRING";
testString = testString.toLocaleLowerCase();
console.log(testString);

let testNum: number = 35;
testNum = testNum - 1;
console.log(testNum);

let testBool: boolean = testNum >= 20;
console.log(testBool);

// union of types = can be more than 2
let tax: number | string = 20;
console.log(tax);
tax = "20";
console.log(tax);

// specifying the only string options
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "error";
console.log(requestStatus);

// specifying any options BEWARE
let notSure: any = "4";
notSure = 4;
console.log(notSure);

//functions
const books = ["Brave World", "Midsummer Nights", "1984", "The Daily Stoic"];
let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook = foundBook.repeat(5);
    break;
  }
}
console.log(foundBook?.length);
console.log(foundBook);

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
console.log(orderStatus);
orderStatus = "shipped";
console.log(orderStatus);
orderStatus = "delivered";
console.log(orderStatus);

let discount: number | string = 20;
console.log(discount);
discount = "20%";
console.log(discount);

let prices: number[] = [100, 30, 10];
console.log(prices);

let fruits: string[] = ["apple", "orange", "banana"];
console.log(fruits);

let random: (string | number | boolean)[] = [30, true, "banana"];
console.log(random);

let temperatures: number[] = [66, 33, 45];
console.log(temperatures);

let colors: string[] = ["Lavender", "Black", "Blue"];
console.log(colors);

let mixed: (string | number)[] = ["uzair", 24, 18, "ktm"];
console.log(mixed);

// OBJECTS

let oldCar: { brand: string; year: number } = { brand: "porsche", year: 1998 };
console.log(oldCar);
// car.color = "black"; cant be done because color doesn't exist in the context

let newCar: { brand: string; year: number } = { year: 2024, brand: "porsche" };
console.log(newCar);

//array types
let book = { item: "book", cost: 20 };
let notebook = { item: "notebook", cost: 10 };
let pen = { item: "pen" }; // originally didn't have cost which causes error, ? to make optional property

// option readonly flag can be added infront of type annotation
let cart: { item: string; cost?: number }[] = [book, notebook, pen];
console.log(cart);

let cartReadOnly: { readonly item: string; cost?: number }[] = [
  book,
  notebook,
  pen,
];
// cartReadOnly[0].item = "new" // fails
console.log(cartReadOnly);

// - Create an object bike of type { brand: string, year: number } and
// assign it some values. Then, try to assign a string to the year property.
let bike: { brand: string; year: number } = { brand: "Mongoose", year: 2024 };
console.log(bike);

// - Create an object laptop of type { brand: string, year: number } and try
// to assign an object with missing year property to it.
let laptop: { brand: string; year?: number } = { brand: "Apple" }; // fails without the year
console.log(laptop);

// - Create an array products of type { title: string, price?: number }[] and
// assign it some values. Then, try to add an object with a price property of
// type string to it.

let p1 = { title: "book", price: "40" };
let p2 = { title: "laptop", price: "400" };
let p3 = { title: "charger" };

let products: { title: string; price?: number }[] = [p1, p2, p3];
console.log(products);
products.push({ title: "shoes" });
console.log(products);

// FUNCTIONS
function sayHi(name: string) {
  console.log(`hello there ${name.toUpperCase()}`);
}
sayHi("uzair");
// sayHi(2);  will fail since not string

function calculatingDiscount(price: number): number {
  // this fails because we specified the return value as number
  //   if (price === 10) {
  //     return "discount applied";
  //   }
  return price * 0.9;
}
console.log(calculatingDiscount(200));

// any type with function
// do not use

function addThree(num: any) {
  let anotherNum: number = 3;
  return num + anotherNum;
}

console.log(addThree(5));

const initials: string[] = ["uv", "ktm"];
const checkIncluded = (toCheck: string): boolean => {
  return initials.includes(toCheck);
};

console.log(checkIncluded("tm"));

// Optional parameters

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}
let priceAfterDiscount = calculatePrice(100);
console.log(priceAfterDiscount);

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreWithPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithPenalty, scoreWithoutPenalty);

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);
  let total: number = numbers.reduce((previous: number, current: number) => {
    return previous + current;
  }, 0);
  return message + total;
}
console.log(sum("the sum is ", 1, 2, 3, 4, 5, 6, 7, 8, 9));

// void type because not returning anything
function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hello From TS!");

// challenge

function processInput(data: number | string): void {
  if (typeof data === "number") {
    console.log(data * 2);
  } else if (typeof data === "string") {
    console.log(data.toUpperCase());
  }
}
processInput(10);
processInput("hello");

// function createEmployee({ id }: { id: number }): {
//   id: number;
//   isActive: boolean;
// } {
//   return { id, isActive: id % 2 === 0 };
// }

// console.log(createEmployee({ id: 100 }));

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

console.log(createEmployee({ id: 100 }));
console.log(createEmployee({ id: 91 }));

function createStudent(student: { id: number; name: string }): void {
  console.log(student.name + " " + student.id);
}
createStudent({ id: 1000, name: "uzair" });

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input ** 2;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData(99, { reverse: true }));
console.log(processData("string", { reverse: true }));

// Alias -> just a name holder for types we create and reuse
type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

type StingOrNumber = string | number;
let value: StingOrNumber;
value = 10;
value = "test";
// value=true fails because alias is string or num

type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark");

type Employee = { id: number; name: string; department: string };
type ManagerOne = { id: number; name: string; employees: Employee[] };

type Staff = Employee | ManagerOne;

let printStaffDetails = (staff: Staff): void => {
  if ("employees" in staff) {
    console.log(
      `Manager with ${staff.employees.length} employee${
        staff.employees.length > 1 ? "s" : ""
      }`
    );
  } else {
    console.log(`My name is ${staff.name} and work in ${staff.department}`);
  }
};

const alice: Employee = { id: 10, name: "alice", department: "Sales" };
const sally: Employee = { id: 11, name: "sally", department: "Sales" };
const ktm: ManagerOne = { id: 12, name: "sam", employees: [alice, sally] };

printStaffDetails(alice);
printStaffDetails(sally);
printStaffDetails(ktm);

type Book = { id: number; name: string; price: number };
type DiscountedBook = { discount: number } & Book;
const book1: Book = { id: 101, name: "book 102", price: 101 };
const book2: Book = { id: 202, name: "book 202", price: 202 };
const discout: DiscountedBook = {
  id: 202,
  name: "book 303",
  price: 303,
  discount: 0.15,
};

const propName = "age";

type Animal = {
  [propName]: number;
};
let tiger: Animal = { [propName]: 5 };

// same as alias -> literally
interface InfBook {
  readonly isbn: number; // cant update
  title: string;
  author: string;
  genre?: string; // optional
  printAuthor(): void;
  printMessages(message: string): string;
}

// type InfBook = {
//   readonly isbn: number; // cant update
//   title: string;
//   author: string;
//   genre?: string; // optional
// };

const deepWork: InfBook = {
  isbn: 123,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "self-help",
  printAuthor() {
    console.log(this.author);
  },
  printMessages(message) {
    return this.title + message;
  },
};
deepWork.printAuthor();
console.log(deepWork.printMessages(" is awesome"));

interface Computer {
  readonly id: number;
  brand: string;
  ram?: string;
  storage: number;
  updateStorage(newStorage: number): number;
}

const apple: Computer = {
  id: 101,
  brand: "apple",
  ram: "1500trx",
  storage: 16,
  updateStorage(newStor: number) {
    this.storage += newStor;
    return this.storage;
  },
};
apple.updateStorage(10);
console.log(apple.storage);

interface Person {
  name: string;
  getPersonDetails(): string;
}
interface Dog {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "john",
  age: 24,
  getPersonDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

console.log(person.getPersonDetails());

interface EmployeeInf extends Person {
  id: number;
}

const employee: EmployeeInf = {
  name: "jane",
  age: 23,
  id: 1001,
  getPersonDetails() {
    return `${this.name} ${this.age} ${this.id}`;
  },
};

console.log(employee.getPersonDetails());

interface Manager extends Person, Dog {
  managePeople(): void;
}

const manager: Manager = {
  name: "Bob",
  dogName: "Bob",
  age: 35,
  managePeople() {
    return `${this.name} is a manger!`;
  },
  getPersonDetails: function (): string {
    return `${this.name} ${this.age}`;
  },
  getDogDetails: function (): string {
    return `${this.dogName}`;
  },
};
console.log(manager.managePeople());
console.log(manager.getDogDetails());
console.log(manager.getPersonDetails());

interface NewPerson {
  name: string;
}

interface NewDogOwner extends NewPerson {
  dogName: string;
}

interface NewManager extends NewPerson {
  managePeople(): void;
  delegateTasks(): void;
}

const getEmployee = () => {
  const randomNum = Math.random();
  console.log(randomNum);

  if (randomNum < 0.33) {
    return {
      name: "Employee",
    };
  } else if (randomNum < 0.66) {
    return {
      name: "DogOwner",
      dogName: "rex",
    };
  } else {
    return {
      name: "manager",
      managePeople() {
        console.log("managing people");
      },
      delegateTasks() {
        console.log("deleting people");
      },
    };
  }
};

const newEmployee: NewPerson | NewDogOwner | NewManager = getEmployee();

console.log(newEmployee);

const isManager = (
  emp: NewPerson | NewDogOwner | NewManager
): emp is NewManager => {
  return "managePeople" in emp;
};
console.log(isManager(newEmployee));

if (isManager(newEmployee)) {
  newEmployee.delegateTasks();
}
