import PocketBase from 'pocketbase';

// Create a PocketBase instance
const pb = new PocketBase('http://127.0.0.1:8090');

// Common record IDs for filters
const difficultyId = "e7s812mq51ed03p";
const languageId = "hsh5ek98q44s55d";
const categoryArrays = "jp151w8e1psc0ky";
const categoryStrings = "dzc50fi6i46vgz5";

// Define an array of 20 problem objects
const problems = [
    // ===== Array Problems =====
    {
        title: "Find Maximum in Array",
        description: "Find and print the maximum value in an array using hard-coded test cases.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 3, 2, 5, 4]", expectedOutput: "5" },
            { input: "[7, 2, 9, 3, 1]", expectedOutput: "9" }
        ]),
        solutionApproach: "Iterate through the array and keep track of the maximum element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class FindMaximumInArray {
    public static void main(String[] args) {
        int[] test1 = {1, 3, 2, 5, 4};
        System.out.println("Output: " + findMax(test1));
        int[] test2 = {7, 2, 9, 3, 1};
        System.out.println("Output: " + findMax(test2));
    }
    public static int findMax(int[] arr) {
        int max = arr[0];
        for (int num : arr) {
            if (num > max) { max = num; }
        }
        return max;
    }
}
`
    },
    {
        title: "Reverse Array",
        description: "Print the array in reverse order using two hard-coded test cases.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4, 5]", expectedOutput: "5 4 3 2 1" },
            { input: "[10, 20, 30]", expectedOutput: "30 20 10" }
        ]),
        solutionApproach: "Iterate backwards over the array to print elements in reverse.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class ReverseArray {
    public static void main(String[] args) {
        int[] test1 = {1,2,3,4,5};
        System.out.print("Output: ");
        printReverse(test1);
        System.out.println();
        int[] test2 = {10,20,30};
        System.out.print("Output: ");
        printReverse(test2);
        System.out.println();
    }
    public static void printReverse(int[] arr) {
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
    }
}
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
        solutionApproach: "Iterate through the array and sum up each element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class SumArray {
    public static void main(String[] args) {
        int[] test1 = {1,2,3,4};
        System.out.println("Output: " + sum(test1));
        int[] test2 = {5,5,5};
        System.out.println("Output: " + sum(test2));
    }
    public static int sum(int[] arr) {
        int total = 0;
        for (int num : arr) {
            total += num;
        }
        return total;
    }
}
`
    },
    {
        title: "Find Minimum in Array",
        description: "Find and print the minimum value in an array using two test cases.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[4, 2, 8, 1, 5]", expectedOutput: "1" },
            { input: "[10, 20, 5, 15]", expectedOutput: "5" }
        ]),
        solutionApproach: "Iterate through the array to find the smallest element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class FindMinimumInArray {
    public static void main(String[] args) {
        int[] test1 = {4,2,8,1,5};
        System.out.println("Output: " + findMin(test1));
        int[] test2 = {10,20,5,15};
        System.out.println("Output: " + findMin(test2));
    }
    public static int findMin(int[] arr) {
        int min = arr[0];
        for (int num : arr) {
            if(num < min) { min = num; }
        }
        return min;
    }
}
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
        solutionApproach: "Loop through the array and check if each element is less than or equal to the next.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class CheckSortedArray {
    public static void main(String[] args) {
        int[] test1 = {1,2,3,4};
        System.out.println("Output: " + isSorted(test1));
        int[] test2 = {4,3,2,1};
        System.out.println("Output: " + isSorted(test2));
    }
    public static boolean isSorted(int[] arr) {
        for(int i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]) return false;
        }
        return true;
    }
}
`
    },
    {
        title: "Count Even and Odd Numbers",
        description: "Count the even and odd numbers in an array and print the counts.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4, 5]", expectedOutput: "Evens: 2, Odds: 3" },
            { input: "[2, 4, 6, 8]", expectedOutput: "Evens: 4, Odds: 0" }
        ]),
        solutionApproach: "Loop through the array and increment separate counters for even and odd numbers.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class CountEvenOdd {
    public static void main(String[] args) {
        int[] test1 = {1,2,3,4,5};
        countEvenOdd(test1);
        int[] test2 = {2,4,6,8};
        countEvenOdd(test2);
    }
    public static void countEvenOdd(int[] arr) {
        int evens = 0, odds = 0;
        for(int num : arr){
            if(num % 2 == 0) evens++;
            else odds++;
        }
        System.out.println("Evens: " + evens + ", Odds: " + odds);
    }
}
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
        solutionApproach: "Iterate through the array while keeping track of the largest and second largest elements.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class SecondLargest {
    public static void main(String[] args) {
        int[] test1 = {10,5,8,20,15};
        System.out.println("Output: " + secondLargest(test1));
        int[] test2 = {3,1,4,2};
        System.out.println("Output: " + secondLargest(test2));
    }
    public static int secondLargest(int[] arr) {
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        return second;
    }
}
`
    },
    {
        title: "Rotate Array Left",
        description: "Rotate an array to the left by one position and print the result.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4]", expectedOutput: "2 3 4 1" },
            { input: "[10, 20, 30]", expectedOutput: "20 30 10" }
        ]),
        solutionApproach: "Store the first element and shift all other elements to the left; then, place the first element at the end.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class RotateArrayLeft {
    public static void main(String[] args) {
        int[] test1 = {1,2,3,4};
        rotateLeft(test1);
        int[] test2 = {10,20,30};
        rotateLeft(test2);
    }
    public static void rotateLeft(int[] arr) {
        int first = arr[0];
        for(int i=0;i<arr.length-1;i++){
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = first;
        for(int num : arr) System.out.print(num + " ");
        System.out.println();
    }
}
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
        solutionApproach: "Use two pointers to merge both arrays while preserving the order.",
        timeComplexity: "O(n+m)",
        spaceComplexity: "O(n+m)",
        code: `
public class MergeSortedArrays {
    public static void main(String[] args) {
        int[] arr1 = {1,3,5};
        int[] arr2 = {2,4,6};
        int[] merged = merge(arr1, arr2);
        printArray(merged);
    }
    public static int[] merge(int[] a, int[] b) {
        int[] res = new int[a.length + b.length];
        int i=0,j=0,k=0;
        while(i < a.length && j < b.length){
            if(a[i] < b[j])
                res[k++] = a[i++];
            else
                res[k++] = b[j++];
        }
        while(i < a.length) res[k++] = a[i++];
        while(j < b.length) res[k++] = b[j++];
        return res;
    }
    public static void printArray(int[] arr){
        for(int num : arr) System.out.print(num + " ");
        System.out.println();
    }
}
`
    },
    {
        title: "Remove Duplicates from Sorted Array",
        description: "Remove duplicates from a sorted array and print the resulting array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1, 1, 2, 2, 3]", expectedOutput: "[1,2,3]" },
            { input: "[4,4,4,5,5,6]", expectedOutput: "[4,5,6]" }
        ]),
        solutionApproach: "Traverse the sorted array and only add unique elements to the result.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class RemoveDuplicates {
    public static void main(String[] args) {
        int[] test1 = {1,1,2,2,3};
        printUnique(test1);
        int[] test2 = {4,4,4,5,5,6};
        printUnique(test2);
    }
    public static void printUnique(int[] arr) {
        System.out.print(arr[0] + " ");
        for(int i = 1; i < arr.length; i++){
            if(arr[i] != arr[i-1]) {
                System.out.print(arr[i] + " ");
            }
        }
        System.out.println();
    }
}
`
    },

    // ===== String Problems =====
    {
        title: "Reverse a String",
        description: "Reverse a given string using hard-coded test cases.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello\"", expectedOutput: "\"olleh\"" },
            { input: "\"Java\"", expectedOutput: "\"avaJ\"" }
        ]),
        solutionApproach: "Utilize StringBuilder's reverse() method.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
public class ReverseString {
    public static void main(String[] args) {
        String test1 = "hello";
        System.out.println("Output: " + reverse(test1));
        String test2 = "Java";
        System.out.println("Output: " + reverse(test2));
    }
    public static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }
}
`
    },
    {
        title: "Check Palindrome String",
        description: "Check if a string is a palindrome using two hard-coded test cases.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"racecar\"", expectedOutput: "true" },
            { input: "\"hello\"", expectedOutput: "false" }
        ]),
        solutionApproach: "Compare characters from both ends of the string.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class PalindromeCheck {
    public static void main(String[] args) {
        String test1 = "racecar";
        System.out.println("Output: " + isPalindrome(test1));
        String test2 = "hello";
        System.out.println("Output: " + isPalindrome(test2));
    }
    public static boolean isPalindrome(String str) {
        int left = 0, right = str.length()-1;
        while(left < right){
            if(str.charAt(left) != str.charAt(right)) return false;
            left++; right--;
        }
        return true;
    }
}
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
public class CountVowels {
    public static void main(String[] args) {
        String test1 = "hello world";
        System.out.println("Output: " + countVowels(test1));
        String test2 = "JavaScript";
        System.out.println("Output: " + countVowels(test2));
    }
    public static int countVowels(String str) {
        int count = 0;
        for(char c : str.toLowerCase().toCharArray()){
            if("aeiou".indexOf(c) != -1) count++;
        }
        return count;
    }
}
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
        solutionApproach: "Use a frequency array or map to count characters and print those with count > 1.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class DuplicateCharacters {
    public static void main(String[] args) {
        String test1 = "programming";
        System.out.println("Duplicates: " + findDuplicates(test1));
        String test2 = "hello";
        System.out.println("Duplicates: " + findDuplicates(test2));
    }
    public static String findDuplicates(String str) {
        int[] freq = new int[256];
        StringBuilder duplicates = new StringBuilder();
        for(char c : str.toCharArray()){
            freq[c]++;
        }
        for(int i = 0; i < 256; i++){
            if(freq[i] > 1){
                duplicates.append((char)i).append(" ");
            }
        }
        return duplicates.toString().trim();
    }
}
`
    },
    {
        title: "Convert String to Uppercase",
        description: "Convert a given string to uppercase and print the result.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello\"", expectedOutput: "\"HELLO\"" },
            { input: "\"world\"", expectedOutput: "\"WORLD\"" }
        ]),
        solutionApproach: "Use the built-in toUpperCase() method for strings.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
public class ToUpperCase {
    public static void main(String[] args) {
        String test1 = "hello";
        System.out.println("Output: " + test1.toUpperCase());
        String test2 = "world";
        System.out.println("Output: " + test2.toUpperCase());
    }
}
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
public class LongestUniqueSubstring {
    public static void main(String[] args) {
        String test1 = "abcabcbb";
        System.out.println("Output: " + lengthOfLongestSubstring(test1));
        String test2 = "bbbbb";
        System.out.println("Output: " + lengthOfLongestSubstring(test2));
    }
    public static int lengthOfLongestSubstring(String s) {
        int[] index = new int[128];
        int max = 0;
        for(int i=0, j=0; i<s.length(); i++){
            j = Math.max(j, index[s.charAt(i)]);
            max = Math.max(max, i - j + 1);
            index[s.charAt(i)] = i + 1;
        }
        return max;
    }
}
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
        solutionApproach: "Sort both strings and compare, or use frequency counting.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
        code: `
import java.util.Arrays;
public class AnagramCheck {
    public static void main(String[] args) {
        System.out.println("Output: " + isAnagram("listen", "silent"));
        System.out.println("Output: " + isAnagram("hello", "world"));
    }
    public static boolean isAnagram(String s1, String s2) {
        char[] a = s1.toCharArray();
        char[] b = s2.toCharArray();
        Arrays.sort(a);
        Arrays.sort(b);
        return Arrays.equals(a, b);
    }
}
`
    },
    {
        title: "Remove Spaces from String",
        description: "Remove all spaces from a string and print the result.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello world\"", expectedOutput: "\"helloworld\"" },
            { input: "\" Java Script \"", expectedOutput: "\"JavaScript\"" }
        ]),
        solutionApproach: "Replace all spaces with an empty string.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
public class RemoveSpaces {
    public static void main(String[] args) {
        String test1 = "hello world";
        System.out.println("Output: " + test1.replace(" ", ""));
        String test2 = " Java Script ";
        System.out.println("Output: " + test2.replace(" ", ""));
    }
}
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
        solutionApproach: "Loop through the string and count the occurrences of the given character.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class CountCharacter {
    public static void main(String[] args) {
        System.out.println("Output: " + countChar("hello", 'l'));
        System.out.println("Output: " + countChar("banana", 'a'));
    }
    public static int countChar(String str, char ch) {
        int count = 0;
        for(char c : str.toCharArray()){
            if(c == ch) count++;
        }
        return count;
    }
}
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
            { input: "\"Java\"", expectedOutput: "\"J*v*\"" }
        ]),
        solutionApproach: "Use regular expressions or iterate and replace each vowel.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
public class ReplaceVowels {
    public static void main(String[] args) {
        String test1 = "hello";
        System.out.println("Output: " + test1.replaceAll("[aeiouAEIOU]", "*"));
        String test2 = "Java";
        System.out.println("Output: " + test2.replaceAll("[aeiouAEIOU]", "*"));
    }
}
`
    }
];

// Insert problems sequentially
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
