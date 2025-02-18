// src/pages/Login.tsx
import React, { useState } from "react";
import { Box, Button, Input, VStack, Text, useToast } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import pb from "../services/pocketbase";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await pb.collection("users").authWithPassword(email, password);
            toast({
                title: "Logged in successfully.",
                status: "success",
                duration: 3000,
            });
            navigate("/");
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
