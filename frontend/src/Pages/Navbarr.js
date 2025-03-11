import React, { useState, useEffect, useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
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
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import TypingEffect from "./TypingEffect";
import Heading from "./Heading";
import Footer from "./Footer";
import HomePage from "./HomePage";
import About from "./About";
import ContactUs from "./ContactUs";

// ImageSlider Component
const ImageSlider = () => {
  const images = [
    require("C:/Users/khann/OneDrive/Desktop/webdev/frontend/src/Images/cow.jpeg"),
    require("C:/Users/khann/OneDrive/Desktop/webdev/frontend/src/Images/Buff.jpeg"),
    require("C:/Users/khann/OneDrive/Desktop/webdev/frontend/src/Images/dese.jpeg"),
  ];
  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      position="relative"
      width="70%"
      maxW="700px"
      margin="0 auto"
      py={4}
      marginTop={"40px"}
      backgroundColor={"#dce294"}
    >
      <Image
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`} // Fix the alt attribute
        objectFit="cover"
        width="100%"
        height="400px"
        borderRadius="md"
        boxShadow="lg"
      />
      <IconButton
        aria-label="Previous Slide"
        icon={<ChevronLeftIcon />}
        position="absolute"
        left="20px"
        top="50%"
        transform="translateY(-50%)"
        onClick={prevSlide}
        colorScheme="teal"
      />
      <IconButton
        aria-label="Next Slide"
        icon={<ChevronRightIcon />}
        position="absolute"
        right="20px"
        top="50%"
        transform="translateY(-50%)"
        onClick={nextSlide}
        colorScheme="teal"
      />
    </Box>
  );
};

const Navbarr = () => {
  const { isOpen, onToggle } = useDisclosure();
  const history = useHistory();

  // Create refs for the Home, About, and ContactUs sections
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToHome = () => {
    if (homeSectionRef.current) {
      homeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToLivestock = () => {
    history.push("/livStock");
  };

  const goToCropstock = () => {
    history.push("/crop-disease");
  };

  useEffect(() => {
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    document.body.appendChild(injectScript);

    const configScript = document.createElement("script");
    configScript.src =
     "https://mediafiles.botpress.cloud/f14473b9-d4aa-4bf0-8e77-794e02403efb/webchat/v2.1/config.js";
    document.body.appendChild(configScript);

    // Cleanup function to remove scripts on component unmount
    return () => {
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return (
    <div>
      <Box
        bg="gray.800"
        color="white"
        px={4}
        py={3}
        shadow="md"
        position="sticky"
        top="0"
        zIndex="1000"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Image
              src={require("C:/Users/khann/OneDrive/Desktop/webdev/frontend/src/Images/farmer.jpg")}
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
              <Link
                onClick={scrollToHome}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Home
              </Link>
              <Link
                onClick={scrollToAbout}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
              <Link
                onClick={goToLivestock}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Livestock Diseases
              </Link>
              <Link
                onClick={goToCropstock}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Crop Diseases
              </Link>
              <Link
                onClick={scrollToContact}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact
              </Link>
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
              <Link
                onClick={scrollToHome}
                _hover={{ textDecoration: "none", color: "teal.300" }}
              >
                Home
              </Link>
              <Link
                onClick={scrollToAbout}
                _hover={{ textDecoration: "none", color: "teal.300" }}
              >
                About
              </Link>
              <Link
                onClick={goToLivestock}
                _hover={{ textDecoration: "none", color: "teal.300" }}
              >
                Livestock Diseases
              </Link>
              <Link
                onClick={scrollToContact}
                _hover={{ textDecoration: "none", color: "teal.300" }}
              >
                Contact
              </Link>
            </Stack>
          </Box>
        )}
      </Box>
      <div style={{ backgroundColor: "#dce294", padding: "50px" }} ref={homeSectionRef}>
        <TypingEffect />
        <Heading />
        <ImageSlider />
      </div>
      <div ref={aboutSectionRef}>
        <About />
      </div>
      <div ref={contactSectionRef}>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Navbarr;
