import React from "react";
import styles from "./components_style/TabSelector.module.scss";

interface TabSelectorProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
}) => {
    return (
        <div className={styles.tabContainer}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`${styles.tab} ${selectedCategory === category ? styles.selected : ""}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default TabSelector;
