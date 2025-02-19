import PocketBase from 'pocketbase';

// Create a PocketBase instance (update the URL if needed)
const pb = new PocketBase('https://bcc6-2401-4900-1f27-b9a3-54e1-4b1a-dc8c-3ae1.ngrok-free.app/');

// Define the JavaScript Strings theory content
const theoryContent = {
    title: "Introduction to JavaScript Strings",
    content: `
# JavaScript Strings - Theory for Interview Preparation

## 1. Introduction to Strings in JavaScript

A **string** in JavaScript is a sequence of characters used to represent text.  
JavaScript strings are **immutable**, meaning they cannot be changed after they are created.

## 2. Declaring and Initializing Strings

\`\`\`javascript
// Using double or single quotes
let str1 = "Hello, World!";
let str2 = 'JavaScript is awesome!';

// Using template literals (ES6)
let str3 = \`This is a template string\`;
\`\`\`

---

## 3. Common String Operations

### a) String Concatenation

\`\`\`javascript
let first = "Hello";
let second = "World";

// Using + operator
let result = first + " " + second; // "Hello World"

// Using template literals
let result2 = \`\${first} \${second}\`; // "Hello World"
\`\`\`

---

### b) Finding String Length

\`\`\`javascript
let text = "JavaScript Programming";
console.log(text.length); // 23
\`\`\`

---

### c) Accessing Characters in a String

\`\`\`javascript
let str = "JavaScript";

console.log(str[0]); // "J"
console.log(str.charAt(2)); // "v"
console.log(str[str.length - 1]); // "t"
\`\`\`

---

### d) Extracting a Substring

\`\`\`javascript
let text = "JavaScript";

// Using slice()
console.log(text.slice(0, 4)); // "Java"

// Using substring()
console.log(text.substring(4, 10)); // "Script"
\`\`\`

---

### e) String Comparison

\`\`\`javascript
let str1 = "JavaScript";
let str2 = "javascript";

console.log(str1 === str2); // false (case-sensitive)
console.log(str1.toLowerCase() === str2.toLowerCase()); // true
\`\`\`

---

### f) String Replacement

\`\`\`javascript
let sentence = "I love JavaScript!";
let newSentence = sentence.replace("JavaScript", "coding");

console.log(newSentence); // "I love coding!"
\`\`\`

---

## 4. String Formatting and Interpolation

\`\`\`javascript
let name = "Alice";
let age = 25;

// Using template literals
let formatted = \`My name is \${name} and I am \${age} years old.\`;

console.log(formatted);
// "My name is Alice and I am 25 years old."
\`\`\`

---

## 5. Splitting and Joining Strings

### a) Splitting a String

\`\`\`javascript
let csv = "apple,banana,grape";
let fruits = csv.split(",");

console.log(fruits); // ["apple", "banana", "grape"]
\`\`\`

---

### b) Joining Strings

\`\`\`javascript
let words = ["JavaScript", "is", "awesome"];
let sentence = words.join(" ");

console.log(sentence); // "JavaScript is awesome"
\`\`\`

---

## 6. Converting Case

\`\`\`javascript
let text = "Hello World";

console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"
\`\`\`

---

## 7. Removing Whitespace

\`\`\`javascript
let message = "   Hello JavaScript!   ";
console.log(message.trim()); // "Hello JavaScript!"
\`\`\`

---

## 8. Checking if a String Contains a Substring

\`\`\`javascript
let sentence = "JavaScript is powerful!";

console.log(sentence.includes("JavaScript")); // true
console.log(sentence.startsWith("Java")); // true
console.log(sentence.endsWith("powerful!")); // true
\`\`\`

---

## 9. String Reversal (Using \`split()\`, \`reverse()\`, \`join()\`)

\`\`\`javascript
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript")); // "tpircSavaJ"
\`\`\`

---

## 10. Time Complexity of Common String Operations

| Operation                  | Time Complexity |
|----------------------------|---------------|
| Accessing a character      | O(1)          |
| Concatenation (using +)    | O(n)          |
| Finding length             | O(1)          |
| Searching a substring      | O(n)          |
| Splitting a string         | O(n)          |

    `,
    language: "l989eih1y14p04l", // JavaScript language ID
    category: "dzc50fi6i46vgz5" // Strings category ID
};

// Function to insert the JavaScript Strings theory into PocketBase
async function insertJSStringsTheory() {
    try {
        const response = await pb.collection('theory').create(theoryContent);
        console.log("Inserted JavaScript Strings theory:", response);
    } catch (error) {
        console.error("Error inserting theory:", error);
    }
}

// Execute the function
insertJSStringsTheory();
