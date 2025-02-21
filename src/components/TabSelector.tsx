import React from "react";
import { Tabs, Tab, TabPanels, TabPanel, TabList, Box, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    if (categories.length === 0) {
        return <Box textAlign="center" marginTop="20px" fontSize="2xl" fontWeight="bold" color="gray.500">Coming soon...</Box>;
    }

    const scrollTabs = (direction: "left" | "right") => {
        const tabList = document.getElementById("tab-list");
        if (tabList) {
            const scrollAmount = direction === "left" ? -200 : 200;
            tabList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <Box style={{ marginTop: "20px" }} alignSelf="center" width="100%" position="relative">
            <Tabs
                defaultIndex={defaultIndex >= 0 ? defaultIndex : 0}
                variant='soft-rounded'
                colorScheme='blue'
                onChange={(index) => onSelectCategory(categories[index])}
            >
                <IconButton
                    aria-label="Scroll left"
                    icon={<FaArrowLeft />}
                    position="absolute"
                    left={0}
                    top="100%"
                    transform="translateY(-50%)"
                    zIndex={1}
                    onClick={() => scrollTabs("left")}
                    boxShadow="md"
                />
                <TabList id="tab-list" overflowX="auto" whiteSpace="nowrap" width="100%" position="relative">
                    {categories.map((cat, i) => (
                        <Tab key={i} minWidth="fit-content">{cat}</Tab>
                    ))}
                </TabList>
                <IconButton
                    aria-label="Scroll right"
                    icon={<FaArrowRight />}
                    position="absolute"
                    right={0}
                    top="100%"
                    transform="translateY(-50%)"
                    zIndex={1}
                    onClick={() => scrollTabs("right")}
                    boxShadow="md"
                />
                <TabPanels>
                    {/* If you don't need content in the panels, you can leave them empty */}
                    {categories.map((i) => (
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
