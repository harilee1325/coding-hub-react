import PocketBase from 'pocketbase';

// Create a PocketBase instance (update URL if needed)
const pb = new PocketBase('http://127.0.0.1:8090');

// Common record IDs for filters
const difficultyId = "e7s812mq51ed03p";
const languageId = "l989eih1y14p04l";
const categoryArrays = "jp151w8e1psc0ky";
const categoryStrings = "dzc50fi6i46vgz5";

// Define 10 JavaScript Array Problems and 10 JavaScript String Problems
const problems = [
    // ===== JavaScript Array Problems =====
    {
        title: "Find Maximum in Array",
        description: "Find and print the maximum value in an array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 3, 2, 5, 4]", expectedOutput: "5" },
            { input: "[7, 2, 9, 3, 1]", expectedOutput: "9" }
        ]),
        solutionApproach: "Iterate through the array and update the max value.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
function findMax(arr) {
  let max = arr[0];
  for (const num of arr) {
    if (num > max) max = num;
  }
  return max;
}

// Test cases
console.log("Output:", findMax([1, 3, 2, 5, 4]));  // Expected: 5
console.log("Output:", findMax([7, 2, 9, 3, 1]));   // Expected: 9
`
    },
    {
        title: "Reverse Array",
        description: "Print the array in reverse order.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4, 5]", expectedOutput: "[5, 4, 3, 2, 1]" },
            { input: "[10, 20, 30]", expectedOutput: "[30, 20, 10]" }
        ]),
        solutionApproach: "Use the reverse() method or slicing.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
function reverseArray(arr) {
  return arr.slice().reverse(); // slice() to avoid mutating the original array
}

// Test cases
console.log("Output:", reverseArray([1, 2, 3, 4, 5]));  // Expected: [5, 4, 3, 2, 1]
console.log("Output:", reverseArray([10, 20, 30]));       // Expected: [30, 20, 10]
`
    },
    {
        title: "Sum of Array Elements",
        description: "Calculate and print the sum of all elements in an array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4]", expectedOutput: "10" },
            { input: "[5, 5, 5]", expectedOutput: "15" }
        ]),
        solutionApproach: "Use a loop or reduce to sum the array elements.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// Test cases
console.log("Output:", sumArray([1, 2, 3, 4]));  // Expected: 10
console.log("Output:", sumArray([5, 5, 5]));       // Expected: 15
`
    },
    {
        title: "Find Minimum in Array",
        description: "Find and print the minimum value in an array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[4, 2, 8, 1, 5]", expectedOutput: "1" },
            { input: "[10, 20, 5, 15]", expectedOutput: "5" }
        ]),
        solutionApproach: "Loop through the array to determine the minimum value.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
function findMin(arr) {
  let min = arr[0];
  for (const num of arr) {
    if (num < min) min = num;
  }
  return min;
}

// Test cases
console.log("Output:", findMin([4, 2, 8, 1, 5]));   // Expected: 1
console.log("Output:", findMin([10, 20, 5, 15]));     // Expected: 5
`
    },
    {
        title: "Check if Array is Sorted",
        description: "Determine if an array is sorted in non-decreasing order.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4]", expectedOutput: "true" },
            { input: "[4, 3, 2, 1]", expectedOutput: "false" }
        ]),
        solutionApproach: "Compare each element with the next one.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) return false;
  }
  return true;
}

// Test cases
console.log("Output:", isSorted([1, 2, 3, 4]));  // Expected: true
console.log("Output:", isSorted([4, 3, 2, 1]));  // Expected: false
`
    },
    {
        title: "Count Even and Odd Numbers",
        description: "Count and print the number of even and odd numbers in an array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4, 5]", expectedOutput: "Evens: 2, Odds: 3" },
            { input: "[2, 4, 6, 8]", expectedOutput: "Evens: 4, Odds: 0" }
        ]),
        solutionApproach: "Loop through the array and update counters for even and odd values.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
function countEvenOdd(arr) {
  let evens = 0, odds = 0;
  for (const num of arr) {
    if (num % 2 === 0) evens++;
    else odds++;
  }
  return { evens, odds };
}

// Test cases
console.log("Output:", countEvenOdd([1, 2, 3, 4, 5])); // Expected: { evens: 2, odds: 3 }
console.log("Output:", countEvenOdd([2, 4, 6, 8]));      // Expected: { evens: 4, odds: 0 }
`
    },
    {
        title: "Find Second Largest Element",
        description: "Find and print the second largest element in an array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[10, 5, 8, 20, 15]", expectedOutput: "15" },
            { input: "[3, 1, 4, 2]", expectedOutput: "3" }
        ]),
        solutionApproach: "Track the largest and second largest elements while iterating.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
}

// Test cases
console.log("Output:", secondLargest([10, 5, 8, 20, 15])); // Expected: 15
console.log("Output:", secondLargest([3, 1, 4, 2]));         // Expected: 3
`
    },
    {
        title: "Rotate Array Left",
        description: "Rotate an array to the left by one position.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4]", expectedOutput: "[2, 3, 4, 1]" },
            { input: "[10, 20, 30]", expectedOutput: "[20, 30, 10]" }
        ]),
        solutionApproach: "Remove the first element and append it to the end.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
function rotateLeft(arr) {
  if (arr.length === 0) return arr;
  return arr.slice(1).concat(arr[0]);
}

// Test cases
console.log("Output:", rotateLeft([1, 2, 3, 4]));    // Expected: [2, 3, 4, 1]
console.log("Output:", rotateLeft([10, 20, 30]));      // Expected: [20, 30, 10]
`
    },
    {
        title: "Merge Two Sorted Arrays",
        description: "Merge two sorted arrays into one sorted array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1,3,5] and [2,4,6]", expectedOutput: "[1,2,3,4,5,6]" },
            { input: "[1,2] and [3,4]", expectedOutput: "[1,2,3,4]" }
        ]),
        solutionApproach: "Use two pointers to merge the arrays.",
        timeComplexity: "O(n+m)",
        spaceComplexity: "O(n+m)",
        code: `
function mergeSorted(arr1, arr2) {
  let i = 0, j = 0;
  const merged = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
    else merged.push(arr2[j++]);
  }
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Test cases
console.log("Output:", mergeSorted([1,3,5], [2,4,6])); // Expected: [1,2,3,4,5,6]
console.log("Output:", mergeSorted([1,2], [3,4]));     // Expected: [1,2,3,4]
`
    },
    {
        title: "Remove Duplicates from Sorted Array",
        description: "Remove duplicates from a sorted array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 1, 2, 2, 3]", expectedOutput: "[1,2,3]" },
            { input: "[4,4,4,5,5,6]", expectedOutput: "[4,5,6]" }
        ]),
        solutionApproach: "Traverse the array and add only unique elements.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
function removeDuplicates(arr) {
  if (arr.length === 0) return arr;
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1]) result.push(arr[i]);
  }
  return result;
}

// Test cases
console.log("Output:", removeDuplicates([1, 1, 2, 2, 3]));  // Expected: [1,2,3]
console.log("Output:", removeDuplicates([4,4,4,5,5,6]));      // Expected: [4,5,6]
`
    },

    // ===== JavaScript String Problems =====
    {
        title: "Reverse a String",
        description: "Reverse a given string.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello\"", expectedOutput: "\"olleh\"" },
            { input: "\"JavaScript\"", expectedOutput: "\"tpircSavaJ\"" }
        ]),
        solutionApproach: "Use built-in string and array methods to reverse.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Test cases
console.log("Output:", reverseString("hello"));       // Expected: olleh
console.log("Output:", reverseString("JavaScript"));  // Expected: tpircSavaJ
`
    },
    {
        title: "Check Palindrome String",
        description: "Check if a string is a palindrome.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"racecar\"", expectedOutput: "true" },
            { input: "\"hello\"", expectedOutput: "false" }
        ]),
        solutionApproach: "Compare the string with its reversed version.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// Test cases
console.log("Output:", isPalindrome("racecar"));  // Expected: true
console.log("Output:", isPalindrome("hello"));    // Expected: false
`
    },
    {
        title: "Count Vowels in a String",
        description: "Count the number of vowels in a string.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello world\"", expectedOutput: "3" },
            { input: "\"JavaScript\"", expectedOutput: "3" }
        ]),
        solutionApproach: "Iterate through the string and count vowel characters.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return [...str].filter(char => vowels.includes(char)).length;
}

// Test cases
console.log("Output:", countVowels("hello world"));  // Expected: 3
console.log("Output:", countVowels("JavaScript"));     // Expected: 3
`
    },
    {
        title: "Find Duplicate Characters in a String",
        description: "Identify and print duplicate characters in a string.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"programming\"", expectedOutput: "\"r, g, m\"" },
            { input: "\"hello\"", expectedOutput: "\"l\"" }
        ]),
        solutionApproach: "Use a frequency object to count characters, then extract duplicates.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
function findDuplicates(str) {
  const freq = {};
  const duplicates = new Set();
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] === 2) duplicates.add(char);
  }
  return Array.from(duplicates).join(", ");
}

// Test cases
console.log("Output:", findDuplicates("programming"));  // Expected: r, g, m (order may vary)
console.log("Output:", findDuplicates("hello"));        // Expected: l
`
    },
    {
        title: "Convert String to Uppercase",
        description: "Convert a given string to uppercase.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello\"", expectedOutput: "\"HELLO\"" },
            { input: "\"world\"", expectedOutput: "\"WORLD\"" }
        ]),
        solutionApproach: "Use the toUpperCase() method.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
function toUpperCase(str) {
  return str.toUpperCase();
}

// Test cases
console.log("Output:", toUpperCase("hello"));  // Expected: HELLO
console.log("Output:", toUpperCase("world"));  // Expected: WORLD
`
    },
    {
        title: "Longest Substring Without Repeating Characters",
        description: "Find the length of the longest substring without repeating characters.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"abcabcbb\"", expectedOutput: "3" },
            { input: "\"bbbbb\"", expectedOutput: "1" }
        ]),
        solutionApproach: "Use a sliding window technique.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(min(n, m))",
        code: `
function lengthOfLongestSubstring(s) {
  const seen = {};
  let start = 0, maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]] >= start) {
      start = seen[s[i]] + 1;
    }
    seen[s[i]] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
}

// Test cases
console.log("Output:", lengthOfLongestSubstring("abcabcbb"));  // Expected: 3
console.log("Output:", lengthOfLongestSubstring("bbbbb"));       // Expected: 1
`
    },
    {
        title: "Check Anagram",
        description: "Check whether two strings are anagrams of each other.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"listen\" and \"silent\"", expectedOutput: "true" },
            { input: "\"hello\" and \"world\"", expectedOutput: "false" }
        ]),
        solutionApproach: "Sort the strings and compare.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
        code: `
function isAnagram(s1, s2) {
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}

// Test cases
console.log("Output:", isAnagram("listen", "silent"));  // Expected: true
console.log("Output:", isAnagram("hello", "world"));    // Expected: false
`
    },
    {
        title: "Remove Spaces from String",
        description: "Remove all spaces from a string.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello world\"", expectedOutput: "\"helloworld\"" },
            { input: "\" JavaScript \"", expectedOutput: "\"JavaScript\"" }
        ]),
        solutionApproach: "Replace spaces with an empty string.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}

// Test cases
console.log("Output:", removeSpaces("hello world"));    // Expected: helloworld
console.log("Output:", removeSpaces(" JavaScript "));     // Expected: JavaScript
`
    },
    {
        title: "Count Occurrences of a Character",
        description: "Count how many times a specific character appears in a string.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello\", 'l'", expectedOutput: "2" },
            { input: "\"banana\", 'a'", expectedOutput: "3" }
        ]),
        solutionApproach: "Loop through the string and count the character.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
function countChar(str, ch) {
  return str.split('').filter(c => c === ch).length;
}

// Test cases
console.log("Output:", countChar("hello", 'l'));   // Expected: 2
console.log("Output:", countChar("banana", 'a'));    // Expected: 3
`
    },
    {
        title: "Replace Vowels with '*'",
        description: "Replace all vowels in a string with '*' and print the result.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello\"", expectedOutput: "\"h*ll*\"" },
            { input: "\"JavaScript\"", expectedOutput: "\"J*v*Scr*pt\"" }
        ]),
        solutionApproach: "Use a regular expression to replace vowels.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
function replaceVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '*');
}

// Test cases
console.log("Output:", replaceVowels("hello"));       // Expected: h*ll*
console.log("Output:", replaceVowels("JavaScript"));  // Expected: J*v*Scr*pt
`
    }
];

// Function to insert all problems sequentially into PocketBase
async function insertAllProblems() {
    for (const problem of problems) {
        try {
            const record = await pb.collection('problems').create(problem);
            console.log("Inserted problem with ID:", record.id);
        } catch (error) {
            console.error("Error inserting problem:", error);
        }
    }
}

insertAllProblems();
