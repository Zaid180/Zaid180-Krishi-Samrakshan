import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
  Box,
  Flex,
  Link,
  Button,
  IconButton,
  Stack,
  useDisclosure,
  Image,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

const NvBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Box bg="gray.800" color="white" px={4} py={3} shadow="md">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Image
              src={require("/Users/rohansingh/Desktop/WebDev/LiveStock_Project/frontend/src/Images/farmer.jpg")}
              alt="Logo"
              boxSize="120px"
              objectFit="contain"
              borderRadius="full"
              marginTop={"50px"}
            />
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
              fontWeight="bold"
            >
              {/* Home link updated to use NavLink */}
              <NavLink
                to="/"
                exact
                style={{ textDecoration: "none", color: "inherit" }}
                activeStyle={{ color: "teal.300" }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
                activeStyle={{ color: "teal.300" }}
              >
                About
              </NavLink>
              {/* Additional menu items */}
              <Menu>
                <MenuButton
                  as={Link}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                  display="flex"
                  alignItems="center"
                >
                  LiveStock Diseases
                  <ChevronDownIcon ml={2} />
                </MenuButton>
                <MenuList bg="orange" color="black">
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease 1
                  </MenuItem>
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease 2
                  </MenuItem>
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease 3
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Link}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                  display="flex"
                  alignItems="center"
                >
                  Crop Diseases
                  <ChevronDownIcon ml={2} />
                </MenuButton>
                <MenuList bg="orange" color="black">
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease A
                  </MenuItem>
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease B
                  </MenuItem>
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease C
                  </MenuItem>
                </MenuList>
              </Menu>
              <NavLink
                to="/contact"
                style={{ textDecoration: "none", color: "inherit" }}
                activeStyle={{ color: "teal.300" }}
              >
                Contact
              </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              _hover={{ bg: "teal.400" }}
            >
              Sign In
            </Button>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={onToggle}
            />
          </Flex>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink
                to="/"
                exact
                style={{ textDecoration: "none", color: "inherit" }}
                activeStyle={{ color: "teal.300" }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
                activeStyle={{ color: "teal.300" }}
              >
                About
              </NavLink>
              <Menu>
                <MenuButton
                  as={Link}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                >
                  LiveStock Diseases
                </MenuButton>
                <MenuList bg="gray.800" color="blue">
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease 1
                  </MenuItem>
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease 2
                  </MenuItem>
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease 3
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Link}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                >
                  Crop Diseases
                </MenuButton>
                <MenuList bg="gray.800" color="white">
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease A
                  </MenuItem>
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease B
                  </MenuItem>
                  <MenuItem _hover={{ bg: "teal.300", color: "black" }}>
                    Disease C
                  </MenuItem>
                </MenuList>
              </Menu>
              <NavLink
                to="/contact"
                style={{ textDecoration: "none", color: "inherit" }}
                activeStyle={{ color: "teal.300" }}
              >
                Contact
              </NavLink>
            </Stack>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default NvBar;
