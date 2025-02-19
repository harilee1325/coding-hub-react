import React, { useState, useEffect } from 'react';
import { Box, Flex, useColorModeValue, Spinner } from '@chakra-ui/react';
import Navbar from "../components/Navbar";
import UserPreferences from '../components/UserPreferences';
import TabSelector from '../components/TabSelector';
import QuestionList from '../components/QuestionList';
import useDropdownOptions from '../hooks/useDropdownOptions';
import { Problem } from '../utils/types';
import { useAuth } from '../context/AuthContext';


const Home: React.FC = () => {
  const { languages, difficulties, categories, problems, loading } = useDropdownOptions();
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
  console.log("categories", categories);
  const initialCategoryName = categories.length ? categories[0].name : '';
  const initialCategoryId = categories.length ? categories[0].id : '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryName);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(initialCategoryId);
  const [filteredProblems, setFilteredProblems] = useState<Problem[]>([]);

  // Filter problems based on language, difficulty, and selected category.
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

  useEffect(() => {
    const filtered = problems.filter(problem => {
      const matchesLanguage =
        !defaultLanguageId || (problem.language && problem.language.id === defaultLanguageId);

      const matchesDifficulty =
        !defaultDifficultyId || (problem.difficulty && problem.difficulty.id === defaultDifficultyId);

      const matchesCategory =
        !initialCategoryId || (problem.category && problem.category.id === initialCategoryId);
      return matchesLanguage && matchesDifficulty && matchesCategory;
    });
    setFilteredProblems(filtered);
  }, [categories]);

  if (loading) {
    return (
      <Flex height="100vh" align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} minH="100vh">
      <Navbar />
      <Flex
        direction="column"
        maxW="1200px"
        mx="auto"
        mt={6}
        p={6}
        bg={useColorModeValue("white", "gray.800")}
        borderRadius="md"
        boxShadow="md"
      >
        <UserPreferences
          defaultLanguage={defaultLanguage}
          defaultDifficulty={defaultDifficulty}
        />
        <TabSelector
          categories={categories.map((cat) => cat.name)}
          selectedCategory={selectedCategory}
          onSelectCategory={(categoryName: string) => {
            setSelectedCategory(categoryName);
            const selectedCat = categories.find((cat) => cat.name === categoryName);
            setSelectedCategoryId(selectedCat ? selectedCat.id : "");
          }}
        />
        <QuestionList
          problems={filteredProblems}
          language={defaultLanguage}
          version={defaultLanguageVersion}
        />
      </Flex>
    </Box>
  );
};

export default Home;
