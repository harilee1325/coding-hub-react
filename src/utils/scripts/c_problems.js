import PocketBase from 'pocketbase';

// Create a PocketBase instance (update URL if needed)
const pb = new PocketBase('http://127.0.0.1:8090');

// Common record IDs for filters (updated language ID)
const difficultyId = "e7s812mq51ed03p";
const languageId = "hy3wcn7m12gob5y"; // Updated language ID
const categoryArrays = "jp151w8e1psc0ky";
const categoryStrings = "dzc50fi6i46vgz5";

// Define 10 C Array Problems and 10 C String Problems
const problems = [
    // ===== C Array Problems =====
    {
        title: "Find Maximum in Array",
        description: "Find and print the maximum value in an array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "{1, 3, 2, 5, 4}", expectedOutput: "5" },
            { input: "{7, 2, 9, 3, 1}", expectedOutput: "9" }
        ]),
        solutionApproach: "Traverse the array and update the max value.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>

int findMax(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if(arr[i] > max)
            max = arr[i];
    }
    return max;
}

int main() {
    int test1[] = {1, 3, 2, 5, 4};
    int n1 = sizeof(test1)/sizeof(test1[0]);
    printf("Test1 Output: %d\\n", findMax(test1, n1)); // Expected: 5

    int test2[] = {7, 2, 9, 3, 1};
    int n2 = sizeof(test2)/sizeof(test2[0]);
    printf("Test2 Output: %d\\n", findMax(test2, n2)); // Expected: 9
    return 0;
}
`
    },
    {
        title: "Reverse Array",
        description: "Print the array in reverse order.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "{1, 2, 3, 4, 5}", expectedOutput: "5 4 3 2 1" },
            { input: "{10, 20, 30}", expectedOutput: "30 20 10" }
        ]),
        solutionApproach: "Traverse the array from the end to the beginning.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>

void reverseArray(int arr[], int n) {
    for (int i = n-1; i >= 0; i--) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int test1[] = {1, 2, 3, 4, 5};
    int n1 = sizeof(test1)/sizeof(test1[0]);
    printf("Test1 Output: ");
    reverseArray(test1, n1); // Expected: 5 4 3 2 1

    int test2[] = {10, 20, 30};
    int n2 = sizeof(test2)/sizeof(test2[0]);
    printf("Test2 Output: ");
    reverseArray(test2, n2); // Expected: 30 20 10
    return 0;
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
            { input: "{1, 2, 3, 4}", expectedOutput: "10" },
            { input: "{5, 5, 5}", expectedOutput: "15" }
        ]),
        solutionApproach: "Iterate through the array and sum the elements.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>

int sumArray(int arr[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) {
        total += arr[i];
    }
    return total;
}

int main() {
    int test1[] = {1, 2, 3, 4};
    int n1 = sizeof(test1)/sizeof(test1[0]);
    printf("Test1 Output: %d\\n", sumArray(test1, n1)); // Expected: 10

    int test2[] = {5, 5, 5};
    int n2 = sizeof(test2)/sizeof(test2[0]);
    printf("Test2 Output: %d\\n", sumArray(test2, n2)); // Expected: 15
    return 0;
}
`
    },
    {
        title: "Find Minimum in Array",
        description: "Find and print the minimum value in an array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "{4, 2, 8, 1, 5}", expectedOutput: "1" },
            { input: "{10, 20, 5, 15}", expectedOutput: "5" }
        ]),
        solutionApproach: "Traverse the array to determine the minimum value.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>

int findMin(int arr[], int n) {
    int min = arr[0];
    for (int i = 1; i < n; i++) {
        if(arr[i] < min)
            min = arr[i];
    }
    return min;
}

int main() {
    int test1[] = {4, 2, 8, 1, 5};
    int n1 = sizeof(test1)/sizeof(test1[0]);
    printf("Test1 Output: %d\\n", findMin(test1, n1)); // Expected: 1

    int test2[] = {10, 20, 5, 15};
    int n2 = sizeof(test2)/sizeof(test2[0]);
    printf("Test2 Output: %d\\n", findMin(test2, n2)); // Expected: 5
    return 0;
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
            { input: "{1, 2, 3, 4}", expectedOutput: "true" },
            { input: "{4, 3, 2, 1}", expectedOutput: "false" }
        ]),
        solutionApproach: "Check that each element is less than or equal to the next.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>
#include <stdbool.h>

bool isSorted(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        if(arr[i] > arr[i+1])
            return false;
    }
    return true;
}

int main() {
    int test1[] = {1, 2, 3, 4};
    int n1 = sizeof(test1)/sizeof(test1[0]);
    printf("Test1 Output: %s\\n", isSorted(test1, n1) ? "true" : "false"); // Expected: true

    int test2[] = {4, 3, 2, 1};
    int n2 = sizeof(test2)/sizeof(test2[0]);
    printf("Test2 Output: %s\\n", isSorted(test2, n2) ? "true" : "false"); // Expected: false
    return 0;
}
`
    },
    {
        title: "Count Even and Odd Numbers",
        description: "Count and print the number of even and odd numbers in an array.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "{1, 2, 3, 4, 5}", expectedOutput: "Evens: 2, Odds: 3" },
            { input: "{2, 4, 6, 8}", expectedOutput: "Evens: 4, Odds: 0" }
        ]),
        solutionApproach: "Traverse the array and count even and odd numbers.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>

void countEvenOdd(int arr[], int n) {
    int evens = 0, odds = 0;
    for (int i = 0; i < n; i++) {
        if(arr[i] % 2 == 0)
            evens++;
        else
            odds++;
    }
    printf("Evens: %d, Odds: %d\\n", evens, odds);
}

int main() {
    int test1[] = {1, 2, 3, 4, 5};
    int n1 = sizeof(test1)/sizeof(test1[0]);
    printf("Test1 Output: ");
    countEvenOdd(test1, n1); // Expected: Evens: 2, Odds: 3

    int test2[] = {2, 4, 6, 8};
    int n2 = sizeof(test2)/sizeof(test2[0]);
    printf("Test2 Output: ");
    countEvenOdd(test2, n2); // Expected: Evens: 4, Odds: 0
    return 0;
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
            { input: "{10, 5, 8, 20, 15}", expectedOutput: "15" },
            { input: "{3, 1, 4, 2}", expectedOutput: "3" }
        ]),
        solutionApproach: "Traverse the array to track the largest and second largest values.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>
#include <limits.h>

int secondLargest(int arr[], int n) {
    int first = INT_MIN, second = INT_MIN;
    for (int i = 0; i < n; i++) {
        if(arr[i] > first) {
            second = first;
            first = arr[i];
        } else if(arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    return second;
}

int main() {
    int test1[] = {10, 5, 8, 20, 15};
    int n1 = sizeof(test1)/sizeof(test1[0]);
    printf("Test1 Output: %d\\n", secondLargest(test1, n1)); // Expected: 15

    int test2[] = {3, 1, 4, 2};
    int n2 = sizeof(test2)/sizeof(test2[0]);
    printf("Test2 Output: %d\\n", secondLargest(test2, n2)); // Expected: 3
    return 0;
}
`
    },
    {
        title: "Rotate Array Left",
        description: "Rotate an array to the left by one position.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "{1, 2, 3, 4}", expectedOutput: "2 3 4 1" },
            { input: "{10, 20, 30}", expectedOutput: "20 30 10" }
        ]),
        solutionApproach: "Shift elements left and move the first element to the end.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
#include <stdio.h>

void rotateLeft(int arr[], int n) {
    int first = arr[0];
    for (int i = 0; i < n - 1; i++) {
        arr[i] = arr[i+1];
    }
    arr[n-1] = first;
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int test1[] = {1, 2, 3, 4};
    int n1 = sizeof(test1)/sizeof(test1[0]);
    printf("Test1 Output: ");
    rotateLeft(test1, n1); // Expected: 2 3 4 1

    int test2[] = {10, 20, 30};
    int n2 = sizeof(test2)/sizeof(test2[0]);
    printf("Test2 Output: ");
    rotateLeft(test2, n2); // Expected: 20 30 10
    return 0;
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
            { input: "{1,3,5} and {2,4,6}", expectedOutput: "{1,2,3,4,5,6}" },
            { input: "{1,2} and {3,4}", expectedOutput: "{1,2,3,4}" }
        ]),
        solutionApproach: "Use two pointers to merge the arrays.",
        timeComplexity: "O(n+m)",
        spaceComplexity: "O(n+m)",
        code: `
#include <stdio.h>

void mergeSorted(int arr1[], int n1, int arr2[], int n2, int merged[]) {
    int i = 0, j = 0, k = 0;
    while(i < n1 && j < n2) {
        if(arr1[i] < arr2[j])
            merged[k++] = arr1[i++];
        else
            merged[k++] = arr2[j++];
    }
    while(i < n1)
        merged[k++] = arr1[i++];
    while(j < n2)
        merged[k++] = arr2[j++];
}

void printArray(int arr[], int n) {
    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\\n");
}

int main() {
    int arr1[] = {1, 3, 5}, n1 = 3;
    int arr2[] = {2, 4, 6}, n2 = 3;
    int merged[6];
    mergeSorted(arr1, n1, arr2, n2, merged);
    printf("Test1 Output: ");
    printArray(merged, n1+n2); // Expected: 1 2 3 4 5 6

    int arr3[] = {1, 2}, n3 = 2;
    int arr4[] = {3, 4}, n4 = 2;
    int merged2[4];
    mergeSorted(arr3, n3, arr4, n4, merged2);
    printf("Test2 Output: ");
    printArray(merged2, n3+n4); // Expected: 1 2 3 4
    return 0;
}
`
    },
    {
        title: "Remove Duplicates from Sorted Array",
        description: "Remove duplicates from a sorted array and print the unique elements.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "{1, 1, 2, 2, 3}", expectedOutput: "{1,2,3}" },
            { input: "{4,4,4,5,5,6}", expectedOutput: "{4,5,6}" }
        ]),
        solutionApproach: "Traverse the array and print only when a new element is found.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>

void removeDuplicates(int arr[], int n) {
    if(n == 0) return;
    printf("%d ", arr[0]);
    for (int i = 1; i < n; i++) {
        if(arr[i] != arr[i-1])
            printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int test1[] = {1, 1, 2, 2, 3};
    int n1 = sizeof(test1)/sizeof(test1[0]);
    printf("Test1 Output: ");
    removeDuplicates(test1, n1); // Expected: 1 2 3

    int test2[] = {4, 4, 4, 5, 5, 6};
    int n2 = sizeof(test2)/sizeof(test2[0]);
    printf("Test2 Output: ");
    removeDuplicates(test2, n2); // Expected: 4 5 6
    return 0;
}
`
    },

    // ===== C String Problems =====
    {
        title: "Reverse a String",
        description: "Reverse a given string.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello\"", expectedOutput: "\"olleh\"" },
            { input: "\"CProgramming\"", expectedOutput: "\"gnimmargorPC\"" }
        ]),
        solutionApproach: "Swap characters from both ends until reaching the middle.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>
#include <string.h>

void reverseString(char str[]) {
    int n = strlen(str);
    for (int i = 0; i < n/2; i++) {
        char temp = str[i];
        str[i] = str[n-i-1];
        str[n-i-1] = temp;
    }
}

int main() {
    char test1[] = "hello";
    reverseString(test1);
    printf("Test1 Output: %s\\n", test1); // Expected: olleh

    char test2[] = "CProgramming";
    reverseString(test2);
    printf("Test2 Output: %s\\n", test2); // Expected: gnimmargorPC
    return 0;
}
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
        solutionApproach: "Compare characters from the start and end moving toward the center.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isPalindrome(char str[]) {
    int n = strlen(str);
    for (int i = 0; i < n/2; i++) {
        if(str[i] != str[n-i-1])
            return false;
    }
    return true;
}

int main() {
    char test1[] = "racecar";
    printf("Test1 Output: %s\\n", isPalindrome(test1) ? "true" : "false"); // Expected: true

    char test2[] = "hello";
    printf("Test2 Output: %s\\n", isPalindrome(test2) ? "true" : "false"); // Expected: false
    return 0;
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
            { input: "\"CProgramming\"", expectedOutput: "3" }
        ]),
        solutionApproach: "Iterate through the string and count characters that are vowels.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>
#include <ctype.h>

int countVowels(char str[]) {
    int count = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        char ch = tolower(str[i]);
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
            count++;
    }
    return count;
}

int main() {
    char test1[] = "hello world";
    printf("Test1 Output: %d\\n", countVowels(test1)); // Expected: 3

    char test2[] = "CProgramming";
    printf("Test2 Output: %d\\n", countVowels(test2)); // Expected: 3
    return 0;
}
`
    },
    {
        title: "Find Duplicate Characters in a String",
        description: "Identify duplicate characters in a string and print them.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"programming\"", expectedOutput: "\"r, g, m\"" },
            { input: "\"hello\"", expectedOutput: "\"l\"" }
        ]),
        solutionApproach: "Use an array to count character frequencies and then print those with count > 1.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
#include <stdio.h>
#include <string.h>

void findDuplicates(char str[]) {
    int freq[256] = {0};
    for (int i = 0; str[i] != '\\0'; i++) {
        freq[(unsigned char)str[i]]++;
    }
    for (int i = 0; i < 256; i++) {
        if(freq[i] > 1)
            printf("%c ", i);
    }
    printf("\\n");
}

int main() {
    char test1[] = "programming";
    printf("Test1 Output: ");
    findDuplicates(test1); // Expected output may include: r g m (order can vary)

    char test2[] = "hello";
    printf("Test2 Output: ");
    findDuplicates(test2); // Expected: l
    return 0;
}
`
    },
    {
        title: "Convert String to Uppercase",
        description: "Convert all characters in a string to uppercase.",
        difficulty: difficultyId,
        language: languageId,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"hello\"", expectedOutput: "\"HELLO\"" },
            { input: "\"world\"", expectedOutput: "\"WORLD\"" }
        ]),
        solutionApproach: "Traverse the string and convert each character using toupper().",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>
#include <ctype.h>

void toUpperCase(char str[]) {
    for (int i = 0; str[i] != '\\0'; i++) {
        str[i] = toupper(str[i]);
    }
}

int main() {
    char test1[] = "hello";
    toUpperCase(test1);
    printf("Test1 Output: %s\\n", test1); // Expected: HELLO

    char test2[] = "world";
    toUpperCase(test2);
    printf("Test2 Output: %s\\n", test2); // Expected: WORLD
    return 0;
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
        solutionApproach: "Iterate through the string and increment a counter when the character is found.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>

int countChar(const char *str, char ch) {
    int count = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        if(str[i] == ch)
            count++;
    }
    return count;
}

int main() {
    printf("Test1 Output: %d\\n", countChar("hello", 'l'));   // Expected: 2
    printf("Test2 Output: %d\\n", countChar("banana", 'a'));    // Expected: 3
    return 0;
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
            { input: "\"CProgramming\"", expectedOutput: "\"CPr*gr*mm*ng\"" }
        ]),
        solutionApproach: "Traverse the string and replace vowels by checking against a list of vowels.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
#include <stdio.h>
#include <ctype.h>

void replaceVowels(char str[]) {
    for (int i = 0; str[i] != '\\0'; i++) {
        char ch = tolower(str[i]);
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
            str[i] = '*';
    }
}

int main() {
    char test1[] = "hello";
    replaceVowels(test1);
    printf("Test1 Output: %s\\n", test1); // Expected: h*ll*

    char test2[] = "CProgramming";
    replaceVowels(test2);
    printf("Test2 Output: %s\\n", test2); // Expected: CPr*gr*mm*ng
    return 0;
}
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

