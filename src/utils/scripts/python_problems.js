import PocketBase from 'pocketbase';

// Create a PocketBase instance (update URL if needed)
const pb = new PocketBase('http://127.0.0.1:8090');

// Common record IDs for filters (adjust if needed)
const difficultyId = "e7s812mq51ed03p";
const languageId = "q3j8k47n1h6r24z"; // Update if you have a specific Python language ID
const categoryArrays = "jp151w8e1psc0ky";
const categoryStrings = "dzc50fi6i46vgz5";

// Define 20 Python problems (10 for arrays and 10 for strings)
const problems = [
    // ===== Python Array Problems =====
    {
        title: "Find Maximum in Array",
        description: "Find and print the maximum value in a list using hard-coded test cases.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 3, 2, 5, 4]", expectedOutput: "5" },
            { input: "[7, 2, 9, 3, 1]", expectedOutput: "9" }
        ]),
        solutionApproach: "Iterate through the list and keep track of the maximum element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
def find_max(arr):
    max_val = arr[0]
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val

# Test cases
print("Output:", find_max([1, 3, 2, 5, 4]))  # Expected: 5
print("Output:", find_max([7, 2, 9, 3, 1]))   # Expected: 9
`
    },
    {
        title: "Reverse Array",
        description: "Print the list in reverse order using two hard-coded test cases.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4, 5]", expectedOutput: "[5, 4, 3, 2, 1]" },
            { input: "[10, 20, 30]", expectedOutput: "[30, 20, 10]" }
        ]),
        solutionApproach: "Reverse the list using slicing.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
def reverse_array(arr):
    return arr[::-1]

# Test cases
print("Output:", reverse_array([1, 2, 3, 4, 5]))  # Expected: [5, 4, 3, 2, 1]
print("Output:", reverse_array([10, 20, 30]))       # Expected: [30, 20, 10]
`
    },
    {
        title: "Sum of Array Elements",
        description: "Calculate and print the sum of all elements in a list.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4]", expectedOutput: "10" },
            { input: "[5, 5, 5]", expectedOutput: "15" }
        ]),
        solutionApproach: "Iterate through the list and sum up each element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
def sum_array(arr):
    total = 0
    for num in arr:
        total += num
    return total

# Test cases
print("Output:", sum_array([1, 2, 3, 4]))  # Expected: 10
print("Output:", sum_array([5, 5, 5]))       # Expected: 15
`
    },
    {
        title: "Find Minimum in Array",
        description: "Find and print the minimum value in a list using two test cases.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[4, 2, 8, 1, 5]", expectedOutput: "1" },
            { input: "[10, 20, 5, 15]", expectedOutput: "5" }
        ]),
        solutionApproach: "Iterate through the list to find the smallest element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
def find_min(arr):
    min_val = arr[0]
    for num in arr:
        if num < min_val:
            min_val = num
    return min_val

# Test cases
print("Output:", find_min([4, 2, 8, 1, 5]))   # Expected: 1
print("Output:", find_min([10, 20, 5, 15]))     # Expected: 5
`
    },
    {
        title: "Check if Array is Sorted",
        description: "Determine if a list is sorted in non-decreasing order.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4]", expectedOutput: "True" },
            { input: "[4, 3, 2, 1]", expectedOutput: "False" }
        ]),
        solutionApproach: "Loop through the list and check if each element is less than or equal to the next.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
def is_sorted(arr):
    for i in range(len(arr)-1):
        if arr[i] > arr[i+1]:
            return False
    return True

# Test cases
print("Output:", is_sorted([1, 2, 3, 4]))  # Expected: True
print("Output:", is_sorted([4, 3, 2, 1]))  # Expected: False
`
    },
    {
        title: "Count Even and Odd Numbers",
        description: "Count the even and odd numbers in a list and print the counts.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4, 5]", expectedOutput: "Evens: 2, Odds: 3" },
            { input: "[2, 4, 6, 8]", expectedOutput: "Evens: 4, Odds: 0" }
        ]),
        solutionApproach: "Loop through the list and increment separate counters for even and odd numbers.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
def count_even_odd(arr):
    evens = sum(1 for num in arr if num % 2 == 0)
    odds = len(arr) - evens
    return evens, odds

# Test cases
e, o = count_even_odd([1, 2, 3, 4, 5])
print("Output: Evens:", e, "Odds:", o)  # Expected: Evens: 2, Odds: 3
e, o = count_even_odd([2, 4, 6, 8])
print("Output: Evens:", e, "Odds:", o)  # Expected: Evens: 4, Odds: 0
`
    },
    {
        title: "Find Second Largest Element",
        description: "Find and print the second largest element in a list.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[10, 5, 8, 20, 15]", expectedOutput: "15" },
            { input: "[3, 1, 4, 2]", expectedOutput: "3" }
        ]),
        solutionApproach: "Iterate through the list while keeping track of the largest and second largest elements.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
def second_largest(arr):
    first = second = float('-inf')
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num
    return second

# Test cases
print("Output:", second_largest([10, 5, 8, 20, 15]))  # Expected: 15
print("Output:", second_largest([3, 1, 4, 2]))          # Expected: 3
`
    },
    {
        title: "Rotate Array Left",
        description: "Rotate a list to the left by one position and print the result.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4]", expectedOutput: "[2, 3, 4, 1]" },
            { input: "[10, 20, 30]", expectedOutput: "[20, 30, 10]" }
        ]),
        solutionApproach: "Remove the first element and append it at the end of the list.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
def rotate_left(arr):
    return arr[1:] + arr[:1]

# Test cases
print("Output:", rotate_left([1, 2, 3, 4]))    # Expected: [2, 3, 4, 1]
print("Output:", rotate_left([10, 20, 30]))      # Expected: [20, 30, 10]
`
    },
    {
        title: "Merge Two Sorted Arrays",
        description: "Merge two sorted lists into one sorted list.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1,3,5] and [2,4,6]", expectedOutput: "[1,2,3,4,5,6]" },
            { input: "[1,2] and [3,4]", expectedOutput: "[1,2,3,4]" }
        ]),
        solutionApproach: "Use two pointers to merge both lists while preserving order.",
        timeComplexity: "O(n+m)",
        spaceComplexity: "O(n+m)",
        code: `
def merge_sorted(arr1, arr2):
    i = j = 0
    merged = []
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            merged.append(arr1[i])
            i += 1
        else:
            merged.append(arr2[j])
            j += 1
    merged.extend(arr1[i:])
    merged.extend(arr2[j:])
    return merged

# Test cases
print("Output:", merge_sorted([1,3,5], [2,4,6]))  # Expected: [1,2,3,4,5,6]
print("Output:", merge_sorted([1,2], [3,4]))        # Expected: [1,2,3,4]
`
    },
    {
        title: "Remove Duplicates from Sorted Array",
        description: "Remove duplicates from a sorted list and print the resulting list.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 1, 2, 2, 3]", expectedOutput: "[1,2,3]" },
            { input: "[4,4,4,5,5,6]", expectedOutput: "[4,5,6]" }
        ]),
        solutionApproach: "Traverse the sorted list and only add unique elements to the result.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
def remove_duplicates(arr):
    if not arr:
        return []
    unique = [arr[0]]
    for num in arr[1:]:
        if num != unique[-1]:
            unique.append(num)
    return unique

# Test cases
print("Output:", remove_duplicates([1,1,2,2,3]))   # Expected: [1, 2, 3]
print("Output:", remove_duplicates([4,4,4,5,5,6]))   # Expected: [4, 5, 6]
`
    },

    // ===== Python String Problems =====
    {
        title: "Reverse a String",
        description: "Reverse a given string using hard-coded test cases.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello\"", expectedOutput: "\"olleh\"" },
            { input: "\"Python\"", expectedOutput: "\"nohtyP\"" }
        ]),
        solutionApproach: "Use slicing to reverse the string.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
def reverse_string(s):
    return s[::-1]

# Test cases
print("Output:", reverse_string("hello"))   # Expected: olleh
print("Output:", reverse_string("Python"))  # Expected: nohtyP
`
    },
    {
        title: "Check Palindrome String",
        description: "Check if a string is a palindrome using two hard-coded test cases.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"racecar\"", expectedOutput: "True" },
            { input: "\"hello\"", expectedOutput: "False" }
        ]),
        solutionApproach: "Compare the string with its reverse.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
def is_palindrome(s):
    return s == s[::-1]

# Test cases
print("Output:", is_palindrome("racecar"))  # Expected: True
print("Output:", is_palindrome("hello"))    # Expected: False
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
            { input: "\"Python\"", expectedOutput: "1" }
        ]),
        solutionApproach: "Iterate through the string and count the vowels.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
def count_vowels(s):
    vowels = "aeiouAEIOU"
    return sum(1 for char in s if char in vowels)

# Test cases
print("Output:", count_vowels("hello world"))  # Expected: 3
print("Output:", count_vowels("Python"))         # Expected: 1
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
        solutionApproach: "Use a dictionary to count characters and return those with count > 1.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
def find_duplicates(s):
    freq = {}
    duplicates = []
    for char in s:
        freq[char] = freq.get(char, 0) + 1
    for char, count in freq.items():
        if count > 1:
            duplicates.append(char)
    return ", ".join(duplicates)

# Test cases
print("Output:", find_duplicates("programming"))  # Expected: r, g, m
print("Output:", find_duplicates("hello"))        # Expected: l
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
        solutionApproach: "Use the built-in upper() method.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
def to_uppercase(s):
    return s.upper()

# Test cases
print("Output:", to_uppercase("hello"))  # Expected: HELLO
print("Output:", to_uppercase("world"))  # Expected: WORLD
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
        solutionApproach: "Use a sliding window technique to track non-repeating characters.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(min(n, m))",
        code: `
def length_of_longest_substring(s):
    seen = {}
    start = max_len = 0
    for i, char in enumerate(s):
        if char in seen and seen[char] >= start:
            start = seen[char] + 1
        seen[char] = i
        max_len = max(max_len, i - start + 1)
    return max_len

# Test cases
print("Output:", length_of_longest_substring("abcabcbb"))  # Expected: 3
print("Output:", length_of_longest_substring("bbbbb"))       # Expected: 1
`
    },
    {
        title: "Check Anagram",
        description: "Check whether two strings are anagrams of each other.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"listen\" and \"silent\"", expectedOutput: "True" },
            { input: "\"hello\" and \"world\"", expectedOutput: "False" }
        ]),
        solutionApproach: "Sort both strings and compare them.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
        code: `
def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)

# Test cases
print("Output:", is_anagram("listen", "silent"))  # Expected: True
print("Output:", is_anagram("hello", "world"))    # Expected: False
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
            { input: "\" Python \"", expectedOutput: "\"Python\"" }
        ]),
        solutionApproach: "Replace spaces with an empty string.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
def remove_spaces(s):
    return s.replace(" ", "")

# Test cases
print("Output:", remove_spaces("hello world"))  # Expected: helloworld
print("Output:", remove_spaces(" Python "))       # Expected: Python
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
        solutionApproach: "Loop through the string and count the occurrences of the character.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
def count_char(s, ch):
    return s.count(ch)

# Test cases
print("Output:", count_char("hello", 'l'))   # Expected: 2
print("Output:", count_char("banana", 'a'))    # Expected: 3
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
            { input: "\"Python\"", expectedOutput: "\"Pyth*n\"" }
        ]),
        solutionApproach: "Use regular expressions to replace vowels.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
import re
def replace_vowels(s):
    return re.sub(r"[aeiouAEIOU]", "*", s)

# Test cases
print("Output:", replace_vowels("hello"))   # Expected: h*ll*
print("Output:", replace_vowels("Python"))  # Expected: Pyth*n
`
    }
];

// Insert problems sequentially to avoid auto-cancellation issues
async function insertAllProblems() {
    for (const problem of problems) {
        try {
            const record = await pb.collection('problems').create(problem);
            console.log("Inserted problem:", record.id);
        } catch (error) {
            console.error("Error inserting problem:", error);
        }
    }
}

insertAllProblems();
