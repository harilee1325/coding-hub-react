import React from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Profile", to: "/profile" },
];

// A simple NavLink component that uses React Router’s NavLink for active styling.
const NavLinkItem: React.FC<{ to: string; children: React.ReactNode }> = ({
    to,
    children,
}) => (
    <NavLink
        to={to}
        style={({ isActive }) => ({
            padding: "8px 16px",
            borderRadius: "4px",
            textDecoration: "none",
            color: isActive ? "#fff" : "#fff",
            backgroundColor: isActive ? "#3f51b5" : "transparent",
        })}
    >
        {children}
    </NavLink>
);

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} boxShadow="sm">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <Box fontWeight="bold" fontSize="2xl">Competitive Coding Platform</Box>
                <IconButton
                    size={"md"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={toggle}
                />
                <HStack spacing={8} alignItems={"center"} display={{ base: "none", md: "flex" }}>
                    {Links.map((link) => (
                        <NavLinkItem key={link.to} to={link.to}>
                            {link.name}
                        </NavLinkItem>
                    ))}
                </HStack>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        {Links.map((link) => (
                            <NavLinkItem key={link.to} to={link.to}>
                                {link.name}
                            </NavLinkItem>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;
