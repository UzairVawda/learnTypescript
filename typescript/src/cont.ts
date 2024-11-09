// tuples
let personTuple: [string, number, boolean] = ["john", 24, true];
let date: readonly [number, number, number] = [10, 21, 99];

console.log(personTuple);
personTuple.push("hello");
console.log(personTuple);

console.log(date);
// date.push("hello"); fails because readonly

const getPerson = (): [string, number, boolean?] => {
  return ["string", 24];
};

const randPer = getPerson();
console.log(randPer[0]);
console.log(randPer[1]);

// enums
enum ServerResponseStatuses {
  Success = "first",
  Error = "second",
  Pending = "third",
}

Object.values(ServerResponseStatuses).forEach((value) => {
  console.log(value);
});

console.log(ServerResponseStatuses);

interface ServerResponse {
  status: ServerResponseStatuses;
  data: [string, number];
}

const getServerResponse = (): ServerResponse => {
  return {
    status: ServerResponseStatuses.Error,
    data: ["test", 1],
  };
};

const response: ServerResponse = getServerResponse();
console.log(response);

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string]; // [email, phone]
};

const createUser = (newUser: User): User => {
  return newUser;
};

const newUserTest: User = createUser({
  id: 101,
  name: "ktm",
  role: UserRole.Admin,
  contact: ["ktm@ktm.com", "911"],
});

console.log(newUserTest);

// type assertion

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObj = JSON.parse(birdString);
let dogObj = JSON.parse(dogString);

let bird = birdObj as Bird;
let dog = dogObj as Bird;

console.log(bird.name, dog.name);

enum StatusEx {
  Pending = "pending",
  Declined = "declined",
}

type UserEx = {
  name: String;
  status: StatusEx;
};
// save status pending and retrieve the string

const statusValue = "pending";

const user: UserEx = { name: "john", status: statusValue as StatusEx };

//type unknown

let unknownValue: unknown;

unknownValue = "hello world";
unknownValue = [1, 2, 3];
unknownValue = 43.21;

// unkownValue.toFixed(2); // because type unknown we must check what the type is first
if (typeof unknownValue === "number") {
  unknownValue.toFixed(2);
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("THERE WAS AN ERROR");
  } else {
    throw "some error";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

// type never
// let someValue: never = 0;

type theme = "light" | "dark";
function checkTheme(theme: theme): void {
  if (theme === "light") {
    console.log("LIGHT");
    return;
  }
  if (theme === "dark") {
    console.log("DARK");
    return;
  }
  theme; // type is never because we covered both cases
}
enum ColorSwitch {
  Purple,
  Black,
  Green,
}
function getColorName(color: ColorSwitch) {
  switch (color) {
    case ColorSwitch.Black:
      return "BLACK";
    case ColorSwitch.Purple:
      return "PURPLE";
    case ColorSwitch.Green:
      return "GREEN";
    default:
      let unexpectedColor: never = color;
      // at runtime
      throw new Error(`Unexpected color value: ${unexpectedColor}`);
  }
}
console.log(getColorName(ColorSwitch.Black));
console.log(getColorName(ColorSwitch.Purple));
console.log(getColorName(ColorSwitch.Green));
// console.log(getColorName(ColorSwitch.Orange));
