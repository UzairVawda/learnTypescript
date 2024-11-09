// Challenge 1
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

// - Define the function checkValue that takes one parameter value of type ValueType.
// - Inside the function, use an if statement to check if value is of type string. If it is, log value converted to lowercase and then return from the function.
// - If value is not a string, use another if statement to check if value is of type number. If it is, log value formatted to two decimal places and then return from the function.
// - If value is neither a string nor a number, it must be a boolean. Log the string "boolean: " followed by the boolean value.
// - Finally, call the checkValue function with value as the argument.

const checkValue = (typeToCheck: ValueType): void => {
  if (typeof typeToCheck === "string") {
    console.log(typeToCheck.toLowerCase());
    return;
  } else if (typeof typeToCheck === "number") {
    console.log(typeToCheck.toFixed(2));
    return;
  } else {
    console.log("Boolean: " + typeToCheck);
    return;
  }
};

checkValue(value);

// Challenge 2
type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

// - Define a function named makeSound that takes one parameter animal of type Animal.
// - Inside the function, use an if statement to check if animal.type is 'dog'.
// - If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
// - If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
// - Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.

const makeSound = (animal: Animal) => {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
};

function makeSoundByCheck(animal: Animal) {
  if ("bark" in animal) {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark();
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow();
  }
}

// Challenge 3
// In TypeScript, "Truthy"/"Falsy" guard is a simple check for a truthy or falsy value

// - Define a function named printLength that takes one parameter str which can be of type string, null, or undefined.
// - Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
// - If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length property of the string.
// - If str is not truthy (i.e., it's either null or undefined), log the string 'No string provided'.

// - Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.

const printLength = (checkLen: string | null | undefined) => {
  if (checkLen) {
    console.log(checkLen.length);
  } else {
    console.log("No string provided");
  }
};

printLength("THIS IS A STRING");
printLength(null);

// Challenge 4
try {
  // Some code that may throw an error
  //   throw new Error("This is an error");
  throw "FAILED :(";
} catch (error) {
  if (error instanceof Error) {
    console.log("Caught an Error object: " + error.message);
  } else {
    console.log("Caught an unknown error");
  }
}

// - Start by defining the function using the function keyword followed by the function name, in this case checkInput.
// - Define the function's parameter. The function takes one parameter, input, which can be of type Date or string. This is denoted by input: Date | string.
// - Inside the function, use an if statement to check if the input is an instance of Date. This is done using the instanceof operator.
// - If the input is an instance of Date, return the year part of the date as a string. This is done by calling the getFullYear method on the input and then converting it to a string using the toString method.
// - If the input is not an instance of Date (which means it must be a string), return the input as it is.
// - After defining the function, you can use it by calling it with either a Date or a string as the argument. The function will return the year part of the date if a Date is passed, or the original string if a string is passed.
// - You can store the return value of the function in a variable and then log it to the console to see the result.

const checkInput = (input: Date | string) => {
  if (input instanceof Date) {
    return input.getFullYear();
  } else {
    return input;
  }
};

const res = checkInput(new Date(2024, 10, 20));
console.log(res);

// Challenge #5
type Student = {
  name: string;
  study: () => void;
};
type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

const person = randomPerson();

//   - Define the Person and Student types. Student should have a study method and Person should have a login method.
//   - Create a function named isStudent that takes a parameter person of type Person.
//   - In the function signature, specify a return type that is a type predicate: person is Student.
//   - In the function body, use a type assertion to treat person as a Student, and check if the study - method is not undefined. This will return true if person is a Student, and false otherwise.
//   - Use the isStudent function in an if statement with person as the argument.
//   - In the if block (where isStudent(person) is true), call the study method on person. TypeScript knows that person is a Student in this block, so this is safe.
//   - In the else block (where isStudent(person) is false), call the login method on person. This is safe because if person is not a Student, it must be a Person, and all Person objects have a login method.

function isStudent(check: Person): check is Student {
  // return 'study' in check
  return (check as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login();
}

// Challenge #6

type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

// - Write a reducer function that takes the current state and an action, and returns the new state. The reducer function should use a switch statement or if-else chain on the type property of the action to handle each action type differently.
// - In the default case of the switch statement or the final else clause, perform an exhaustive check by assigning the action to a variable of type never. If there are any action types that haven't been handled, TypeScript will give a compile error.
// - Implement the logic for each action type in the reducer function. This typically involves returning a new state based on the current state and the properties of the action.
// - Use the reducer function in your application to handle actions and update the state.

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "decrement":
      return state - action.amount;
    case "increment":
      return state + action.amount;
    default:
      const unexpected: never = action;
      throw new Error("NOT AN ACTION: " + unexpected);
  }
}

const testReducer = reducer(15, {
  type: "decrement",
  amount: 10,
  timestamp: 10,
  user: "uzair",
});
console.log(testReducer);

const genericFunction = <T>(arg: T): T => {
  return arg;
};

console.log(genericFunction("hello"));
console.log(genericFunction(10));

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<String> = {
  value: "STRING",
  getValue() {
    return this.value;
  },
};
console.log(genericString.getValue());

const genericNumber: GenericInterface<number> = {
  value: 10,
  getValue() {
    return this.value;
  },
};
console.log(genericNumber.getValue());

async function someFunc(): Promise<number> {
  return 1234567;
}

const result = await someFunc();
console.log(result);

// Challenge-ish
// <T> declares the variable type so we can use it else where as a param
// <T> at the end is to declare a variable type in the array
const createArray = <T>(repeat: number, value: T): Array<T> => {
  return Array(repeat).fill(value);
};
console.log(createArray<string>(3, "hello"));
console.log(createArray<number>(4, 6748234));

// multiple generic types
const pair = <T, U, V>(op1: T, op2: U, op3: T, op4: V): (U | T | V)[] => {
  return [op4, op1, op2, op3];
};
console.log(pair<boolean, string, number>(true, "hello", true, 10));
console.log(pair<boolean, number, string>(true, 10, false, "staple"));
