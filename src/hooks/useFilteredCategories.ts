import { useEffect, useState } from "react";
import { Category, Section } from "../utils/types"; // Adjust the path as needed

interface UseFilteredCategoriesProps {
    categories: Category[];
    selectedSection: Section;
}

const useFilteredCategories = ({
    categories,
    selectedSection,
}: UseFilteredCategoriesProps) => {

    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    useEffect(() => {
        const filteredCategories = categories.filter(category => {
            if (selectedSection.categories) {
                return selectedSection.categories.find(sectionCategory => sectionCategory.id === category.id);
            }
            return false;
        });
        setSelectedCategories(filteredCategories);
        console.log("selectedCategories", selectedCategories);
    }, [selectedSection]);

    return selectedCategories;
};

export default useFilteredCategories;
