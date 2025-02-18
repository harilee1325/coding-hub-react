import React, { useState, useEffect } from "react";
import { Box, Button, Input, VStack, Text, Select, useToast } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import pb from "../services/pocketbase";
import useDropdownOptions from "../hooks/useDropdownOptions";

const Signup: React.FC = () => {
    const { languages, difficulties } = useDropdownOptions();
    const toast = useToast();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Use dynamic options for language and difficulty:
    const [preferredLanguageId, setPreferredLanguageId] = useState<string>("");
    const [preferredDifficultyId, setPreferredDifficultyId] = useState<string>("");
    const [preferredLanguageName, setPreferredLanguageName] = useState<string>("");
    const [preferredDifficultyName, setPreferredDifficultyName] = useState<string>("");

    // Set defaults once the options are loaded:
    useEffect(() => {
        if (languages.length > 0) {
            setPreferredLanguageId(languages[0].id);
            setPreferredLanguageName(languages[0].name);
        }
        if (difficulties.length > 0) {
            setPreferredDifficultyId(difficulties[0].id);
            setPreferredDifficultyName(difficulties[0].name);
        }
    }, [languages, difficulties]);

    const handleSignup = async () => {
        try {
            const selectedLanguage = languages.find(l => l.id === preferredLanguageId);
            const selectedDifficulty = difficulties.find(d => d.id === preferredDifficultyId);

            const newUser = await pb.collection("users").create({
                email,
                password,
                passwordConfirm: password,
                preferredLanguageId: preferredLanguageId,
                preferredLanguageName: selectedLanguage ? selectedLanguage.name : "",
                preferredDifficultyId: preferredDifficultyId,
                preferredDifficultyName: selectedDifficulty ? selectedDifficulty.name : "",
            });

            toast({
                title: "Account created successfully.",
                status: "success",
                duration: 3000,
            });
            // Optionally log in immediately after signup:
            await pb.collection("users").authWithPassword(email, password);
            navigate("/"); // Navigate to home page after signup
        } catch (error: any) {
            console.error("Signup error:", error);
            toast({
                title: "Signup failed.",
                description: error.message || "An error occurred during signup.",
                status: "error",
                duration: 6000,
            });
        }
    };

    return (
        <Box maxW="md" mx="auto" mt={10} p={5} borderWidth="1px" borderRadius="md">
            <VStack spacing={4}>
                <Text fontSize="2xl" fontWeight="bold">Sign Up</Text>
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                {/* Language selection from PocketBase options */}
                <Select
                    value={preferredLanguageId}
                    onChange={(e) => {
                        const selectedId = e.target.value;
                        setPreferredLanguageId(selectedId);
                        const selectedLang = languages.find(l => l.id === selectedId);
                        setPreferredLanguageName(selectedLang ? selectedLang.name : "");
                    }}
                >
                    {languages.map((lang) => (
                        <option key={lang.id} value={lang.id}>
                            {lang.name}
                        </option>
                    ))}
                </Select>
                {/* Difficulty selection */}
                <Select
                    value={preferredDifficultyId}
                    onChange={(e) => {
                        const selectedId = e.target.value;
                        setPreferredDifficultyId(selectedId);
                        const selectedDiff = difficulties.find(d => d.id === selectedId);
                        setPreferredDifficultyName(selectedDiff ? selectedDiff.name : "");
                    }}
                >
                    {difficulties.map((diff) => (
                        <option key={diff.id} value={diff.id}>
                            {diff.name}
                        </option>
                    ))}
                </Select>
                <Button colorScheme="blue" onClick={handleSignup}>
                    Sign Up
                </Button>
                <Text>
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "blue" }}>
                        Login
                    </Link>
                </Text>
            </VStack>
        </Box>
    );
};

export default Signup;
