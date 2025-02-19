import React, { useState } from "react";
import { Box, Button, Input, VStack, Text, useToast } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import pb from "../services/pocketbase";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const navigate = useNavigate();
    const { setUser } = useAuth(); // Get setUser from AuthContext

    const handleLogin = async () => {
        try {
            // Authenticate the user with PocketBase
            const authData = await pb.collection("users").authWithPassword(email, password);

            // Immediately fetch the user profile using the returned model ID
            const userProfile = await pb.collection("users").getOne(authData.record.id);

            // Update the AuthContext with the fetched user profile
            setUser({
                id: userProfile.id,
                email: userProfile.email,
                preferredLanguageId: userProfile.preferredLanguageId,
                preferredLanguageName: userProfile.preferredLanguageName,
                preferredDifficultyId: userProfile.preferredDifficultyId,
                preferredDifficultyName: userProfile.preferredDifficultyName,
            });

            toast({
                title: "Logged in successfully.",
                status: "success",
                duration: 3000,
            });

            navigate("/"); // Navigate to home page after successful login
        } catch (error: any) {
            console.error("Login error:", error);
            toast({
                title: "Login failed.",
                description: error.message || "Check your credentials and try again.",
                status: "error",
                duration: 6000,
            });
        }
    };

    return (
        <Box maxW="md" mx="auto" mt={10} p={5} borderWidth="1px" borderRadius="md">
            <VStack spacing={4}>
                <Text fontSize="2xl" fontWeight="bold">Login</Text>
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
                <Button colorScheme="blue" onClick={handleLogin}>
                    Login
                </Button>
                <Text>
                    Don't have an account?{" "}
                    <Link to="/signup" style={{ color: "blue" }}>
                        Sign Up
                    </Link>
                </Text>
            </VStack>
        </Box>
    );
};

export default Login;
