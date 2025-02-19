import { useState, useEffect } from 'react';
import pb from '../services/pocketbase';
import { Problem, Difficulty, Category, ProgrammingLanguage } from '../utils/types';
const useDropdownOptions = () => {
    const [languages, setLanguages] = useState<ProgrammingLanguage[]>([]);
    const [difficulties, setDifficulties] = useState<Difficulty[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [problems, setProblems] = useState<Problem[]>([]);
    useEffect(() => {
        const fetchOptions = async (collectionName: string) => {
            try {
                const response = await pb.collection(collectionName).getFullList({
                    sort: collectionName === 'problems' ? 'title' : 'name',
                    expand: 'language,difficulty,category'
                });
                console.log(`${collectionName} response:`, response);
                return response;
            } catch (error) {
                console.error(`Error fetching ${collectionName}:`, error);
                if (error instanceof Error) {
                    console.error('Error details:', error.message);
                }
                return [];
            }
        };

        const fetchData = async () => {
            setLoading(true);
            const langOptions = await fetchOptions('languages');
            const diffOptions = await fetchOptions('difficulties');
            const catOptions = await fetchOptions('categories');
            const problemOptions = await fetchOptions('problems');

            setLanguages(langOptions.map(lang => ({ id: lang.id, name: lang.name, version: lang.version, code_snippet: lang.code_snippet })));
            setDifficulties(diffOptions.map(diff => ({ id: diff.id, name: diff.name })));
            setCategories(catOptions.map(cat => ({ id: cat.id, name: cat.name })));
            setProblems(problemOptions.map(problem => ({
                id: problem.id,
                title: problem.title,
                description: problem.description,
                difficulty: problem.expand?.difficulty,
                category: problem.expand?.category,
                language: problem.expand?.language,
                testCases: problem.expand?.testCases,
                solution: problem.expand?.solution,
                starterCode: problem.expand?.starterCode,
                createdBy: problem.expand?.createdBy,
                created: problem.expand?.created,
                solutionApproach: problem.expand?.solutionApproach || '',
                timeComplexity: problem.expand?.timeComplexity || '',
                spaceComplexity: problem.spaceComplexity || '',
                updated: problem.updated || problem.created,
                code: problem.code
            })));
            setLoading(false);

        };

        fetchData();
    }, []);

    return { languages, difficulties, categories, problems, loading };
};

export default useDropdownOptions;
