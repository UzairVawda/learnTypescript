type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "ford",
  model: "mustang",
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "peter",
  age: 20,
};

const printName = <T extends { name: string }>(person: T): void => {
  console.log(person.name);
};

printName(student);
printName(product);
// printName(car); // fails because the constrain check

interface StoreData<T> {
  empId: number;
  data: T;
}

const nameData: StoreData<(string | number)[]> = {
  empId: 101,
  data: [10, "hello"],
};

type Employee<T, U, V> = { id: T; name: U; department: V };

const newEmployee: Employee<number, string, string> = {
  id: 101,
  name: "uzair",
  department: "cs",
};
