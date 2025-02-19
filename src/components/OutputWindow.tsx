import { Box, useColorModeValue, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";


interface OutputWindowProps {
    output: string[];
    isError: boolean;
}
const OutputWindow: React.FC<OutputWindowProps> = ({ output, isError }) => {


    const [showOutput, setShowOutput] = useState(true);
    // Handler to toggle the output box
    const handleToggleOutput = () => {
        setShowOutput(!showOutput);
    };

    return (
        <div>
            {showOutput && (
                <Box
                    position="relative"
                    bg={useColorModeValue("white", "gray.700")}
                    borderTop="1px solid #ccc"
                    p={4}
                    maxH="30vh"
                    overflowY="auto"
                >
                    <Button
                        size="sm"
                        variant="outline"
                        colorScheme="blue"
                        position="absolute"
                        top="8px"
                        right="8px"
                        onClick={handleToggleOutput}
                        leftIcon={<FiEyeOff />}>
                        Hide
                    </Button>
                    <Text fontSize="lg" fontWeight="semibold" mb={2}>
                        Output
                    </Text>
                    {output?.map((line, i) => (
                        <Text key={i} color={isError ? "red.400" : undefined}>
                            {line}
                        </Text>
                    ))}
                </Box>
            )}

            {/* Floating button to re-show output if hidden */}
            {
                !showOutput && (
                    <Button
                        leftIcon={<FiEye />}
                        aria-label="Show output"
                        colorScheme="blue"
                        position="fixed"
                        bottom="20px"
                        right="20px"
                        onClick={handleToggleOutput}>
                        Show Output
                    </Button>
                )
            }

        </div>
    );
};

export default OutputWindow;