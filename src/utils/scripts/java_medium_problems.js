import PocketBase from 'pocketbase';

// Create a PocketBase instance (update URL if needed)
const pb = new PocketBase('http://127.0.0.1:8090');

// Record IDs (or values) for filters
const difficulty = "wdim24u3uhq707e";         // or use your medium level record id if available
const language = "hsh5ek98q44s55d";             // Using Java language
const categoryArrays = "jp151w8e1psc0ky";
const categoryStrings = "dzc50fi6i46vgz5";

// Define 5 medium-level Array problems and 5 medium-level String problems in Java
const problems = [
    // ----- Java Array Problems -----
    {
        title: "Find Missing Number in Array",
        description: "Given an unsorted array containing numbers from 1 to n with one missing, find the missing number.",
        difficulty,
        language,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[3, 1, 2, 5]", expectedOutput: "4" },
            { input: "[7, 2, 3, 6, 5, 1]", expectedOutput: "4" }
        ]),
        solutionApproach: "Use the formula for the sum of first n natural numbers and subtract the sum of the array.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class MissingNumber {
    public static int findMissing(int[] arr, int n) {
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int num : arr) {
            actualSum += num;
        }
        return expectedSum - actualSum;
    }
    
    public static void main(String[] args) {
        // Test case 1
        int[] test1 = {3, 1, 2, 5};
        System.out.println("Test case 1 output: " + findMissing(test1, 5)); // Expected: 4

        // Test case 2
        int[] test2 = {7, 2, 3, 6, 5, 1};
        System.out.println("Test case 2 output: " + findMissing(test2, 7)); // Expected: 4
    }
}
`
    },
    {
        title: "Majority Element",
        description: "Find the element that appears more than n/2 times in an array (if it exists).",
        difficulty,
        language,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[3, 3, 4, 2, 3, 3]", expectedOutput: "3" },
            { input: "[1, 2, 3, 1, 1]", expectedOutput: "1" }
        ]),
        solutionApproach: "Use the Boyer-Moore voting algorithm to find the majority candidate.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class MajorityElement {
    public static int majorityElement(int[] nums) {
        int candidate = nums[0], count = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == candidate) {
                count++;
            } else {
                count--;
                if (count == 0) {
                    candidate = nums[i];
                    count = 1;
                }
            }
        }
        return candidate;
    }
    
    public static void main(String[] args) {
        // Test case 1
        int[] test1 = {3, 3, 4, 2, 3, 3};
        System.out.println("Test case 1 output: " + majorityElement(test1)); // Expected: 3

        // Test case 2
        int[] test2 = {1, 2, 3, 1, 1};
        System.out.println("Test case 2 output: " + majorityElement(test2)); // Expected: 1
    }
}
`
    },
    {
        title: "Product of Array Except Self",
        description: "Return an array output where output[i] is equal to the product of all the elements of the input array except arr[i].",
        difficulty,
        language,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1,2,3,4]", expectedOutput: "[24,12,8,6]" },
            { input: "[2,3,4,5]", expectedOutput: "[60,40,30,24]" }
        ]),
        solutionApproach: "Use two arrays (or a single pass with constant space if allowed) to store left and right products.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
public class ProductExceptSelf {
    public static int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] output = new int[n];
        output[0] = 1;
        for (int i = 1; i < n; i++) {
            output[i] = output[i - 1] * nums[i - 1];
        }
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            output[i] = output[i] * right;
            right *= nums[i];
        }
        return output;
    }
    
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        // Test case 1
        int[] test1 = {1,2,3,4};
        System.out.print("Test case 1 output: ");
        printArray(productExceptSelf(test1)); // Expected: 24 12 8 6

        // Test case 2
        int[] test2 = {2,3,4,5};
        System.out.print("Test case 2 output: ");
        printArray(productExceptSelf(test2)); // Expected: 60 40 30 24
    }
}
`
    },
    {
        title: "Rotate Array by K Positions",
        description: "Rotate an array to the right by k positions.",
        difficulty,
        language,
        category: categoryArrays,
        testCases: JSON.stringify([
            { input: "[1,2,3,4,5] with k=2", expectedOutput: "[4,5,1,2,3]" },
            { input: "[10,20,30,40] with k=1", expectedOutput: "[40,10,20,30]" }
        ]),
        solutionApproach: "Reverse parts of the array: first reverse the entire array, then reverse first k elements and the rest.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: `
public class RotateArray {
    public static void rotate(int[] arr, int k) {
        int n = arr.length;
        k = k % n;
        reverse(arr, 0, n - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);
    }
    
    public static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        // Test case 1
        int[] test1 = {1,2,3,4,5};
        rotate(test1, 2);
        System.out.print("Test case 1 output: ");
        printArray(test1); // Expected: [4,5,1,2,3]

        // Test case 2
        int[] test2 = {10,20,30,40};
        rotate(test2, 1);
        System.out.print("Test case 2 output: ");
        printArray(test2); // Expected: [40,10,20,30]
    }
}
`
    },
    // ----- Java String Problems -----
    {
        title: "Longest Palindromic Substring",
        description: "Find the longest palindromic substring in a given string.",
        difficulty,
        language,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"babad\"", expectedOutput: "\"bab\" or \"aba\"" },
            { input: "\"cbbd\"", expectedOutput: "\"bb\"" }
        ]),
        solutionApproach: "Expand around each center and track the longest palindrome.",
        timeComplexity: "O(n^2)",
        spaceComplexity: "O(1)",
        code: `
public class LongestPalindromicSubstring {
    public static String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i+1);
            int len = Math.max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return s.substring(start, end + 1);
    }
    
    private static int expandAroundCenter(String s, int left, int right) {
        while(left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    public static void main(String[] args) {
        // Test case 1
        String test1 = "babad";
        System.out.println("Test case 1 output: " + longestPalindrome(test1));
        // Expected: "bab" or "aba"

        // Test case 2
        String test2 = "cbbd";
        System.out.println("Test case 2 output: " + longestPalindrome(test2));
        // Expected: "bb"
    }
}
`
    },
    {
        title: "Group Anagrams",
        description: "Group an array of strings into anagrams.",
        difficulty,
        language,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "[\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]", expectedOutput: "[[\"eat\",\"tea\",\"ate\"], [\"tan\",\"nat\"], [\"bat\"]]" },
            { input: "[\"abc\", \"bca\", \"cab\", \"xyz\"]", expectedOutput: "[[\"abc\",\"bca\",\"cab\"], [\"xyz\"]]" }
        ]),
        solutionApproach: "Sort each string and use a hash map to group strings with the same sorted key.",
        timeComplexity: "O(n * k log k)",
        spaceComplexity: "O(nk)",
        code: `
import java.util.*;

public class GroupAnagrams {
    public static List<List<String>> groupAnagrams(String[] strs) {
        if (strs == null || strs.length == 0) return new ArrayList<>();
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] ca = s.toCharArray();
            Arrays.sort(ca);
            String key = new String(ca);
            if (!map.containsKey(key)) {
                map.put(key, new ArrayList<>());
            }
            map.get(key).add(s);
        }
        return new ArrayList<>(map.values());
    }
    
    public static void main(String[] args) {
        // Test case 1
        String[] test1 = {"eat", "tea", "tan", "ate", "nat", "bat"};
        System.out.println("Test case 1 output: " + groupAnagrams(test1));

        // Test case 2
        String[] test2 = {"abc", "bca", "cab", "xyz"};
        System.out.println("Test case 2 output: " + groupAnagrams(test2));
    }
}
`
    },
    {
        title: "Valid Parentheses",
        description: "Determine if a string of parentheses is valid.",
        difficulty,
        language,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"()[]{}\"", expectedOutput: "true" },
            { input: "\"(]\"", expectedOutput: "false" }
        ]),
        solutionApproach: "Use a stack to match opening and closing brackets.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
import java.util.*;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if(c == '(') stack.push(')');
            else if(c == '{') stack.push('}');
            else if(c == '[') stack.push(']');
            else if(stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
    
    public static void main(String[] args) {
        // Test case 1
        String test1 = "()[]{}";
        System.out.println("Test case 1 output: " + isValid(test1)); // Expected: true

        // Test case 2
        String test2 = "(]";
        System.out.println("Test case 2 output: " + isValid(test2)); // Expected: false
    }
}
`
    },
    {
        title: "Longest Common Prefix",
        description: "Find the longest common prefix string amongst an array of strings.",
        difficulty,
        language,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "[\"flower\",\"flow\",\"flight\"]", expectedOutput: "\"fl\"" },
            { input: "[\"dog\",\"racecar\",\"car\"]", expectedOutput: "\"\"" }
        ]),
        solutionApproach: "Compare characters of strings one by one until a mismatch is found.",
        timeComplexity: "O(S)", // where S is total number of characters in all strings
        spaceComplexity: "O(1)",
        code: `
public class LongestCommonPrefix {
    public static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";
        String prefix = strs[0];
        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }
        return prefix;
    }
    
    public static void main(String[] args) {
        // Test case 1
        String[] test1 = {"flower","flow","flight"};
        System.out.println("Test case 1 output: " + longestCommonPrefix(test1)); // Expected: "fl"

        // Test case 2
        String[] test2 = {"dog","racecar","car"};
        System.out.println("Test case 2 output: " + longestCommonPrefix(test2)); // Expected: ""
    }
}
`
    },
    {
        title: "String Compression",
        description: "Compress a string using the counts of repeated characters.",
        difficulty,
        language,
        category: categoryStrings,
        testCases: JSON.stringify([
            { input: "\"aabcccccaaa\"", expectedOutput: "\"a2b1c5a3\"" },
            { input: "\"abcdef\"", expectedOutput: "\"a1b1c1d1e1f1\"" }
        ]),
        solutionApproach: "Iterate through the string and count consecutive characters, then build the compressed string.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: `
public class StringCompression {
    public static String compressString(String str) {
        StringBuilder compressed = new StringBuilder();
        int countConsecutive = 0;
        for (int i = 0; i < str.length(); i++) {
            countConsecutive++;
            if (i + 1 >= str.length() || str.charAt(i) != str.charAt(i + 1)) {
                compressed.append(str.charAt(i));
                compressed.append(countConsecutive);
                countConsecutive = 0;
            }
        }
        return compressed.toString();
    }
    
    public static void main(String[] args) {
        // Test case 1
        String test1 = "aabcccccaaa";
        System.out.println("Test case 1 output: " + compressString(test1)); // Expected: "a2b1c5a3"

        // Test case 2
        String test2 = "abcdef";
        System.out.println("Test case 2 output: " + compressString(test2)); // Expected: "a1b1c1d1e1f1"
    }
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
