import { Box, Text } from "@chakra-ui/react";

const UserPreferences = ({ defaultLanguage, defaultDifficulty }: { defaultLanguage: string, defaultDifficulty: string }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="md"
            p={4}
            shadow="sm"
            mb={4}
        >
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
                Language: {"   "}
                <Text as="span" fontWeight="bold" color="blue.600">
                    {" " + defaultLanguage.toUpperCase()}
                </Text>
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
                Difficulty: {"   "}
                <Text as="span" fontWeight="bold" color="red.500">
                    {" " + defaultDifficulty}
                </Text>
            </Text>
        </Box>
    );
};

export default UserPreferences;
