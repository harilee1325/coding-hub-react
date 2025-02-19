export interface Problem {
    id: string;
    title: string;
    description: string;
    difficulty: Difficulty;
    category: Category;
    language: ProgrammingLanguage;
    testCases: TestCase[];
    solutionApproach: string;
    timeComplexity: string;
    spaceComplexity: string;
    created: Date;
    updated: Date;
    code: string;
}

export interface TestCase {
    input: string;
    expectedOutput: string;
    explanation?: string;
}

export interface Difficulty {
    name: string;
    id: string;
}


export interface Category {
    name: string;
    id: string;
}

export interface ProgrammingLanguage {
    name: string;
    version: string;
    code_snippet: string;
    id: string;
}   