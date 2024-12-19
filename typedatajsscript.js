// String
const name = "Odette LuoYi";
const nameType = typeof name;

// Boolean
const isStudent = true;
const isStudentType = typeof isStudent;

// Number
const age = 25;
const ageType = typeof age;

// Array
const hobbies = ["reading", "sports", "gaming"];
const hobbiesType = typeof hobbies;

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
const bigNumberType = typeof bigNumber;

// Undefined
let favoriteColor;
const favoriteColorType = typeof favoriteColor;

// Null
const emptyValue = null;
const emptyValueType = typeof emptyValue; // Returns "object" (quirk in JavaScript)

// Object
const person = { name: "Alice", age: 30 };
const personType = typeof person;

// Symbol
const uniqueId = Symbol("id");
const uniqueIdType = typeof uniqueId;

// Displaying results
const output = document.getElementById("output");
output.innerHTML = `
  <p><strong>String:</strong> ${name} (type: ${nameType})</p>
  <p><strong>Boolean:</strong> ${isStudent} (type: ${isStudentType})</p>
  <p><strong>Number:</strong> ${age} (type: ${ageType})</p>
  <p><strong>Array:</strong> [${hobbies}] (type: ${hobbiesType})</p>
  <p><strong>BigInt:</strong> ${bigNumber}n (type: ${bigNumberType})</p>
  <p><strong>Undefined:</strong> ${favoriteColor} (type: ${favoriteColorType})</p>
  <p><strong>Null:</strong> ${emptyValue} (type: ${emptyValueType})</p>
  <p><strong>Object:</strong> { name: "Alice", age: 30 } (type: ${personType})</p>
  <p><strong>Symbol:</strong> ${uniqueId.toString()} (type: ${uniqueIdType})</p>
`;
