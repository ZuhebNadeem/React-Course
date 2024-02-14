//Primitives: number, string, boolean
//More complex: Arrays, objects
//Understanding Type Aliases
//Type Inference
//Union Types
//Functions & types
// Generics

// Primitives

let age: number;
let userName: string;
let isInstructor: boolean;

age = 12;
userName = "Max";
isInstructor = true;

//More complex types: Arrays, objects

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// Understanding Type Aliases

type Person = {
  name: string;
  age: number;
};

let person: {
  name: string;
  age: number;
};
let person2: Person;

person = {
  name: "Max",
  age: 32,
};

/**person = {
  isEmployee: true,
};*/

let people: {
  name: string;
  age: number;
}[];
let people2: Person;

//Type Inference

let course = "React";
//course = 123;

//Union Types

let courses: string | number = "React";
courses = 123;

//Functions & types

function add2(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); //[-1,1,2,3]

//updatedArray[0].split("");
stringArray[0].split("");
