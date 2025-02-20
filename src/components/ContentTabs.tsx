import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { Theory, Problem } from "../utils/types"
import TheoryField from "./TheoryField";
import QuestionList from "./QuestionList";

const ContentTabs: React.FC<{ selectedTheory: Theory | null, filteredProblems: Problem[], defaultLanguage: string, defaultLanguageVersion: string }> = ({ selectedTheory, filteredProblems, defaultLanguage, defaultLanguageVersion }) => {
    return (
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList justifyContent={'center'}>
                <Tab>Theory</Tab>
                <Tab>Practice Problems</Tab>
                <Tab>Learn with AI</Tab>

            </TabList>
            <TabPanels>
                <TabPanel>
                    {selectedTheory && <TheoryField theory={selectedTheory} />}
                </TabPanel>
                <TabPanel>
                    <QuestionList problems={filteredProblems} language={defaultLanguage} version={defaultLanguageVersion} />
                </TabPanel>
                <TabPanel>
                    Coming Soon
                    {/* <TopicsChatAI /> */}
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default ContentTabs;
