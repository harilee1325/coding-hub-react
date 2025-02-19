import { Badge, HStack, Stack } from "@chakra-ui/react";
import { HiAtSymbol, HiStar } from "react-icons/hi"

const UserPreferences = ({ defaultLanguage, defaultDifficulty }: { defaultLanguage: string, defaultDifficulty: string }) => {
    return (

        <HStack align="flex-start">
            <Badge w="100px" padding="5px" borderRadius="5px" variant="solid" colorScheme="purple">
                <HiStar />
                {defaultLanguage}
            </Badge>
            <Badge w="100px" padding="5px" borderRadius="5px" variant="solid" colorScheme="green">
                <HiAtSymbol />
                {defaultDifficulty}
            </Badge>
        </HStack>
    );
};

export default UserPreferences;
