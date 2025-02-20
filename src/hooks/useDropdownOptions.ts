import { useState, useEffect } from 'react';
import pb from '../services/pocketbase';
import { Problem, Difficulty, Category, ProgrammingLanguage, Theory, Section } from '../utils/types';
const useDropdownOptions = () => {
    const [languages, setLanguages] = useState<ProgrammingLanguage[]>([]);
    const [difficulties, setDifficulties] = useState<Difficulty[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [problems, setProblems] = useState<Problem[]>([]);
    const [theories, setTheories] = useState<Theory[]>([]);
    const [sections, setSections] = useState<Section[]>([]);
    useEffect(() => {
        const fetchOptions = async (collectionName: string) => {
            try {
                let response;
                if (collectionName === 'categories' || collectionName === 'sections') {

                    response = await pb.collection(collectionName).getFullList({
                        sort: 'priority',
                        expand: 'language,difficulty,category,theory'
                    });
                } else {
                    response = await pb.collection(collectionName).getFullList({
                        sort: collectionName === 'problems' || collectionName === 'theory' ? 'title' : 'name',
                        expand: 'language,difficulty,category,theory'
                    });
                }
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
            const theoryOptions = await fetchOptions('theory');
            const sectionOptions = await fetchOptions('sections');
            setLanguages(langOptions.map(lang => ({ id: lang.id, name: lang.name, version: lang.version, code_snippet: lang.code_snippet })));
            setDifficulties(diffOptions.map(diff => ({ id: diff.id, name: diff.name })));
            setCategories(catOptions.map(cat => ({ id: cat.id, name: cat.name, priority: cat.priority })));
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
            setTheories(theoryOptions.map(theory => ({
                id: theory.id,
                title: theory.title,
                content: theory.content,
                language: theory.language,
                category: theory.category
            })));
            setSections(sectionOptions.map(section => ({
                id: section.id,
                name: section.name,
                priority: section.priority,
                categories: section.expand?.category
            })));
            setLoading(false);

        };

        fetchData();
    }, []);

    return { languages, difficulties, categories, problems, theories, sections, loading };
};

export default useDropdownOptions;
