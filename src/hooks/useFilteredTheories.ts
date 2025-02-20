import { useEffect, useState } from "react";
import { Theory } from "../utils/types"; // Adjust the path as needed

interface UseFilteredTheoriesProps {
    theories: Theory[];
    defaultLanguageId: string;
    initialCategoryId: string;
    selectedCategoryId: string;
}

const useFilteredTheories = ({
    theories,
    defaultLanguageId,
    initialCategoryId,
    selectedCategoryId,
}: UseFilteredTheoriesProps) => {


    let categoryId = "";
    if (selectedCategoryId === "") {
        categoryId = initialCategoryId;
    } else {
        categoryId = selectedCategoryId;
    }
    const [selectedTheory, setSelectedTheory] = useState<Theory | null>(null);

    useEffect(() => {
        const filteredTheories = theories.filter(theory => {
            const matchesLanguage =
                !defaultLanguageId || (theory.language === defaultLanguageId);

            const matchesCategory =
                !categoryId || (theory.category === categoryId);

            return matchesLanguage && matchesCategory;
        });

        // console.log("selectedCategoryId", selectedCategoryId);
        // filteredTheories.forEach(theory => {
        //     if (selectedCategoryId === "") {
        //         if (theory.category === initialCategoryId) {
        //             setSelectedTheory(theory);
        //         }
        //     } else if (theory.category === selectedCategoryId) {
        //         setSelectedTheory(theory);
        //     } else {
        //         setSelectedTheory(null);
        //     }
        // });
        setSelectedTheory(filteredTheories[0]);
        console.log("selectedTheory", selectedTheory);
    }, [theories, defaultLanguageId, initialCategoryId, selectedCategoryId]);

    return selectedTheory;
};

export default useFilteredTheories;
