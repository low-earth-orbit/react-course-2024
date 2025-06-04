// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Leo";

let isInstructor: boolean;

isInstructor = true;

// More complex types
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: Person;

person = {
  name: "Max",
  age: 15,
};

let people: Person[];

// Type inference

let courseName = "React The Complete Guide"; // type is inferred

// Union types

let courseId: string | number;

// Type alias

type Person = {
  name: string;
  age: number;
}; // type definition

// Functions & types

function addNumbers(a: number, b: number) {
  return a + b; // return type is inferred
}

function print(value: any) {
  console.log(value);
  // return type is void, inferred
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
