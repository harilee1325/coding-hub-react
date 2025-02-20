import { useEffect, useState } from "react";
import { Problem } from "../utils/types"; // Adjust the path as needed

interface UseFilteredProblemsProps {
    problems: Problem[];
    defaultLanguageId: string;
    defaultDifficultyId: string;
    selectedCategoryId: string;
}

const useFilteredProblems = ({
    problems,
    defaultLanguageId,
    defaultDifficultyId,
    selectedCategoryId,
}: UseFilteredProblemsProps) => {
    const [filteredProblems, setFilteredProblems] = useState<Problem[]>([]);

    useEffect(() => {
        const filtered = problems.filter(problem => {
            const matchesLanguage =
                !defaultLanguageId || (problem.language && problem.language.id === defaultLanguageId);

            const matchesDifficulty =
                !defaultDifficultyId || (problem.difficulty && problem.difficulty.id === defaultDifficultyId);

            const matchesCategory =
                !selectedCategoryId || (problem.category && problem.category.id === selectedCategoryId);

            return matchesLanguage && matchesDifficulty && matchesCategory;
        });

        setFilteredProblems(filtered);
    }, [defaultLanguageId, defaultDifficultyId, selectedCategoryId, problems]);

    return filteredProblems;
};

export default useFilteredProblems;
