import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import QuestionList from '../components/QuestionList';
import TabSelector from '../components/TabSelector';
import useDropdownOptions from '../hooks/useDropdownOptions';
import { Problem } from '../utils/types';
import { useAuth } from '../context/AuthContext';
import Navbar from "../components/Navbar";
import UserPreferences from '../components/UserPreferences';


const Home: React.FC = () => {
  // Fetch options and problems as before.
  const { languages, difficulties, categories, problems, loading } = useDropdownOptions();
  const { user } = useAuth();

  // Use user's profile preferences if available.
  const defaultLanguage = user?.preferredLanguageName || (languages.length ? languages[0].name : '');
  const defaultLanguageId = user?.preferredLanguageId || (languages.length ? languages[0].id : '');
  const defaultLanguageVersion = user?.preferredLanguageId
    ? languages.find(lang => lang.id === user.preferredLanguageId)?.version || ''
    : languages.length
      ? languages[0].version
      : '';

  const defaultDifficulty = user?.preferredDifficultyName || (difficulties.length ? difficulties[0].name : '');
  const defaultDifficultyId = user?.preferredDifficultyId || (difficulties.length ? difficulties[0].id : '');

  // For categories, allow selection via a TabSelector.
  // Default to the first category in the fetched options.
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

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <UserPreferences
          defaultLanguage={defaultLanguage}
          defaultDifficulty={defaultDifficulty}
        />

        {/* TabSelector to choose different categories */}
        <TabSelector
          categories={categories.map(category => category.name)}
          selectedCategory={selectedCategory}
          onSelectCategory={(categoryName: string) => {
            setSelectedCategory(categoryName);
            const selectedCat = categories.find(cat => cat.name === categoryName);
            setSelectedCategoryId(selectedCat ? selectedCat.id : "");
          }}
        />

        {/* Render the list of problems filtered by the user's preferences and selected category */}
        <QuestionList
          problems={filteredProblems}
          language={defaultLanguage}
          version={defaultLanguageVersion}
        />
      </div>
    </div>

  );
};

export default Home;
