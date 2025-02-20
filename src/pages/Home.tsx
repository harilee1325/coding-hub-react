import React, { useEffect, useState } from 'react';
import { Box, Flex, useColorModeValue, Spinner } from '@chakra-ui/react';
import Navbar from "../components/Navbar";
import UserPreferences from '../components/UserPreferences';
import TabSelector from '../components/TabSelector';
import useDropdownOptions from '../hooks/useDropdownOptions';
import { useAuth } from '../context/AuthContext';
import useFilteredProblems from '../hooks/useFilteredProblems';
import useFilteredTheories from '../hooks/useFilteredTheories';
import ContentTabs from '../components/ContentTabs';
import SectionTab from '../components/SectionTab';
import { Section } from '../utils/types';
import useFilteredCategories from '../hooks/useFilteredCategories';

const Home: React.FC = () => {
  const { languages, difficulties, categories, problems, theories, sections, loading } = useDropdownOptions();
  const { user } = useAuth();

  // Use user's stored preferences if available; fallback to first option otherwise.
  const defaultLanguage = user?.preferredLanguageName || (languages.length ? languages[0].name : '');
  const defaultLanguageId = user?.preferredLanguageId || (languages.length ? languages[0].id : '');
  const defaultLanguageVersion = user?.preferredLanguageId
    ? languages.find(lang => lang.id === user.preferredLanguageId)?.version || ''
    : languages.length
      ? languages[0].version
      : '';

  const defaultDifficulty = user?.preferredDifficultyName || (difficulties.length ? difficulties[0].name : '');
  const defaultDifficultyId = user?.preferredDifficultyId || (difficulties.length ? difficulties[0].id : '');

  // For categories, we allow selection via a TabSelector.
  const initialCategoryName = categories.length ? categories[0].name : '';
  const initialCategoryId = categories.length ? categories[0].id : '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryName);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(initialCategoryId);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  // Use hooks for filtering problems and theories
  const filteredProblems = useFilteredProblems({
    problems,
    defaultLanguageId,
    defaultDifficultyId,
    selectedCategoryId,
  });

  const filteredTheories = useFilteredTheories({
    theories,
    defaultLanguageId,
    initialCategoryId,
    selectedCategoryId,
  });

  const filteredCategories = useFilteredCategories({
    categories,
    selectedSection: selectedSection || sections[0],
  });

  useEffect(() => {
    if (filteredCategories.length > 0) {
      setSelectedCategory(filteredCategories[0].name);
      setSelectedCategoryId(filteredCategories[0].id);
    }
  }, [filteredCategories]);

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const flexBgColor = useColorModeValue("white", "gray.800");

  if (loading) {
    return (
      <Flex height="100vh" align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box bg={bgColor} minH="100vh">
      <Navbar />
      <UserPreferences defaultLanguage={defaultLanguage} defaultDifficulty={defaultDifficulty} />
      <Flex
        direction="column"
        maxW="1200px"
        mx="auto"
        mt={6}
        p={6}
        bg={flexBgColor}
        borderRadius="md"
        boxShadow="md">

        <SectionTab sections={sections} onSelectSection={(section) => {
          setSelectedSection(section);
        }} />

        <TabSelector
          categories={filteredCategories.map((cat) => cat.name)}
          selectedCategory={selectedCategory}
          onSelectCategory={(categoryName: string) => {
            setSelectedCategory(categoryName);
            const selectedCat = filteredCategories.find((cat) => cat.name === categoryName);
            setSelectedCategoryId(selectedCat ? selectedCat.id : "");
          }}
        />

        {filteredCategories.length > 0 && (
          <>
            {filteredTheories && filteredProblems && (
              <ContentTabs selectedTheory={filteredTheories}
                filteredProblems={filteredProblems}
                defaultLanguage={defaultLanguage}
                defaultLanguageVersion={defaultLanguageVersion} />
            )}
          </>
        )}

      </Flex>
    </Box>
  );
};

export default Home;
