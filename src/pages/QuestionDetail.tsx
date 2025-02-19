import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
    Box,
    Flex,
    Spinner,
    Center,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,
    useColorModeValue,
    Badge, Stack,
    Button,
} from "@chakra-ui/react";
import { FiTruck } from "react-icons/fi"; // Some icons for show/hide
import pb from "../services/pocketbase";
import CodeEditor from "../components/CodeEditor";
import { ExecuteCodeResult, Problem } from "../utils/types";
import { executeCode } from "../services/piston";
import OutputWindow from "../components/OutputWindow";
import { HiStar } from "react-icons/hi"

const QuestionDetail: React.FC = () => {
    const { id, language, version } = useParams<{ id: string; language: string; version: string }>();
    const [problem, setProblem] = useState<Problem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // We'll store the user’s code in state here (so we can run it).
    const [code, setCode] = useState<string>("");

    // For difficulty (if you have a separate "difficulties" collection).
    const [difficulty, setDifficulty] = useState<string>("");

    // State for run code output
    const [output, setOutput] = useState<string[] | null>(null);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    // 1) Fetch the problem
    useEffect(() => {
        const fetchQuestion = async () => {
            if (!id) {
                setLoading(false);
                return;
            }
            try {
                const record = await pb.collection("problems").getOne<Problem>(id);
                setProblem(record);
                setCode(record.code || ""); // If your record has a "code" field
            } catch (error) {
                console.error("Error fetching question:", error);
            }
            setLoading(false);
        };
        fetchQuestion();
    }, [id]);

    // 2) Fetch the difficulty name (if your problem has a "difficulty" field referencing "difficulties")
    useEffect(() => {
        const fetchDifficulty = async () => {
            if (!problem?.difficulty) return;
            try {
                const difficultyId =
                    typeof problem.difficulty === "string"
                        ? problem.difficulty
                        : problem.difficulty.id;
                const diffRecord = await pb.collection("difficulties").getOne(difficultyId);
                setDifficulty(diffRecord.name);
            } catch (error) {
                console.error("Error fetching difficulty:", error);
            }
        };
        if (problem) fetchDifficulty();
    }, [problem]);

    // 3) "Run Code" handler (calls Piston or your code execution API)
    const handleRunCode = async () => {
        try {
            setIsRunning(true);
            setIsError(false);
            setOutput(null);

            // Example: calling your "executeCode" service
            const response = await executeCode(
                language || "javascript",
                version || "18.15.0",
                code
            ) as ExecuteCodeResult;

            const { run: result } = response;

            if (result.stderr) {
                setIsError(true);
            }
            setOutput(result.output.split("\n"));
        } catch (error) {
            console.error("Run code error:", error);
            setIsError(true);
            setOutput(["An error occurred while running code."]);
        } finally {
            setIsRunning(false);
        }
    };

    if (loading) {
        return (
            <Center height="100vh">
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
            </Center>
        );
    }

    if (!problem) {
        return <Text color="red.500" p={4}>Question not found.</Text>;
    }

    return (
        <Flex direction="column" height="100vh" bg={useColorModeValue("gray.100", "gray.800")}>
            {/* Top navigation */}
            <Box p={4} bg={useColorModeValue("white", "gray.700")} boxShadow="sm">
                <Link to="/" style={{ color: "white" }}>
                    ← Back to Home
                </Link>
            </Box>

            {/* Main row: Tabs on left, Code editor on right */}
            <Flex flex="1" overflow="hidden">
                {/* Left side: Tabs for Description / Testcases */}
                <Box w="30%" overflowY="auto" p={4}>
                    <Tabs variant="enclosed" size="md" isFitted>
                        <TabList mb={4}>
                            <Tab>Description</Tab>
                            <Tab>Testcases</Tab>
                        </TabList>

                        <TabPanels>
                            {/* Description Tab */}
                            <TabPanel>
                                <Text fontSize="2xl" fontWeight="bold" mb={2}>
                                    {problem.title}
                                </Text>
                                <Stack marginBottom="10px" direction="row" spacing={2}>
                                    <Badge w="100px" paddingStart="10px" paddingEnd="10px"
                                        paddingTop="3px" paddingBottom="3px" borderRadius="5px" variant="solid" colorScheme="green">
                                        <HiStar />
                                        {difficulty || "Easy"}
                                    </Badge>
                                </Stack>
                                <Box
                                    bg={useColorModeValue("white", "gray.700")}
                                    p={4}
                                    borderRadius="md"
                                    boxShadow="sm">
                                    {problem.description || "No description available."}
                                </Box>
                            </TabPanel>

                            {/* Testcases Tab */}
                            <TabPanel>
                                <Box
                                    bg={useColorModeValue("white", "gray.700")}
                                    p={4}
                                    borderRadius="md"
                                    boxShadow="sm"
                                >
                                    <Text fontWeight="bold" mb={2}>
                                        Sample Testcases:
                                    </Text>
                                    {problem.testCases?.length ? (
                                        problem.testCases.map((testCase, index) => (
                                            <Box key={index} mb={2}>
                                                <Text>Input: {testCase.input}</Text>
                                                <Text>Expected Output: {testCase.expectedOutput}</Text>
                                            </Box>
                                        ))
                                    ) : (
                                        <Text>No testcases provided.</Text>
                                    )}
                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>

                {/* Right side: Code Editor */}
                <Box w="70%" p={4} overflowY="auto">

                    <CodeEditor
                        language={language || "javascript"}
                        defaultCode={code}
                        onCodeChange={(newCode) => setCode(newCode)}
                    />
                    {/* "Run Code" button here or inside CodeEditor if you prefer */}
                    <Button
                        position="fixed"
                        bottom="80px"
                        right="20px"
                        alignSelf="flex-end"
                        colorScheme="green"
                        mt={4}
                        leftIcon={<FiTruck />}
                        onClick={handleRunCode}
                        isLoading={isRunning}>
                        Run Code
                    </Button>
                </Box>
            </Flex>

            <OutputWindow output={output || []} isError={isError} />
        </Flex>
    );
};
export default QuestionDetail;
