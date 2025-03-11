import React from 'react';
import { Box, Flex, Link, Text, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bg="blue.900"
      color="blue.200"
      py={4}
      width="100%"
      bottom="0"
      left="0"
    >
      <Flex
        align="center"
        justify="center"
        direction={{ base: "column", md: "row" }}
        mb={4}
      >
        <Link href="#home" mx={2}>
          Home
        </Link>
        <Divider orientation="vertical" height="20px" borderColor="blue.200" />
        <Link href="#about-us" mx={2}>
          About Us
        </Link>
        <Divider orientation="vertical" height="20px" borderColor="blue.200" />
        <Link href="#risk-factors" mx={2}>
          Risk Factors
        </Link>
        <Divider orientation="vertical" height="20px" borderColor="blue.200" />
        <Link href="#disease-alerts" mx={2}>
          Disease Alerts
        </Link>
        <Divider orientation="vertical" height="20px" borderColor="blue.200" />
        <Link href="#contact-us" mx={2}>
          Contact Us
        </Link>
      </Flex>

      <Text textAlign="center" mb={4}>
        Copyright © 2024 All Rights Reserved by Team Programming Pirates
      </Text>
      
      <Flex justify="center">
        <Text as="span" mr={2}>
          <a href="https://www.free-counter.com/" target="_blank" rel="noopener noreferrer">
            free counter
          </a>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
