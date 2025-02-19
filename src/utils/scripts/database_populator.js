import PocketBase from 'pocketbase';

// Create a PocketBase instance (update URL if needed)
const pb = new PocketBase('http://127.0.0.1:8090');

// Only include languages: python, java, javascript
const data = [
    {
        "name": "python",
        "version": "3.10.0",
        "code_snippet": `def solution():
    # Write your code here
    pass

# Test your solution
if __name__ == "__main__":
    print(solution())`
    },
    {
        "name": "java",
        "version": "15.0.2",
        "code_snippet": `public class Solution {
    public static void main(String[] args) {
        System.out.println(solution());
    }
    
    public static String solution() {
        // Write your code here
        return "";
    }
}`
    },
    {
        "name": "javascript",
        "version": "18.15.0",
        "code_snippet": `function solution() {
    // Write your code here
    return;
}

// Test your solution
console.log(solution());`
    },
    {
        "name": "cpp",
        "version": "10.2.0",
        "code_snippet": `#include <iostream>
using namespace std;

string solution() {
    // Write your code here
    return "";
}

int main() {
    cout << solution() << endl;
    return 0;
}`
    },
    {
        "name": "c",
        "version": "10.2.0",
        "code_snippet": `#include <stdio.h>

char* solution() {
    // Write your code here
    return "";
}

int main() {
    printf("%s\\n", solution());
    return 0;
}`
    },
    {
        "name": "ruby",
        "version": "3.0.0",
        "code_snippet": `def solution
    # Write your code here
end

# Test your solution
puts solution`
    },
    {
        "name": "go",
        "version": "1.16.2",
        "code_snippet": `package main

import "fmt"

func solution() string {
    // Write your code here
    return ""
}

func main() {
    fmt.Println(solution())
}`
    },
    {
        "name": "rust",
        "version": "1.68.2",
        "code_snippet": `fn solution() -> String {
    // Write your code here
    String::from("")
}

fn main() {
    println!("{}", solution());
}`
    },
    {
        "name": "php",
        "version": "8.2.3",
        "code_snippet": `<?php
function solution() {
    // Write your code here
    return "";
}

// Test your solution
echo solution();
?>`
    }
];

async function populateLanguages() {
    for (const entry of data) {
        const { name, version, code_snippet } = entry;
        try {
            // Create a new record in the "languages" collection
            const record = await pb.collection('languages').create({
                name: name,
                version: version,
                code_snippet: code_snippet
            });
            console.log(`Inserted: ${record.name} - ${record.version}`);
        } catch (error) {
            console.error(`Error inserting ${name} - ${version}:`, error);
        }
    }
}

// Run the script
populateLanguages();
