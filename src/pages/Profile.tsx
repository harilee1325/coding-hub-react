// src/pages/Profile.tsx
import React, { useState, useEffect } from "react";
import { Box, Button, Select, Text, VStack, useToast } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import pb from "../services/pocketbase";
import useDropdownOptions from "../hooks/useDropdownOptions";
import Navbar from "../components/Navbar";
import styles from '../styles/Profile.module.scss';


const Profile: React.FC = () => {
    const { user, setUser } = useAuth();
    const { languages, difficulties } = useDropdownOptions();
    const toast = useToast();

    const [languageId, setLanguageId] = useState(user?.preferredLanguageId || "");
    const [difficultyId, setDifficultyId] = useState(user?.preferredDifficultyId || "");

    useEffect(() => {
        if (languages.length > 0 && !languageId) {
            setLanguageId(languages[0].id);
        }
        if (difficulties.length > 0 && !difficultyId) {
            setDifficultyId(difficulties[0].id);
        }
    }, [languages, difficulties, languageId, difficultyId]);

    const handleSave = async () => {
        if (!user) return;

        const selectedLanguage = languages.find((l) => l.id === languageId);
        const selectedDifficulty = difficulties.find((d) => d.id === difficultyId);

        if (!selectedLanguage || !selectedDifficulty) {
            toast({
                title: "Invalid selections.",
                status: "warning",
                duration: 3000,
            });
            return;
        }

        try {
            const updatedUser = await pb.collection("users").update(user.id, {
                preferredLanguageId: selectedLanguage.id,
                preferredLanguageName: selectedLanguage.name,
                preferredDifficultyId: selectedDifficulty.id,
                preferredDifficultyName: selectedDifficulty.name,
            });
            setUser({
                ...user,
                preferredLanguageId: updatedUser.preferredLanguageId,
                preferredLanguageName: updatedUser.preferredLanguageName,
                preferredDifficultyId: updatedUser.preferredDifficultyId,
                preferredDifficultyName: updatedUser.preferredDifficultyName,
            });
            toast({
                title: "Preferences updated successfully!",
                status: "success",
                duration: 3000,
            });
        } catch (error: any) {
            toast({
                title: "Update failed.",
                description: error.message || "An error occurred.",
                status: "error",
                duration: 6000,
            });
        }
    };

    return (
        <div>
            <Navbar />
            <div className={styles.container}>

                <Box maxW="md" mx="auto" mt={10} p={5} borderWidth="1px" borderRadius="md">
                    <VStack spacing={4}>
                        <Text fontSize="2xl" fontWeight="bold">Profile Settings</Text>
                        <Select value={languageId} onChange={(e) => setLanguageId(e.target.value)}>
                            {languages.map((lang) => (
                                <option key={lang.id} value={lang.id}>
                                    {lang.name}
                                </option>
                            ))}
                        </Select>
                        <Select value={difficultyId} onChange={(e) => setDifficultyId(e.target.value)}>
                            {difficulties.map((diff) => (
                                <option key={diff.id} value={diff.id}>
                                    {diff.name}
                                </option>
                            ))}
                        </Select>
                        <Button colorScheme="blue" onClick={handleSave}>
                            Save Preferences
                        </Button>
                    </VStack>
                </Box>
            </div>
        </div>

    );
};

export default Profile;
