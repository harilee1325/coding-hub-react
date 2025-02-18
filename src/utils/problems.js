import PocketBase from 'pocketbase';

// Create a PocketBase instance (update URL if needed)
const pb = new PocketBase('http://127.0.0.1:8090');

const problems = [
    // ===== Array Problems =====
    {
        title: "Find Maximum in Array",
        description: "A Java program to find the maximum value in an array. The program runs two hard-coded test cases.",
        difficulty: "e7s812mq51ed03p",
        language: "hsh5ek98q44s55d",
        category: "jp151w8e1psc0ky",
        testCases: JSON.stringify([
            { input: "[1, 3, 2, 5, 4]", expectedOutput: "5" },
            { input: "[7, 2, 9, 3, 1]", expectedOutput: "9" }
        ]),
        solutionApproach: "Traverse the array while tracking the maximum element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class FindMaximumInArray {
    public static void main(String[] args) {
        int[] test1 = {1, 3, 2, 5, 4};
        System.out.println("Test case 1 output: " + findMax(test1));
        int[] test2 = {7, 2, 9, 3, 1};
        System.out.println("Test case 2 output: " + findMax(test2));
    }
    
    public static int findMax(int[] arr) {
        int max = arr[0];
        for (int num : arr) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }
}
`
    },
    {
        title: "Reverse Array",
        description: "A Java program that prints the reverse of an array. Two hard-coded test cases are included.",
        difficulty: "e7s812mq51ed03p",
        language: "hsh5ek98q44s55d",
        category: "jp151w8e1psc0ky",
        testCases: JSON.stringify([
            { input: "[1, 2, 3, 4, 5]", expectedOutput: "5 4 3 2 1" },
            { input: "[10, 20, 30]", expectedOutput: "30 20 10" }
        ]),
        solutionApproach: "Iterate the array from the end to the beginning and print each element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class ReverseArray {
    public static void main(String[] args) {
        int[] test1 = {1, 2, 3, 4, 5};
        System.out.print("Test case 1 output: ");
        printReverse(test1);
        System.out.println();
        int[] test2 = {10, 20, 30};
        System.out.print("Test case 2 output: ");
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

    // ===== String Problems =====
    {
        title: "Reverse a String",
        description: "A Java program that reverses a given string. Two hard-coded test cases are provided.",
        difficulty: "e7s812mq51ed03p",
        language: "hsh5ek98q44s55d",
        category: "dzc50fi6i46vgz5",
        testCases: JSON.stringify([
            { input: "\"hello\"", expectedOutput: "\"olleh\"" },
            { input: "\"Java\"", expectedOutput: "\"avaJ\"" }
        ]),
        solutionApproach: "Use StringBuilder's reverse() method to reverse the string.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
public class ReverseString {
    public static void main(String[] args) {
        String test1 = "hello";
        System.out.println("Test case 1 output: " + reverse(test1));
        String test2 = "Java";
        System.out.println("Test case 2 output: " + reverse(test2));
    }
    
    public static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }
}
`
    },
    {
        title: "Check Palindrome String",
        description: "A Java program to check if a string is a palindrome. Two hard-coded test cases are included.",
        difficulty: "e7s812mq51ed03p",
        language: "hsh5ek98q44s55d",
        category: "dzc50fi6i46vgz5",
        testCases: JSON.stringify([
            { input: "\"racecar\"", expectedOutput: "true" },
            { input: "\"hello\"", expectedOutput: "false" }
        ]),
        solutionApproach: "Compare characters from the beginning and end moving towards the center.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class PalindromeCheck {
    public static void main(String[] args) {
        String test1 = "racecar";
        System.out.println("Test case 1 output: " + isPalindrome(test1));
        String test2 = "hello";
        System.out.println("Test case 2 output: " + isPalindrome(test2));
    }
    
    public static boolean isPalindrome(String str) {
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
`
    }
];

async function insertAllProblems() {
    for (const problem of problems) {
        try {
            const record = await pb.collection('problems').create(problem);
            console.log("Inserted problem:", record);
        } catch (error) {
            console.error("Error inserting problem:", error);
        }
    }
}

insertAllProblems();
