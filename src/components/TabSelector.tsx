import React, { useEffect } from "react";
import { Tabs, Tab, TabPanels, TabPanel, TabList, Box } from "@chakra-ui/react";

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
    // Find the index for the default selected category.
    const defaultIndex = categories.findIndex((cat) => cat === selectedCategory);

    return (
        <Box style={{ marginTop: "20px" }} alignSelf="center">


            <Tabs
                defaultIndex={defaultIndex >= 0 ? defaultIndex : 0}
                variant="enclosed"
                onChange={(index) => onSelectCategory(categories[index])}
            >
                <TabList>
                    {categories.map((cat, i) => (
                        <Tab key={i}>{cat}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {/* If you don't need content in the panels, you can leave them empty */}
                    {categories.map((cat, i) => (
                        <TabPanel key={i} p={4}>
                            {/* Optionally, you could display something like "Showing {cat} problems" */}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default TabSelector;
