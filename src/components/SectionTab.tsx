import React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { Section } from "../utils/types";

interface SectionTabProps {
    sections: Section[];
    onSelectSection: (section: Section) => void;
}

const SectionTab: React.FC<SectionTabProps> = ({ sections, onSelectSection }) => {
    return (
        <Tabs
            colorScheme="green"
            onChange={(index: number) => {
                // Send the selected section back to the parent
                onSelectSection(sections[index]);
            }}
        >
            <TabList>
                {sections.map((section) => (
                    <Tab key={section.id}>{section.name}</Tab>
                ))}
            </TabList>
        </Tabs>
    );
};

export default SectionTab;
